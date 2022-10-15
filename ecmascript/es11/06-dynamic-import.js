// Dynamic import is supported in ES11

// Is used to import modules dynamically
// that means at runtime

const $button = document.getElementById('btn');

$button.addEventListener('click', async () => {
    const module = await import('./06-module.js');
    console.log(module);
    module.hello();
});