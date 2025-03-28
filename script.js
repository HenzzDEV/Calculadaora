function addNumber(valor){
    const resultField = document.getElementById('result');
    resultField.value += valor;
}

function calcular(){
    const resultField = document.getElementById('result');
    try{
        if (resultField.value.trim() === ''){
            return;
        }
        let conta = resultField.value
            .replace(/x/g, '*')
            .replace(/%/g, '/100');

            resultField.value = eval(conta);
    } catch{
        resultField.value = 'Erro';
    }
}

function limpar(){
    const resultField = document.getElementById('result');
    resultField.value = '';
}

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function() {
        const Somzinho = new Audio("docs/clicksoundeffect.mp3");
        Somzinho.preload = "auto"
            Somzinho.currentTime = 0;
            Somzinho.play();
        })
    })