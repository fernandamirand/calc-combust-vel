
let inputComprimento = document.getElementById("comprimento");
let inputVoltas = document.getElementById("voltas");
let inputConsumo = document.getElementById("consumo");
let inputReabastecimento = document.getElementById("reabastecimentos")

let resultado = document.getElementById("resultado")



function Calculo(){

    console.log("Calculando...")

    let ComprimentoDaPista  =  inputComprimento.value;
    let TotalDeVoltas = inputVoltas.value;
    let ReabastecimentosDesejados = inputReabastecimento.value;
    let ConsumoDoCarro = inputConsumo.value;

    let MinLitros = 0;
   


    
   
    
     let DistanciaTotalm = ComprimentoDaPista * TotalDeVoltas;
    // Isso vai resultar um valor em metros que precisa ser transformado em km
    console.log(DistanciaTotalm);

    let DistanciaTotalKm = DistanciaTotalm/1000;
    console.log(DistanciaTotalKm);

    let  TotalDeLitros = DistanciaTotalKm/ConsumoDoCarro;
    // Esse é o total de litros necessários para fazer o trajeto envolvido 
    console.log(TotalDeLitros);
      
    let PontoReabastecimento1 = DistanciaTotalKm/ReabastecimentosDesejados;
    console.log(PontoReabastecimento1);

    MinLitros = PontoReabastecimento1 / ConsumoDoCarro;

    console.log(MinLitros)

    resultado.innerHTML = MinLitros == 0 ? "" :`<div class="resultado">
        <h2 class="TextMain">A quantidade mínima de combustível necessário para percorrer
        até o primeiro reabastecimento é de ${MinLitros} L<h2>
     </div>`
}

 Calculo()