const numeroSenha = document.querySelector('.parametro-senha__texto');

let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querSelectorAll(.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
  if (tamanhoSenha > 1){
    //tamanhoSenha . 1
    tamanhoSenha--;
  }
  numeroSenha.textContent = tamanhoSenha;
}

const numeroSenha = document.querySelector('.parametro-senha__texto');

let tamanhoSenha = 20;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querSelectorAll(.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function aumentaTamanho(){
  if (tamanhoSenha > 1){
    //tamanhoSenha . 1
    tamanhoSenha--;
  }
  numeroSenha.textContent = tamanhoSenha;
}
const campoSenha = document.querySelector('#camp.senha');
const checbox = document.querySelectAll('.checkbox');

for(i=0 ; i< checkbox.length; i++){
  checkbox[1].onclick = geraSenha;
}

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@*?';
geraSenha(){
  let alfabeto = '';
  if (checkbox[0].checked){
    alfabeto = alfabeto + letrasMaiusculas;  
  }
}
