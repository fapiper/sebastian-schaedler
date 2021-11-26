import AOS from 'aos'
import 'aos/dist/aos.css'

export default ({ app }, inject) => {
  // eslint-disable-next-line new-cap
  inject('aos', new AOS.init({ once: true }))
}
