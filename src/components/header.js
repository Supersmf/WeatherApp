import { buildElement } from '../services/dom';

export default class Header {
  constructor(root) {
    this.el = root;
  }

  render() {
    buildElement('header', this.el);
  }
}
