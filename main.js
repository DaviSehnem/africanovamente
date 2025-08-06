const numeroSenha = document.querySelector('.parametro-senha-textos');
let TamanhoSenha = 12;
numeroSenha.textContent = TamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');


botoes [0].onclick = diminuiTamanho;
botoes [0].onclick = aumentaTamanho;

function diminuiTamanho () {
    if (TamanhoSenha > 1) {
        TamanhoSenha --;
    }
    numeroSenha.textContent = TamanhoSenha;
}
function aumentaTamanho () {
    if (TamanhoSenha < 20) {
        TamanhoSenha ++;
    }

}