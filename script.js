
console.log("Site carregado com sucesso!");

document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        console.log("Navegação:", link.textContent);
    });
});
