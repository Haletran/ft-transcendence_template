import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { callAPI } from './api.ts'

// Simple function example to get data from the API and render it 
function setupUserSearch() {
  const button = document.getElementById('button') as HTMLButtonElement
  const input = document.getElementById('input') as HTMLInputElement
  const user = document.getElementById('user') as HTMLParagraphElement
  
  button.addEventListener('click', async () => {
    const userId = input.value
    if (userId) {
      try {
        const data = await callAPI(`/users/${userId}`)
        user.innerText = `User ID: ${data.id}, Name: ${data.name}`
      } catch (error) {
        user.innerText = 'Error fetching user data'
      }
    } else {
      user.innerText = 'Please enter a user ID'
    }
  })
}

// Create the app HTML with dark mode classes
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container mx-auto p-4 flex items-center justify-center min-h-screen bg-white dark:bg-gray-900 transition-colors">
    <div class="w-full max-w-md">
      <header class="mb-8">
        <h1 class="text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-2">FT_TRANSCENDENCE</h1>
        <div class="flex justify-center">
        </div>
      </header>
      
      <div class="card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mx-auto">
        <div class="mb-4">
          <label for="input" class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">User ID:</label>
          <input 
            id="input" 
            type="text" 
            placeholder="Enter a user ID" 
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600"
            aria-label="User ID input"
          />
        </div>
        <button 
          id="button"
          class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors dark:bg-indigo-700 dark:hover:bg-indigo-800"
        >
          Get User
        </button>
        <p id="user" class="mt-4 text-center text-gray-700 dark:text-gray-300"></p>
      </div>
    </div>
  </div>
`


setupUserSearch();
