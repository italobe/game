let personagem;
let grama;
let tamanho = 64;
let andarX = 0;
let andarY = 0;
let botao;
let fogo;
let fogox;
let fogoy = 64;

function setup() {
  createCanvas(576, 576);
  personagem = loadImage('person.png')
  fogo = loadImage('fogo.png')
  grama = loadImage('grass.png')

}

function draw() {
  background(225);

  for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++) {
      image(grama, x * tamanho, y * tamanho, tamanho, tamanho)
    }
  }

  image(fogo, fogox, fogoy, tamanho, tamanho)
  fogoy++
  if (fogoy > 576) {
    fogox = random(64, 512)
    fogoy = 0
  }

  image(personagem, andarX, andarY, tamanho, tamanho)

  c = dist(andarX, andarY, fogox, fogoy)
  if (c > 0 && c < 65) {
    botao2 = createButton('reiniciar')

    botao2.mousePressed(reiniciar2)

    noLoop()

  }

  if (andarX === 512 && andarY === 512) {
    rect(160, 160, 256, 256)
    textSize(35)
    text('GANHOU!', 200, 300)

    botao = createButton('Reiniciar')

    botao.mousePressed(reiniciar)

    noLoop()
  }

  textSize(14)
  text(`X = ${andarX} - Y = ${andarY}`, 300, 500);
}

function reiniciar() {
  andarX = 0;
  andarY = 0;
  botao.remove();
  loop();
}
function reiniciar2() {
  andarX = 0;
  andarY = 0;
  botao2.remove();
  loop();
}

function keyPressed() {
  if (keyIsDown(RIGHT_ARROW) && andarX < 512) {
    andarX += 64
  }

  if (keyIsDown(LEFT_ARROW) && andarX > 0) {
    andarX -= 64
  }

  if (keyIsDown(DOWN_ARROW) && andarY < 512) {
    andarY += 64
  }

  if (keyIsDown(UP_ARROW) && andarY > 0) {
    andarY -= 64
  }
}




