require('dotenv').config()
const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')

const MAIL_USER = process.env.MAIL_USER
const MAIL_PASS = process.env.MAIL_PASS

const RECIPIENT_DOMAIN = 'sebastian-schaedler.com'
const RECIPIENT_NAME = 'Sebastian Schädler'
const RECIPIENT_EMAIL = 'fabianpiper@web.de'

const formatCheckbox = (input) => {
  return input.join(', ').replace(/, ([^,]*)$/, ', $1')
}

exports.handler = function (event, context, callback) {
  console.log('called mail.js')

  const transporter = nodemailer.createTransport(
    smtpTransport({
      host: 'sslout.df.eu',
      port: 465,
      secure: false, // Activate TLS/STARTTLS
      auth: {
        user: MAIL_USER,
        pass: MAIL_PASS,
      },
    })
  )

  if (event.httpMethod !== 'POST') {
    callback(null, { statusCode: 403, body: 'FORBIDDEN' })
  }

  const form = JSON.parse(event.body)

  const emailBody = `
  <table style='border-collapse: collapse;'    >
    <tr>
      <td style='vertical-align: top; padding: 6px 14px 6px 0; font-weight: bolder;'>Name:</td>
      <td style='vertical-align: top; padding: 6px 0;'>${form.name}</td>
    </tr>
    <tr>
    <td style='vertical-align: top; padding: 6px 14px 6px 0; font-weight: bolder;'>Email-Adresse:</td>
    <td style='vertical-align: top; padding: 6px 0;'>${form.email}</td>
    </tr>
    <tr>
      <td style='vertical-align: top; padding: 6px 14px 6px 0; font-weight: bolder;'>Telefonnummer:</td>
      <td style='vertical-align: top; padding: 6px 0;'>${
        form.phone === '' ? '[keine Angabe]' : form.phone
      }</td>
    </tr>
    <tr>
      <td style="vertical-align: top; padding: 6px 14px 6px 0; font-weight: bolder;">Aus welchem Grund?:</td>
      <td style="vertical-align: top; padding: 6px 0;">${
        form.reason.length <= 0 ? '[keine Angabe]' : formatCheckbox(form.reason)
      }</td>
    </tr>
    <tr>
      <td style='vertical-align: top; padding: 6px 14px 6px 0; font-weight: bolder;'>Nachricht:</td>
      <td style='vertical-align: top; padding: 6px 0;'>${form.message}</td>
    </tr>
</table>
  `

  const emailFooter = `
        <hr style='margin: 40px 0 10px 0';/><small style='font-size: 10px;'>Diese E-Mail wurde vom Kontaktformular auf <a href='https://www.${RECIPIENT_DOMAIN}/' target='_blank'>www.${RECIPIENT_DOMAIN}</a> generiert.</small>
  `

  const original = {
    from: form.email,
    to: RECIPIENT_EMAIL,
    subject: `[${RECIPIENT_DOMAIN}] Neues Formular von ${form.name}`,
    html: `
      <h1>Neues Formular von ${form.name}</h1>
      ${emailBody}
      ${emailFooter}
`,
  }

  const duplicate = {
    from: RECIPIENT_EMAIL,
    to: form.email,
    subject: `[${RECIPIENT_DOMAIN}] Kopie Ihrer Nachricht an Sebastian Schädler`,
    html: `
      <h1>Kopie Ihrer Nachricht an ${RECIPIENT_NAME}</h1>
      <p>Vielen Dank für Ihre Anfrage. Anbei finden Sie eine Kopie Ihrer Nachricht an Sebastian Schädler:</p>
      ${emailBody}
      ${emailFooter}
`,
  }

  transporter.sendMail(original, function (error, data) {
    if (error) {
      const response = {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          error: error.message,
          message: `Beim Senden der Nachricht ist ein Fehler aufgetreten.`,
        }),
      }
      callback(null, response)
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: `Die Nachricht wurde erfolgreich verschickt.`,
      }),
    }
    callback(null, response)
  })
}
