window.addEventListener('DOMContentLoaded', async () => {
    const con = await fetch('https://raw.githubusercontent.com/sabuhi13/doc/main/docs/index.md');
    const response = await con.text();
    
    document.getElementById('docs').innerHTML = response;
}, false);