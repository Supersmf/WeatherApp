import { getMetric } from '../services/props';
import { buildElement } from '../services/dom';
import { getMultiData, getCityDB } from '../services/api';
import { getLocalHistory, convertData } from '../services/storage';
import PanelCitySmall from '../components/PanelCitySmall';

export default class PanelStorageCity {
  constructor(root, props) {
    this.root = root;
    this.props = props;
  }
  
    render() {
      const store = getLocalHistory();

      getCityDB().then((data) => {
        let strJSONid = data.reduce((id, item) => `${id},${item.id}`, '');
        strJSONid = strJSONid.slice(1);
        getMultiData(`${strJSONid}`, getMetric())
          .then(items => items.list.forEach(item => buildElement('div', this.root, this.add(convertData(item)))));
      });
      // document.addEventListener('addToLocal', this.add);
    }


    add = (data) => {
    const panelCitySmall = new PanelCitySmall(this.root);
    panelCitySmall.render(data);
    }
}
