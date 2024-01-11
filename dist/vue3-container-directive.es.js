const vContainer = {
  mounted(el, binding) {
    const container = el.parentElement;
    container.style.containerType = "inline-size";
    if (binding.arg !== void 0) {
      container.style.containerName = binding.arg;
    }
  },
  updated(el, binding) {
  },
  unmounted(el, binding) {
    const container = el.parentElement;
    if (binding.arg !== void 0 && container.style.containerName) {
      container.style.containerName = void 0;
    }
    if (container.style.containerType) {
      container.style.containerType = void 0;
    }
  }
};
var base = "";
const ElContainer = {
  install(app) {
    app.directive("container", vContainer);
  },
  directive: vContainer
};
export { ElContainer, vContainer as ElContainerDirective, ElContainer as default, vContainer };
