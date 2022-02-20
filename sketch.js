var x = 75;
var y = 100;
var level = 1;
var tela = 0;
var resposta = 1;
var vidas= 3;

var Lim1 = 0
var Lim2 = 4

var OpcoesErradas=["50 ","70", "65", "30","ERRADA", "ERRADA", "ERRADA", "ERRADA", "ERRADA"]

var OpcoesCorretas=["40", "CERTA", "CERTA", "CERTA"]

var res1 = 0, res2 = 0, res3 = 0, res4 = 0

var PosicaodasAlternativas = 0

var PosicaoCORRETAdasAlternativas

function preload() {
  img = loadImage('children-holding-card-number_1639-5214.jpg')
  creditos = loadImage('jacob2.jpg')
  gameover= loadImage('GAME OVER.jpg')
  youwin= loadImage('YOU WIN.jpg')
  musica = loadSound('Tema do Jogo.mp3')
}

function setup() {
  sorteio();
  createCanvas(500, 400);
  musica.play()
}

function draw() {
  background(img,220);
  
  if (tela == 0) {

  rect(x,y, 175, 45,10)
  textSize(40)
  text("Matemágica", 120 , 50)
  textSize(32)
  text("Iniciar", 90, 130)
  text("Instruções", 90 , 230)
  text("Créditos", 90 ,330)
    textSize(14)
    text("Use as setas", 380, 380)
    
  } 
  
    else if (tela == 1) {
    textSize(30)
    text("Vamos Jogar", 40,50)
    textSize(18)
    text("Qual é o valor desta expressão: 20+30-10", 40, 80)
    textSize(14)
    text("ESC para voltar", 380, 380)
    

  fill("#FFFFFF"); 
  rect(130, 180, 125, 50, 30)
  if(mouseX>=130 && mouseX<=255 && mouseY>=180 && mouseY<=230){
        fill("#81DAF5")
        rect(110, 180, 125, 50, 30)
        if(PosicaoCORRETAdasAlternativas == 1){
            if(mouseIsPressed){ 
            tela=5
            PosicaodasAlternativas++
            Lim1 = Lim1 + 2
            Lim2 = Lim2 +2
            sorteio()
            } 
        }else{if(mouseIsPressed){
          tela=4
         
          
        }
    }
  }

  fill("#FFFFFF"); 
  rect(130, 250, 125, 50, 30)
  if(mouseX>=130 && mouseX<=255 && mouseY>=250 && mouseY<=300){
        fill("#81DAF5")
        rect(130, 250, 125, 50, 30)
        if(PosicaoCORRETAdasAlternativas == 2){
            if(mouseIsPressed){ 
            tela=5
            PosicaodasAlternativas++
            Lim1 = Lim1 + 2
            Lim2 = Lim2 +2
            sorteio()
            } 
        }else{if(mouseIsPressed){
          tela=4
         
          
        }
      }
  }
    
  fill("#FFFFFF"); 
  rect(130, 320, 125, 50, 30)
  if(mouseX>=130 && mouseX<=255 && mouseY>=320 && mouseY<=370){
        fill("#81DAF5")
        rect(130, 320, 125, 50, 30)
        if(PosicaoCORRETAdasAlternativas == 3){
            if(mouseIsPressed){ 
            tela=5
            PosicaodasAlternativas++
            Lim1 = Lim1 + 2
            Lim2 = Lim2 +2
            sorteio()
            } 
        }else{if(mouseIsPressed){
          tela=4
         
          
        }
  }
}
      
  fill("#FFFFFF"); 
  rect(130, 390, 125, 50, 30)
  if(mouseX>=130 && mouseX<=255 && mouseY>=390 && mouseY<=450){
        fill("#81DAF5")
        rect(130, 390, 125, 50, 30)
        if(PosicaoCORRETAdasAlternativas == 4){
            if(mouseIsPressed){ 
            tela=5
            PosicaodasAlternativas++
            Lim1 = Lim1 + 2
            Lim2 = Lim2 +2
            sorteio()
            } 
        }else{if(mouseIsPressed){
          tela=4
         
          
        }
  }
}
   
    
  fill("#000000")
  textSize(20);
    
   if(PosicaoCORRETAdasAlternativas == 1){
    text(OpcoesCorretas[res1], 130, 185, 125,50)
  }else{
    text(OpcoesErradas[res1], 130, 185, 125,50)
  }
  if(PosicaoCORRETAdasAlternativas == 2){
    text(OpcoesCorretas[res2], 130, 255, 125,50)
  }else{
    text(OpcoesErradas[res2], 130, 255, 125,50)
  }
  if(PosicaoCORRETAdasAlternativas == 3){
    text(OpcoesCorretas[res3], 130, 320, 125,50)
  }else{
    text(OpcoesErradas[res3], 130, 320, 125,50)
  }
  if(PosicaoCORRETAdasAlternativas == 4){
    text(OpcoesCorretas[res4], 130, 390, 125,50)
  }else{
    text(OpcoesErradas[res4], 130, 390, 125,50)
  }
 
    }
  
    else if (tela == 2) {
    textSize(16)
    textStyle(BOLDITALIC)
    text(" Nosso game está em desenvolvimento",20, 20)
    text("Se trata de uma aventura que envolve magia,", 20 , 40)
    text("e matemática", 20 , 60)
    text("Utilize as setas direcionais para navegar no menu!", 20 ,80)
      text("Use o Mouse para selecionar as respostas")
    textSize(14)
    text("ESC para voltar", 380, 380)
    }
  
    else if (tela == 3) {
    textSize(19)
    textFont('Georgia')
    text("Discente: Jacob Anderson Sousa Xavier", 0,20)
    text("Turma 05A", 0 ,40)
    textSize(14)
    text("Orientador: Maria Juliane Bernardo dos Santos.", 0, 60)
    text("ESC para voltar", 380, 380)
    image(creditos, 100, 120, 200, 200)
    }
  
    else if (tela == 4) {
    textSize(19)
    textFont('Georgia')
    text("VOCÊ PERDEU", 0,20)
    text("PRESSIONE ESC E RETORNE AO MENU", 0 ,40)
    textSize(14)
    text("ESC para voltar", 380, 380)
    image(gameover, 0, 600, 500, 000)
    }  
  
    else if (tela == 5) {
    textSize(19)
    textFont('Georgia')
    text("PARABÉN VOCÊ VENCEU", 0,20)
    text("PRESSIONE ESC PARA RETORNAR AO MENU", 0 ,40)
    textSize(14)
    text("ESC para voltar", 380, 380)
    image(youwin, 00, 60, 500, 000)
    }  
  
}


function keyPressed() {
  
  if(tela == 0){ 
  
  if(key =="ArrowUp" && y>130){
    y=y-100
    level=level-1
  }
  if(key =="ArrowDown" && y<300){
     y=y+100
    level=level+1
  }
  if (key == "Enter"){
    tela= level
  }
  if (key=="Escape")
    tela=0
    
  } else {
      
    if(tela == 1){
 
  if(key =="ArrowUp" && y>130){
    y=y-100
    level=level-1
  }
  if(key =="ArrowDown" && y<300){
     y=y+100
    level=level+1
  }
  if (key == "Enter"){
    tela= level
  }
  if (key=="Escape")
    tela=0
     
      }
    
else {    

    if(tela == 2){
 
  if (key=="Escape")
    tela=0

      }
  
else {  

    if(tela == 3){
 
  if (key=="Escape")
    tela=0
     
      } 
    
else {
  
    if(tela == 4){
 
  if (key=="Escape")
    tela=0
     
      } 
  
else {  
    
    if(tela == 5){
 
  if (key=="Escape")
    tela=0
     
      } 
    
    }  
  }
}
  } 
  }
}

function sorteio (){

  res1 = parseInt(random (Lim1, Lim2))
  res2 = parseInt(random (Lim1, Lim2))
  res3 = parseInt(random (Lim1, Lim2))
  res4 = parseInt(random (Lim1, Lim2))
  

  while(res2 == res1){
 res2 = parseInt(random (Lim1, Lim2))
  }
  

  while(res3 == res2 || res3 == res1 ){
 res3 = parseInt(random (Lim1, Lim2))
  }
  

  while(res4 == res3 || res4 == res2 || res4 == res1){
  res4 = parseInt(random (Lim1, Lim2))
  }
  
  PosicaoCORRETAdasAlternativas = parseInt(random(1, 4))
  
  if(PosicaoCORRETAdasAlternativas == 1){
    res1 = PosicaodasAlternativas
  }
  if(PosicaoCORRETAdasAlternativas == 2){
    res2 = PosicaodasAlternativas
  }
   if(PosicaoCORRETAdasAlternativas == 3){
    res3 = PosicaodasAlternativas
  }
  if(PosicaoCORRETAdasAlternativas == 4){
    res4 = PosicaodasAlternativas
  }
  
}
function mousePressed() {
  if (mouseX > 0 && mouseX < 10 && mouseY > 0 && mouseY < 10) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}