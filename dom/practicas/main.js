const objs = []

window.onload =() => {
    const form = document.getElementById('Formulario');
    form.onsubmit = (e) => {
        e.preventDefault();
        const text = document.getElementById('texto');
        const textodetexto = text.value;
        text.value = '';
        objs.push (textodetexto);
        const lista = document.getElementById('lista');
        const texttemplate = objs.map (t => '<li>' + t + '</li>');
        lista.innerHTML = texttemplate.join('');

    }
}