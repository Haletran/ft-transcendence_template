import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { callAPI } from "./api.ts";

// Simple function example to get data from the API and render it
function setupUserSearch() {
  const button = document.getElementById("button") as HTMLButtonElement;
  const input = document.getElementById("input") as HTMLInputElement;
  const user = document.getElementById("user") as HTMLParagraphElement;

  button.addEventListener("click", async () => {
    const userId = input.value;
    if (userId) {
      try {
        const data = await callAPI(`/users/${userId}`);
        user.innerText = `User ID: ${data.id}, Name: ${data.name}`;
      } catch (error) {
        user.innerText = "Error fetching user data";
      }
    } else {
      user.innerText = "Please enter a user ID";
    }
  });
}

// Documentation on what are the features of the template
// Show API calls
// Show how to use the API

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="container mx-auto p-6 bg-white dark:bg-gray-900 transition-colors min-h-screen">
    <div class="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto mt-10">
      <header class="bg-blue-950 p-6 text-white">
        <h1 class="text-3xl font-bold">Ft-Transcendence Template</h1>
      </header>
      
      <div class="p-6">
        <h2 class="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
          API Endpoints
        </h2>
        
        <div class="space-y-4">

          <p class="text-gray-600 dark:text-gray-300">
            To access data from the DB or add data, you create API endpoints.
          </p>

          <p class="text-gray-600 dark:text-gray-300">
              Endpoints are like functions, that require a request and return a response. In this example, I request the function to give me the
              associated user link to the id given in parameter. And in response, it return the id and the name of the associated user.
          </p>

          <p class="text-gray-600 dark:text-gray-300">
            In a request, you have different types of methods and each of them has a different purpose:
          </p>
          <ul class="list-disc pl-6 text-gray-600 dark:text-gray-300">
            <li><strong>GET</strong>: Retrieve data from the server.</li>
            <li><strong>POST</strong>: Send data to the server to create a new resource.</li>
            <li><strong>PUT</strong>: Update an existing resource on the server.</li>
            <li><strong>DELETE</strong>: Remove a resource from the server.</li>
            <li><strong>PATCH</strong>: Apply partial modifications to a resource.</li>
          </ul>
          <p class="text-gray-600 dark:text-gray-300">
            Here is an example of a response to a GET request to an endpoint:
          </p>
          <div class="border dark:border-gray-700 rounded-lg overflow-hidden">
            <div class="bg-gray-50 dark:bg-gray-700 px-4 py-3 border-b border-gray-200 dark:border-gray-600 flex justify-between items-center">
              <span class="font-mono text-sm font-medium px-2 py-1 rounded bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">GET</span>
              <span class="font-mono text-sm font-medium">/api/users/:id</span>
            </div>
            <pre class="bg-gray-100 dark:bg-gray-800 p-4 overflow-x-auto text-sm text-gray-800 dark:text-gray-200">
// Request
GET /api/users/1 HTTP/1.1

// Response
{
  "id": "1",
  "name": "bapasqui"
}</pre>
          </div>
        </div>
      </div>
      
      <div class="bg-gray-50 dark:bg-gray-800 p-6 border-t border-gray-200 dark:border-gray-700">
        <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">Try it yourself</h3>
        <div class="flex gap-2 mb-4">
          <input id="input" placeholder="Enter user ID" class="flex-1 px-4 py-2 border rounded-md text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button id="button" class="px-5 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Search
          </button>
        </div>
        <div class="p-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md">
          <p id="user" class="text-sm text-gray-600 dark:text-gray-300">Results will appear here</p>
        </div>
      </div>
    </div>
  </div>
`;

// Initialize the search functionality
setupUserSearch();

//setupUserSearch();
