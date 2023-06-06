function abrirMenu(){
    if(itens.style.display == 'flex'){
        itens.style.display = 'none'
    }
    else{
        itens.style.display = 'flex'
    }
}

function mudouTamanho(){
    if(window.innerWidth >= 805){
        itens.style.display = 'flex'
    }
    else{
        itens.style.display = 'none'
    }
}