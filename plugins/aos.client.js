import AOS from 'aos'
import 'aos/dist/aos.css'

export default ({ app }, inject) => {
  // eslint-disable-next-line new-cap,no-new
  new AOS.init({
    once: true,
    offset: 0,
  })

  inject('AOS', AOS)
}
