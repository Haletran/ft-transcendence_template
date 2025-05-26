import './style.css';
import { setupRouter } from './router/index';

const app = document.querySelector<HTMLDivElement>('#app')!;

function render() {
  app.innerHTML = `
    <main id="content"></main>
  `;
  setupRouter();
}

render();