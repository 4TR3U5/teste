const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');
const overlay = document.getElementById('overlay');
const botoesFiltro = document.querySelectorAll('.botao-filtro');
const todosItens = document.querySelectorAll('#catalogo-principal .botao');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('menu-hidden');
    overlay.classList.toggle('menu-hidden');
    menuIcon.classList.toggle('open');
});

overlay.addEventListener('click', () => {
    navMenu.classList.add('menu-hidden');
    overlay.classList.add('menu-hidden');
    menuIcon.classList.remove('open');
});

botoesFiltro.forEach(botao => {
    botao.addEventListener('click', (e) => {
        navMenu.classList.add('menu-hidden');
        overlay.classList.add('menu-hidden'); 
        menuIcon.classList.remove('open');
        
        const categoriaSelecionada = e.target.getAttribute('data-categoria');

        todosItens.forEach(item => {
            if (categoriaSelecionada === 'todos') {
                item.classList.remove('item-hidden');
            } 
            else if (!item.classList.contains(categoriaSelecionada)) {
                item.classList.add('item-hidden');
            } 
            else {
                item.classList.remove('item-hidden');
            }
        });
    });
});