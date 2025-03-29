function addNumber(valor){
    const resultField = document.getElementById('result');
    resultField.value += valor;
    if(resultField.value === 'Erro'){
        limpar();
        return;
    }
}

function calcular(){
    const resultField = document.getElementById('result');
    try{
        if (resultField.value.trim() === ''){
            return;
        }
        else if (resultField.value.trim() === 'Erro') {
            limpar(); 
            return;  
        }
        let conta = resultField.value
            .replace(/x/g, '*')
            .replace(/(\d+(\.\d+)?)\s*-\s*(\d+(\.\d+)?)%/g, '($1 - ($1 * $3 / 100))')
            .replace(/(\d+(\.\d+)?)\s*\+\s*(\d+(\.\d+)?)%/g, '($1 + ($1 * $3 / 100))')
            .replace(/(\d+(\.\d+)?)\s*\/\s*(\d+(\.\d+)?)%/g, '($1 / ($1 * $3 / 100))')
            .replace(/(\d+(\.\d+)?)\s*\*\s*(\d+(\.\d+)?)%/g, '($1 * ($1 * $3 / 100))');

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