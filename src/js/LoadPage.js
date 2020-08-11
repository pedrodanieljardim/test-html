document.querySelectorAll('a').forEach(link => {
    link.onclick = function (e)
    {
        e.preventDefault()
        const content = document.getElementById('content');
        fetch(link.href).then(resp => resp.text()).then(html => content.innerHTML = html);
    }
})