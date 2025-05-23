import "./style.css";
import { callAPI } from "./api";
import type { User } from "./types";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="container mx-auto p-8  from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors min-h-screen flex items-center justify-center">
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-3xl w-full transition-all hover:shadow-xl">
      <img src="https://avatars.githubusercontent.com/u/67237215?v=4" alt="Logo" class="w-28 h-28 mx-auto mb-6 rounded-full border-4 border-blue-500 dark:border-blue-400 shadow-md" />
      <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">Ft-transcendence template</h1>
      <div class="rounded-lg overflow-hidden shadow-md mb-8 transition-transform hover:scale-[1.02]">
        <img src="https://media1.tenor.com/m/2gyJVMt_L6wAAAAC/pong-video-game.gif" alt="Background" class="w-full h-64 object-cover" />
      </div>
      <p class="text-lg text-gray-700 dark:text-gray-300 mb-2 font-medium">Made with ❤️ by bapasqui</p>
    </div>
  </div>
`;

// this is an example of how to call the API
// this will not return any thing since there is nothing in the database
// so it will return 404 not found like written in the backend
const user: User = await callAPI("/users/42", "GET");
console.log(user);