export function render404() {
    const html = `
      <div class="container mx-auto p-8 from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors min-h-screen flex flex-col items-center justify-center">
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-3xl w-full transition-all hover:shadow-xl">
          <h1 class="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 text-center">404 - Page Not Found</h1>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 text-center">Sorry, the page you are looking for does not exist.</p>
          <div class="flex justify-center">
            <a href="/" class="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Go back to Home
            </a>
          </div>
        </div>
      </div>
    `;
    return html;
  }