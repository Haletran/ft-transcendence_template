import "./style.css";
import { callAPI } from "./api";
import type { User } from "./types";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="container mx-auto p-6 bg-white dark:bg-gray-900 transition-colors min-h-screen flex items-center justify-center">
    <div class="text-center">
      <img src="https://avatars.githubusercontent.com/u/67237215?v=4" alt="Logo" class="w-32 h-32 mx-auto mb-6" />
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Ft-transcendence template</h1>
      <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">Made by bapasqui</p>
    </div>
  </div>
`;

// this is an example of how to call the API
// this will not return any thing since there is nothing in the database
// so it will return 404 not found like written in the backend
const user: User = await callAPI("/users/42", "GET");
console.log(user);