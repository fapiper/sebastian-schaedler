export default (to, from, savedPosition) => {
  const getScrollPosition = async () => {
    if (savedPosition) {
      return savedPosition
    }

    const findEl = (selector, x) => {
      return (
        document.querySelector(selector) ||
        new Promise((resolve, reject) => {
          if (x > 50) {
            return resolve()
          }
          setTimeout(() => {
            resolve(findEl(selector, ++x || 1))
          }, 100)
        })
      )
    }

    if (to.hash || to.name === from.name) {
      const el = await findEl(to.hash || 'body')
      if (
        'scrollBehavior' in document.documentElement.style &&
        to.name === from.name
      ) {
        return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
      } else {
        return window.scrollTo(0, el.offsetTop)
      }
    }

    return { x: 0, y: 0 }
  }

  return new Promise((resolve, reject) => {
    setTimeout(
      async () => {
        const pos = await getScrollPosition()
        resolve(pos)
      },
      to.name === from.name ? 0 : 1800
    )
  })
}
