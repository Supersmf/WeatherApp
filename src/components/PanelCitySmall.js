import { getMetric } from '../services/props';
import { buildElement } from '../services/dom';

export default class PanelStorageCity {
  constructor(root, props) {
    this.root = root;
    this.props = props;
  }

  template = data => `
        <p>${data.name}, ${data.sys.country}  <span class="viewTemp">${data.main.temp} °${getMetric() ? 'C' : 'F'}</span></p>
    `;

    changeTemplate = ({ detail: data }) => {
      const children = Array.from(this.root.children);
      console.log(children[0]);
      children.forEach((chld) => {
        console.log(chld);
        const temp = chld.querySelector('.viewTemp');
        console.log(temp);
      });
      // let { temp } = this.data.main;
      // if (getMetric()) {
      //   temp = data.calcF(temp);
      // } else {
      //   temp = data.calcC(temp);
      // }
      // this.data.main.temp = temp;
      // this.root.innerHTML = this.template(this.data);
    }

    render(data) {
      buildElement('div', this.root, this.template(data), 'storageWeatherPanel');
      document.addEventListener('changeUnit', this.changeTemplate);
    }
}
