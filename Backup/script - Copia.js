// =====================================
// CONFIGURAÇÃO
// =====================================

const quantidadeEtiquetas = 12;


// =====================================
// CAMPOS DO FORMULÁRIO
// =====================================

const linha3 = document.getElementById("linha3");
const linha4 = document.getElementById("linha4");

const lote = document.getElementById("lote");
const validade = document.getElementById("validade");

const rt = document.getElementById("rt");
const crf = document.getElementById("crf");

const areaImpressao = document.getElementById("areaImpressao");

const btnAtualizar = document.getElementById("btnAtualizar");
const btnImprimir = document.getElementById("btnImprimir");


// =====================================
// CRIAR ETIQUETAS
// =====================================

function criarEtiquetas() {

    areaImpressao.innerHTML = "";


    // Valores dos campos editáveis

    const valorLinha3 = linha3.value;
    const valorLinha4 = linha4.value;

    const valorLote = lote.value;
    const valorValidade = validade.value;

    const valorRT = rt.value;
    const valorCRF = crf.value;


    // Criar 12 etiquetas

    for (let i = 0; i < quantidadeEtiquetas; i++) {

        const etiqueta = document.createElement("div");

        etiqueta.classList.add("etiqueta");


        // ---------------------------------
        // LINHA 1 - FIXA
        // ---------------------------------

        const elementoLinha1 = document.createElement("div");

        elementoLinha1.classList.add("linha1");

        elementoLinha1.textContent =
            "AGULHA PARA APLICAÇÃO DE INSULINA COM";


        // ---------------------------------
        // LINHA 2 - FIXA
        // ---------------------------------

        const elementoLinha2 = document.createElement("div");

        elementoLinha2.classList.add("linha2");

        elementoLinha2.textContent =
            "CANETA 4MM X 0,23MM";


        // ---------------------------------
        // LINHA 3
        // ---------------------------------

        const elementoLinha3 = document.createElement("div");

        elementoLinha3.classList.add("linha3");

        elementoLinha3.textContent = valorLinha3;


        // ---------------------------------
        // LINHA 4
        // ---------------------------------

        const elementoLinha4 = document.createElement("div");

        elementoLinha4.classList.add("linha4");

        elementoLinha4.textContent = valorLinha4;


        // ---------------------------------
        // LINHA 5
        // ---------------------------------

        const elementoLinha5 = document.createElement("div");

        elementoLinha5.classList.add("linha5");


        const textoLote = document.createElement("span");

        textoLote.classList.add("rotulo");

        textoLote.textContent = "LOTE:";


        const valorLoteElemento = document.createElement("span");

        valorLoteElemento.classList.add("valor");

        valorLoteElemento.textContent = valorLote;


        const separadorValidade = document.createElement("span");

        separadorValidade.textContent = " - ";


        const textoValidade = document.createElement("span");

        textoValidade.classList.add("rotulo");

        textoValidade.textContent = "VALIDADE:";


        const valorValidadeElemento = document.createElement("span");

        valorValidadeElemento.classList.add("valor");

        valorValidadeElemento.textContent = valorValidade;


        elementoLinha5.appendChild(textoLote);

        elementoLinha5.appendChild(valorLoteElemento);

        elementoLinha5.appendChild(separadorValidade);

        elementoLinha5.appendChild(textoValidade);

        elementoLinha5.appendChild(valorValidadeElemento);


        // ---------------------------------
        // LINHA 6
        // ---------------------------------

        const elementoLinha6 = document.createElement("div");

        elementoLinha6.classList.add("linha6");


        const textoRT = document.createElement("span");

        textoRT.classList.add("rotulo");

        textoRT.textContent = "RT:";


        const valorRTElemento = document.createElement("span");

        valorRTElemento.classList.add("valor");

        valorRTElemento.textContent = valorRT;


        const separadorCRF = document.createElement("span");

        separadorCRF.textContent = " - ";


        const textoCRF = document.createElement("span");

        textoCRF.classList.add("rotulo");

        textoCRF.textContent = "CRF / SP:";


        const valorCRFElemento = document.createElement("span");

        valorCRFElemento.classList.add("valor");

        valorCRFElemento.textContent = valorCRF;


        elementoLinha6.appendChild(textoRT);

        elementoLinha6.appendChild(valorRTElemento);

        elementoLinha6.appendChild(separadorCRF);

        elementoLinha6.appendChild(textoCRF);

        elementoLinha6.appendChild(valorCRFElemento);


        // ---------------------------------
        // MONTAR ETIQUETA
        // ---------------------------------

        etiqueta.appendChild(elementoLinha1);

        etiqueta.appendChild(elementoLinha2);

        etiqueta.appendChild(elementoLinha3);

        etiqueta.appendChild(elementoLinha4);

        etiqueta.appendChild(elementoLinha5);

        etiqueta.appendChild(elementoLinha6);


        // Adicionar à folha

        areaImpressao.appendChild(etiqueta);
    }
}


// =====================================
// BOTÃO ATUALIZAR
// =====================================

btnAtualizar.addEventListener("click", function () {

    criarEtiquetas();

});


// =====================================
// BOTÃO IMPRIMIR
// =====================================

btnImprimir.addEventListener("click", function () {

    criarEtiquetas();

    window.print();

});


// =====================================
// ATUALIZAÇÃO AUTOMÁTICA
// =====================================

linha3.addEventListener("input", criarEtiquetas);

linha4.addEventListener("input", criarEtiquetas);

lote.addEventListener("input", criarEtiquetas);

validade.addEventListener("input", criarEtiquetas);

rt.addEventListener("input", criarEtiquetas);

crf.addEventListener("input", criarEtiquetas);


// =====================================
// INICIALIZAÇÃO
// =====================================

criarEtiquetas();