$(function(){
  function carregarLivros(){
    fetch("http://localhost:8080/bookteca-api/src/lerlivros.php").then(function(resposta){
      resposta.json().then(function(json){
        let listagem = $("#listagem")
        for(let i = 0 ; i < json.length ; i++){
          let cardAtual = criarCard(json[i].id,json[i].titulo,json[i].subtitulo,json[i].descricao,"https://picsum.photos/200/300?random="+i);
          listagem.append(cardAtual)
        }
      })
    })
  }

  carregarLivros()

  function criarCard(id, titulo, subtitulo, descricao, imagem){
    let coluna4 = $("<div></div>")
    coluna4.addClass("col-4")
    coluna4.addClass("mb-4")
    coluna4.on("click", function(){
      window.location.href = "/livro-detalhes?id="+id;
    })
    let card = $("<div></div>")
    card.addClass("custom-card")
    coluna4.append(card)
    let cardHeader = $("<header></header>")
    cardHeader.addClass("custom-card-header")
    let cardHeaderTitleContainer = $("<div></div>")
    cardHeaderTitleContainer.addClass("custom-card-header-container")
    let cardTitle = $("<strong></strong>")
    cardTitle.addClass("custom-card-header-title")
    cardTitle.append(titulo)//passar o parametro titulo
    card.append(cardHeader)
    let cardSubTitle = $("<h6></h6>")
    cardSubTitle.addClass("custom-card-header-subtitle")
    cardSubTitle.append(subtitulo)//pegar o parametro subtitulo
    cardHeaderTitleContainer.append(cardTitle)
    cardHeaderTitleContainer.append(cardSubTitle)
    cardHeader.append(cardHeaderTitleContainer)
    let cardHeaderIcon = $("<span></span>")
    cardHeaderIcon.addClass("custom-card-header-icon")
    cardHeader.prepend(cardHeaderIcon)
    let cardImg = $("<div></div>")
    cardImg.addClass("custom-card-img")
    cardImg.css("background-image", 'url("'+ imagem +'")')//pegar o parametro imagem
    card.append(cardImg)

    return coluna4
  }
});
