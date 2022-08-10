window.addEventListener('DOMContentLoaded', () => {
    fetch('../docs/index.md').then( res => {
        document.getElementById('docs').innerHTML = res;
    });
}, false);