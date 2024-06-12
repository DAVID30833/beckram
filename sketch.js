let palavra
function setup() {
  createCanvas(400, 400);
  palavra = palavraaleatoria();
}

function palavraaleatoria(){
  let palavras =["david","julia","andreza",];
  return random(palavras);
  }
function inicializacores(){
  background(" blue")

  fill ("black");
  textSize(64);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo){
  let quantidade =map(mouseX, minimo, maximo, 1,
palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial
}

function draw() {
  
 inicializacores();
  let texto = palavraParcial(0, width);
  text(texto, 200, 200); 
}