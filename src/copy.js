import utils from './utils'

export const copy = {
  bind(el, { value, arg, modifiers }) {
    let position = 'top'
    if (arg) {
      position = arg
    }

    el.classList.add('copy-tooltip')
    el.setAttribute('copy-tooltip', 'click copy')
    el.setAttribute('copy-tooltip-position', arg)
    if (arg === 'callback') {
      el.$copyCallback = value
    } else {
      el.$copyValue = value
      const handler = () => {
        utils(el.$copyValue)
        el.setAttribute('copy-tooltip', 'copied')
        setTimeout(() => {
          el.setAttribute('copy-tooltip', 'click copy')
        }, 2000)
        if (el.$copyCallback) {
          el.$copyCallback(el.$copyValue)
        }
      }
      el.addEventListener('click', handler)
      el.$destroyCopy = () => el.removeEventListener('click', handler)
    }
  },

  unbind(el) {
    el.$destroyCopy()
  },

  componentUpdated(el, { value, arg }) {
    if (arg === 'callback') {
      el.$copyCallback = value
    } else {
      el.$copyValue = value
    }
  }
}

const install = Vue => {
  Vue.directive('copy', copy)
}

export default install

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
