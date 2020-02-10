$(function(){
  function carregarLivros() {
    fetch("http://localhost:8080/bookteca-api/src/lerlivros.php").then(function(resposta){
      resposta.json().then(function(json){
        let listagem = $("#listagem")
        let coluna4 = $("<div></div>")
        coluna4.addClass("col-4")
        let card = $("<div></div>")
        card.addClass("custom-card")
        coluna4.append(card)
        let cardHeader = $("<header></header>")
        cardHeader.addClass("custom-card-header")
        card.append(cardHeader)
        let cardHeaderTitleContainer = $("<div></div>")
        cardHeaderTitleContainer.addClass("custom-card-header-container")
        let cardHeaderTitle = $("<strong></strong>")
        cardHeaderTitle.append(json[0].titulo)
        let cardHeaderSubtitle = $("<h6></h6>")
        cardHeaderSubtitle.addClass("custom-card-header-subtitle")
        cardHeaderSubtitle.append(json[0].subtitulo)
        cardHeaderTitleContainer.append(cardHeaderTitle)
        cardHeaderTitleContainer.append(cardHeaderSubtitle)
        cardHeader.append(cardHeaderTitleContainer)
        let cardHeaderIcon = $("<span></span>")
        cardHeaderIcon.addClass("custom-card-header-icon")
        cardHeader.prepend(cardHeaderIcon)
        let cardImg = $("<div></div>")
        cardImg.addClass("custom-card-img")
        cardImg.css("background-image", 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcyrVELmlX_3f08FLeUF6jxLVdVTqLgMa2UTZGW_AJPEBWFjFH")')
        card.append(cardImg)
        listagem.append(coluna4)
      })
    })
  }


  carregarLivros()
})
