window.addEventListener('DOMContentLoaded', () => {
    fetch('https://raw.githubusercontent.com/sabuhi13/doc/main/docs/index.md').then( res => {
        document.getElementById('docs').innerHTML = res;
    });
}, false);