import ulits from '@/ulits/ulits'

export default {
  inserted (el, binding) {
    const offset = {
      top: el.offsetTop,
      height: el.offsetHeight
    }
    console.log(offset.top)
    document.addEventListener('scroll', function () {
      let scrollTop = window.scrollY
      if (scrollTop >= offset.top - binding.value) {
        ulits.css(el, {
          'position': 'fixed',
          'top': binding.value
        })
        ulits.css(el.parentNode, {
          'padding-top': offset.height
        })
      } else {
        ulits.css(el, {
          'position': 'relative',
          'top': 0
        })
        ulits.css(el.parentNode, {
          'padding-top': binding.value
        })
      }
    }, false)
  },
  bind () {},
  update () {},
  componentUpdated () {},
  unbind () {}
}
