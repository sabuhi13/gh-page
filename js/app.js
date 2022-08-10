window.addEventListener('DOMContentLoaded', async function() {
    const con = await fetch('https://raw.githubusercontent.com/sabuhi13/doc/main/docs/index.md');
    const response = await con.text();
    
    document.getElementById('docs').innerHTML = marked.parse(response);
}, false);

/**
 * https://raw.githubusercontent.com/sabuhi13/doc/main/docs/index.md
 * 
 * https://api.github.com/repos/laravel/laravel
 */