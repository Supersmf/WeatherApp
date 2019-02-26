import { buildElement } from '../services/dom';
import PanelCitySmall from './PanelCitySmall';
import { getDbData } from '../actions/renderData';

export default class PanelStorageCity {
  constructor(root, props) {
    this.root = root;
    this.props = props;
  }

  render() {
    const renderTemplate = (data) => {
      buildElement('div', this.root, this.add(data));
    };
    getDbData(renderTemplate);
  }

    add = (data) => {
      const panelCitySmall = new PanelCitySmall(this.root);
      panelCitySmall.render(data);
    }
}
