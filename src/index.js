import { vContainer } from './directive'
import '../style'

// installer and everything in all
export const ElContainer = {
  install(app) {
    app.directive('container', vContainer)
 },
  directive: vContainer,
}

export default ElContainer
export { vContainer, vContainer as ElContainerDirective }

