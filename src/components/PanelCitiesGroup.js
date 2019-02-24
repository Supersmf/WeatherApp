import { getMetric } from '../services/props';
import { buildElement } from '../services/dom';
import { getMultiData, getCityDB } from '../services/api';
import { getLocalHistory, convertData } from '../services/storage';
import PanelCitySmall from '../components/PanelCitySmall';

export default class PanelCitiesGroup {
  constructor(root, props) {
    this.root = root;
    this.props = props;
  }

  template = ({ name, country, temp, weather, pressure }, unit) => `
      <p>${name}, ${country}  <span class="viewTemp">${temp} °${unit}</span></p>
    `;
  
    render() {
      // document.addEventListener('addToLocal', this.add);
      const stoage = getLocalHistory();
      stoage.forEach(item => buildElement('div', this.root, this.template(item, getMetric() ? 'C' : 'F')));
      document.addEventListener('addToLocal', this.update);
    }


    update = () => {
      const stoage = getLocalHistory();
      this.root.innerHTML = '';
      stoage.forEach(item => buildElement('div', this.root, this.template(item, getMetric())));
    // const panelCitySmall = new PanelCitySmall(this.root);
    // panelCitySmall.render(data);
    }
}
