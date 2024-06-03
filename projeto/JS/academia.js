function validarCamposObrigatorios(oNome, oContato, aIdade, aTaxa, oNivel, oObjetivo, condicao, restricao){
    //RN.01 - Validação de Campos Obrigatórios:
    const listaSem = [oNome, oContato, aIdade, aTaxa, oNivel, oObjetivo]
    const listaCom = [oNome, oContato, aIdade, aTaxa, oNivel, oObjetivo, restricao]
    const decisao = condicao == "sim"? listaCom.every(item => item !== "") : listaSem.every(item => item !== "");
    return decisao;
}

function calcularNivel(oNivel){
    //RN.02 - Validação de Nível:
    if ( oNivel > 0) {
        if (oNivel == 0) {
            return "Iniciante Absoluto";
        } else if(oNivel > 0 && oNivel < 12) {
            return "Iniciante";
        } else if (oNivel >= 12 && oNivel < 48) {
            return "intermediario";
        } else if (oNivel >= 48) {
            return "Avançado";
        }
    }
}

function validarNomeCompleto(oNomeCompleto){
    //RN.03 - Validação de Nome Completo do Aluno:
    if (oNomeCompleto.includes(" ")){
        parte = oNomeCompleto.split(" ");
        sobrenome = parte[1];
        if(sobrenome.length > 3)
        return sobrenome
    }
}

function validarNumeros(oContato, aIdade, aTaxa, oNivel) {
    //RN.04 - Validação de Números:
    const array = [oContato, aIdade, aTaxa, oNivel];
    array.forEach(item => {
        item.addEventListener("input", () => {
        let oNumero = parseFloat(item.value.replace(!isNaN, "")); 
        if (Number.isNaN(oNumero)) {
            oNumero = ""; 
        }
        item.value= oNumero;
        const numero = oContato.value;
        if (numero.length == 11) {
            oContato.value = `(${numero.slice(0, 2)}) ${numero.slice(2, 7)}-${numero.slice(7)}`; // Formatação (XX) XXXXX-XXXX
        }
        });
    });

}

function mostrarDetalhes(aCondicao) {
    //RN.05 - Validação de Detalhes:
    restricao = document.getElementById("restricao");
    aCondicao == "sim" ? restricao.style.display = "inline" : restricao.style.display = "none"; 
}

function calcularValorTotal(oPlano, aTaxa){
    //RN.06 - Validação da Matrícula:
    if(aTaxa > 0) {
        let taxa = parseFloat(aTaxa);
        let total = oPlano + taxa;
        return total.toFixed(2);
    }
}

function calcularData(){
    //RN.07 - Registro de Data da Matrícula:
    return new Date().toLocaleString();
}

function gerarNumeroMatricula(){
    //RN.08 - Geração de Número de Transação Único:
    return Math.floor(Math.random() * 10000)
}

function registrarHistorico(aMensagem){
    //RN.09 - Histórico de Alterações:
    const ulHistoricoAlteracao = document.getElementById("historicoAlteracao");
    const liHistorico = document.createElement("li");
    liHistorico.textContent = aMensagem
    ulHistoricoAlteracao.appendChild(liHistorico);
} 

function registrarMatricula(nomeCompleto, contato, idade, taxa, planoMensalidade, nivel,  condicao, restricao, objetivo){
    validarNumeros(contato, idade, taxa, nivel);
    mostrarDetalhes(condicao, restricao);

    let camposObrigatorios = validarCamposObrigatorios(nomeCompleto, contato.value, idade.value, taxa.value, nivel.value, objetivo, condicao, restricao.value);
    let nome = validarNomeCompleto(nomeCompleto)
    let niveis = calcularNivel(nivel.value);
    let total = calcularValorTotal(planoMensalidade, taxa.value);
    let data = calcularData();
    let numeroMatricula = gerarNumeroMatricula()

    if (camposObrigatorios) {
        if(nome){
            if(niveis){
                if(total){
                    if (total) {
                        return `[${numeroMatricula}] A matrícula do(a) aluno(a) ${nomeCompleto} de nível ${niveis} está feita! O valor total da matrícula foi de R$ ${total} [${data}]`;
                    } else {
                        return "Problemas com o total.";
                    }
                } else{
                    return "Problemas com taxa."
                }
            }else{
                return "Problemas com nível."
            }
        }else{
            return "Problemas com nome completo."
        }    
    } else {
        return "Problemas na validação de campos obrigatórios! Por favor, preencha todos os campos obrigatórios.";
    }
}

function matricular() {
    let nomeCompleto = document.getElementById("nome").value;
    let contato = document.getElementById("contato");
    let idade = document.getElementById("idade");
    let taxa = document.getElementById("taxa");
    let nivel = document.getElementById("nivel");
    let planoMensalidade = parseFloat(document.getElementById("planos").value);
    let restricao = document.getElementById("restricao");
    let condicao = document.getElementById("condicao").value;
    let objetivo = document.getElementById("objetivo").value;
    let mensagem = registrarMatricula(nomeCompleto, contato, idade, taxa, planoMensalidade, nivel,  condicao, restricao, objetivo);

    registrarHistorico(mensagem)
}

matricular()
