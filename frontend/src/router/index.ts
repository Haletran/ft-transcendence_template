import type { Route } from '../types';
import { renderHome } from '../pages/home';
import { render404 } from './../not_found';
import { renderTest } from '../pages/test';

const routes: Route[] = [
  { path: '/', component: renderHome },
  { path: '/test', component: renderTest },
  { path: '*', component: render404 },
];

export function setupRouter() {
  const content = document.querySelector<HTMLDivElement>('#content');
  
  if (!content) {
    throw new Error('Content element not found');
  }

  async function navigateTo(path: string) {
    const route = routes.find(route => route.path === path) || routes.find(route => route.path === '*');
    if (route) {
      if (!content) return;
      content.innerHTML = '<div class="flex justify-center items-center min-h-screen"><div class="text-lg">Loading...</div></div>';
      try {
        const html = await route.component();
        content.innerHTML = html;
      } catch (error) {
        console.error('Error rendering component:', error);
        content.innerHTML = '<div class="flex justify-center items-center min-h-screen"><div class="text-red-500">Error loading page</div></div>';
      }
    }
  }

  window.addEventListener('popstate', () => {
    navigateTo(window.location.pathname);
  });

  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (target.matches('a[href^="/"]')) {
      event.preventDefault();
      const path = target.getAttribute('href');
      if (path) {
        window.history.pushState({}, '', path);
        navigateTo(path);
      }
    }
  });

  navigateTo(window.location.pathname);
}