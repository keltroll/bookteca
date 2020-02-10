<?php
include('livro.php');
include_once('conexao.php');

$conexao = new Conexao();
$livroTemp = new Livro();
$livroTemp->id = $_GET["id"];
$resultado = $livroTemp->lerLivro($conexao);

$livroJson = "";

if($resultado){
  while ($livroLaco = $resultado->fetch_assoc()) {
    $livroObjeto = new Livro();
    $livroObjeto->id = $livroTemp->id;
    $livroObjeto->titulo = $livroLaco['titulo'];
    $livroObjeto->subtitulo = $livroLaco['subtitulo'];
    $livroObjeto->descricao = $livroLaco['descricao'];
    $livroJson = json_encode($livroObjeto);

}
  include('cors.php');
  echo $livroJson;
}else{
    http_response_code(404);
}
?>
