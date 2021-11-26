import AOS from 'aos'
import 'aos/dist/aos.css'

export default ({ app }, inject) => {
  inject(
    'aos',
    // eslint-disable-next-line new-cap
    new AOS.init({
      once: true,
      offset: 325,
    })
  )
}
