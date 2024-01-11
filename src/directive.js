
const classNameToArray = (cls = '') =>
    cls.split(' ').filter((item) => !!item.trim())

const addClass = (el, cls) => {
  if (!el || !cls.trim()) return
  el.classList.add(...classNameToArray(cls))
}

const removeClass = (el, cls) => {
  if (!el || !cls.trim()) return
  el.classList.remove(...classNameToArray(cls))
}

export const vContainer = {
  mounted(el, binding) {
    const container = el.parentElement
    // addClass(container, 'v-container-parent')
    container.style.containerType = 'inline-size'
    if (binding.arg !== undefined) {
      container.style.containerName = binding.arg
    }
    // console.log('mounted', el, container, binding)
  },
  updated(el, binding) {
  },
  unmounted(el, binding) {
    const container = el.parentElement
    // removeClass(container, 'v-container-parent')
    if (binding.arg !== undefined && container.style.containerName) {
      container.style.containerName = undefined
    }
    if (container.style.containerType) {
      container.style.containerType = undefined
    }
  },
}
