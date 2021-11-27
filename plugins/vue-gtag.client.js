import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app }) => {
  const hasConsent = app.$cookies.get('ss_consent')
  Vue.use(
    VueGtag,
    {
      config: { id: process.env.googleAnalyticsId },
      bootstrap: hasConsent,
      appName: 'SEBASTIAN_SCHAEDLER',
      enabled: !process.env.dev,
      pageTrackerScreenviewEnabled: true,
    },
    app.router
  )
}
