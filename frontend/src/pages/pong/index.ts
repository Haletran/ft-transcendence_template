export function renderPong(): string {
    const html = `
        <div class="container mx-auto p-8 from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors min-h-screen flex flex-col items-center justify-center">
            <iframe class="w-full h-[80vh] rounded-lg shadow-lg" src="https://freepong.org/" title="Pong Game"></iframe>
        </div>
    `;
    return html;
}