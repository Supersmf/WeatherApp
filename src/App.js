import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Navigate from './components/Navigate';

export default class App {
  constructor(root) {
    this.root = root;
  }

  render() {
    const header = new Header(this.root);
    const navigate = new Navigate(this.root);
    const content = new Content(this.root);
    const footer = new Footer(this.root);

    header.render();
    navigate.render();
    content.render();
    footer.render();
  }
}
