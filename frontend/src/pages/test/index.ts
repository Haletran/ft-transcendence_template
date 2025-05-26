import { callAPI } from "../../api";

export async function renderTest() {
    const html = `
    <div class="container mx-auto p-8 from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors min-h-screen flex flex-col items-center justify-center">
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-3xl w-full transition-all hover:shadow-xl">
        <div class="rounded-lg overflow-hidden shadow-md mb-8 transition-transform hover:scale-[1.02]">
          <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDFieXczbDRzdHUwZmxmcWZqem91bDN0cjNuMGF0dGFxZDd5NjE5dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT0xeDR5iYp9DWTeVO/giphy.gif" alt="Test" class="w-full h-64 object-cover" />
        </div>
        <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 font-medium text-center">This is a test page to demonstrate routing and API calls.</p>
        <div class="text-center mb-6">
            <button id="ping-button" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              <svg class="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m-6 0l3-3V8m-3 4h6a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v4a2 2 0 002 2z"></path>
              </svg>
              Click to ping the API
            </button>
            <p id="ping-result" class="mt-4 text-gray-600 dark:text-gray-400"></p>
        </div>
         <div class="flex justify-center">
          <a href="/" class="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Go back to Home
          </a>
        </div>
      </div>
    </div>
    `;

    async function ping() {
        try {
            // Example API call to demonstrate functionality
            const response = await callAPI('/ping', 'GET');
            console.log('API response:', response);
            const resultElement = document.getElementById('ping-result');
            if (resultElement) {
                resultElement.textContent = `API response: ${response.message}`;
            }
        }
        catch (error) {
            console.error('API call failed:', error);
        }
    }
    setTimeout(() => {
        const button = document.getElementById('ping-button');
        if (button) {
            button.addEventListener('click', ping);
        }
    }, 0);

    return html;
}