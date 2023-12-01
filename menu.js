
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY > 0)
})
        const botaoWhatsapp = document.getElementById("botao");
        const numeroTelefone = "5519997711979";
        const mensagemPredefinida = "Olá, preciso de ajuda com meu agendamento";
        const urlWhatsapp = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${encodeURIComponent(mensagemPredefinida)}`;
        botaoWhatsapp.addEventListener("click", function() {
            window.location.href = urlWhatsapp;
        });