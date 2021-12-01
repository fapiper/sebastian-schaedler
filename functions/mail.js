require('dotenv').config()
const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')

const RECIPIENT_DOMAIN = 'sebastian-schaedler.com'
const RECIPIENT_EMAIL = 'info@' + RECIPIENT_DOMAIN
const RECIPIENT_NAME = 'Sebastian Schädler'

const { SMTP_USER, SMTP_PASS } = process.env

const formatCheckbox = (input) => {
  return input.join(', ').replace(/, ([^,]*)$/, ', $1')
}

exports.handler = async function (event, context, callback) {
  console.log('called mail.js')

  const sendMail = (mailOptions) => {
    const setup = smtpTransport({
      host: 'smtp.strato.de',
      port: 465,
      secure: true,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    })

    return new Promise((resolve, reject) => {
      const transporter = nodemailer.createTransport(setup)

      transporter.sendMail(mailOptions, function (error, data) {
        if (error) {
          reject(error) // or use rejcet(false) but then you will have to handle errors
        } else {
          resolve(data)
        }
      })
    })
  }
  const createMail = (form) => {
    const body = `
  <table style='border-collapse: collapse;'>
    <tr>
      <td style='vertical-align: top; padding: 6px 14px 6px 0; font-weight: bolder;'>Vorname:</td>
      <td style='vertical-align: top; padding: 6px 0;'>${form.firstName}</td>
    </tr>
    <tr>
      <td style='vertical-align: top; padding: 6px 14px 6px 0; font-weight: bolder;'>Nachname:</td>
      <td style='vertical-align: top; padding: 6px 0;'>${form.lastName}</td>
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

    const footer = `
        <hr style='margin: 40px 0 10px 0';/><small style='font-size: 10px;'>Diese Nachricht wurde von dem Kontaktformular unter <a href='https://www.${RECIPIENT_DOMAIN}/contact' target='_blank'>www.${RECIPIENT_DOMAIN}/contact</a> generiert. <b>Antworten Sie nicht auf diese Email.</b> Verwenden Sie stattdessen bitte entweder das Kontaktformular unter <a href='https://www.${RECIPIENT_DOMAIN}/contact' target='_blank'>www.${RECIPIENT_DOMAIN}/contact</a> oder senden Sie eine Email an <a href='mailto:${RECIPIENT_EMAIL}'>${RECIPIENT_EMAIL}</a></small>
  `

    return { body, footer }
  }

  if (event.httpMethod !== 'POST') {
    callback(null, { statusCode: 403, body: 'FORBIDDEN' })
  }

  const form = JSON.parse(event.body)
  const mail = createMail(form)

  const original = {
    from: 'no-reply@sebastian-schaedler.com',
    to: RECIPIENT_EMAIL,
    subject: `[${RECIPIENT_DOMAIN}] Neues Formular von ${form.firstName} ${form.lastName}`,
    html: `
      <h1>Neues Formular von ${form.firstName} ${form.lastName}</h1>
      ${mail.body}
      ${mail.footer}
`,
  }

  const duplicate = {
    from: 'no-reply@sebastian-schaedler.com',
    to: form.email,
    subject: `[${RECIPIENT_DOMAIN}] Kopie Ihrer Nachricht an Sebastian Schädler`,
    html: `
      <h1>Kopie Ihrer Nachricht an ${RECIPIENT_NAME}</h1>
      <p>Vielen Dank für Ihre Anfrage. Anbei finden Sie eine Kopie Ihrer Nachricht an Sebastian Schädler:</p>
      ${mail.body}
      ${mail.footer}
`,
  }

  try {
    await sendMail(original)
    await sendMail(duplicate)

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: `Die Nachricht wurde erfolgreich verschickt.`,
      }),
    }
    callback(null, response)
  } catch (err) {
    const response = {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: err.message,
        message: `Beim Senden der Nachricht ist ein Fehler aufgetreten.`,
      }),
    }

    console.error('Error sending mail: ', err)
    callback(null, response)
  }
}
