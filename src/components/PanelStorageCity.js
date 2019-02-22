import { getMetric } from '../services/props';
import { buildElement } from '../services/dom';
import { getMultiData, getCityDB } from '../services/api';
import { getLocalHistory } from '../services/storage';

export default class PanelStorageCity {
  constructor(root, props) {
    this.root = root;
    this.props = props;
  }

  template = () => `
        <div class="storageContainer"></div>
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

    render() {
      buildElement('div', this.root, this.template());
      const store = getLocalHistory();

      getCityDB().then((data) => {
        let strJSONid = data.reduce((id, item) => `${id},${item.id}`, '');
        strJSONid = strJSONid.slice(1);
        getMultiData(`${strJSONid}`, getMetric())
          .then(items => items.list.forEach(item => buildElement('div', this.root, this.add({ detail: item }))));
      });
      document.addEventListener('addToLocal', this.add);
      // document.addEventListener('changeUnit', this.changeTemplate);
    }


    add = ({ detail: data }) => {
      const element = document.querySelector('.storageContainer');
      const template = `
        <p>${data.name}, ${data.sys.country}  <span class="viewTemp">${data.main.temp} °${getMetric() ? 'C' : 'F'}</span></p>
    `;
      buildElement('div', element, template, 'storageWeatherPanel');
      document.addEventListener('changeUnit', this.changeTemplate);
    }
}
