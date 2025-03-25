$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown(); //ANIMACÃO JQUERY
    })

    $('#button-cancelar').click(function () {
        $('form').slideUp(); //ANIMACÃO JQUERY
    })

    // // CALBACK EM JAVA-SCRIPT
    // document.querySelector('header button').addEventListener('click', function() {

    // })
    // // CALBACK EM JQUARY
    // $('header button').click(function() { 
    //    alert('Olá mundo')

    // })
    //REMOVER SUBMIT DE ATUALIZAR A PAGINA
    $('form').on('submit', function (e) {
        e.preventDefault();

        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none;"></li>');

        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
           <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Abre imagem"> Ver imagem</a>
           </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000); //ANIMACÃO JQUERY
        $('#endereco-imagem-nova').val('')
    })
})