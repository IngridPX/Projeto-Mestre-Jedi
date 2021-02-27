export const exibirCategoria = (e, categoria) => {

    var produtos = document.querySelectorAll('div#Bolos Caseiros, div#Bolos com Calda, div#Bolos de Festa, div#Bolos de Pote, div#Bolos Funcional, div#Cheesecakes sem Forno, div#Rocambole')

    if(categoria == 'todos') {
        for(var i = 0; i < produtos.length; i++) {

            produtos[i].style.display = 'flex'    
        }
    } else {
    
        for(var i = 0; i < produtos.length; i++) {

            if(produtos[i].id == categoria) {
                produtos[i].style.display = 'flex'
            } else {
                produtos[i].style.display = 'none'
            }
        }
    }
}