import "./style.css";
import { callAPI } from "./api";
import type { User } from "./types";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="container mx-auto p-8 from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors min-h-screen flex flex-col items-center justify-center">
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-3xl w-full transition-all hover:shadow-xl">
      <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 text-center">Ft-transcendence template</h1>
      <div class="rounded-lg overflow-hidden shadow-md mb-8 transition-transform hover:scale-[1.02]">
        <img src="https://media1.tenor.com/m/2gyJVMt_L6wAAAAC/pong-video-game.gif" alt="Background" class="w-full h-64 object-cover" />
      </div>
      <p class="text-lg text-gray-700 dark:text-gray-300 mb-2 font-medium text-center">Made with ❤️ by bapasqui</p>
      <div class="flex justify-center">
        <a href="https://github.com/Haletran/ft-transcendence_template" target="_blank" class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
          <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.481C17.137 18.163 20 14.418 20 10.017 20 4.484 15.522 0 10 0z" clip-rule="evenodd" />
          </svg>
          Give me a star on GitHub
        </a>
      </div>
    </div>
  </div>
`;

// this is an example of how to call the API
// this will not return any thing since there is nothing in the database
// so it will return 404 not found like written in the backend
const user: User = await callAPI("/users/42", "GET");
console.log(user);