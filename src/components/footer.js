import { buildElement } from '../services/dom';

export default class Footer {
  constructor(root) {
    this.el = root;
  }

  render() {
    buildElement('footer', this.el, null, 'footer');
  }
}
