//<div>
//função para calculador calsisus para frahrenheit//
function ceilsi_para_fahrenheit(celsius){
    return (celsius * 9/5) +32;

}
//cfunção de calsius para kelvien
function celsis_para_kelvin (celsius){
    return celsius + 273.15;

}
//função para conveter fahrenheit_para_celsisus para kelvin//
function fahrenheit_para_celsisus(frahrenheit){
    return (frahrenheit -32)* 5/9;
}
//função para conventer frahrenhetir
function fahrenheit_para_kelvin(frahrenheit){
    return (frahrenheit -32) * 5/9 + 273.15
}
// função para conveter kelvin para calsius
function kelvien_para_celsisu(kelvin){
     return kelvin - 273.15;
}
function kelvien_para_fahrenheit(kelvin){
    return (kelvin - 273.15)* 9/5 +32;
//<div>
}
//<div>
 //função para impremir resutaodr na tela do computador 
 function exibir_resutaodr(valor_original, escalar_origem, escala_destino, valor_convertido){
    //concatendo as strigns usando o operador usa "+"
    console.log("temperatura original "+ valor_original +"° "+escalar_origem);
    console.log("temperatura convertida para "+ escala_destino+":"+ valor_convertido+ "° "+ escala_destino);
    //ou,se prefeir  usa alert
    //usa do aletar valor_origrm e escalar_origerm dessa muito melhor para letura do codigo para fazer manuteção 
    // usado alrtar com as varial escala_destino e valor_convertido e escala_destino
    // ☆*: .｡. o(≧▽≦)o .｡.:*☆☆*
 }
 //</div>
 //<div>
 function convertar_temperatura(valor,escalar_origem,escala_destino){
    let valor_convertido;

      if(escalar_origem == 'celsius'){
        if(escala_destino == 'frahrenheit'){
           valor_convertido= ceilsi_para_fahrenheit (valor);

        }else if (escala_destino === 'kelvin'){
             valor_convertido= celsis_para_kelvin (valor);
        }else if(escalar_origem == 'frahrenheit'){
            
        }
              
        if (escala_destino == 'celsius'){
            valor_convertido = kelvien_para_celsisu (valor);
        } else if (escala_destino === 'frahrenheit'){
            valor_convertido = kelvien_para_fahrenheit (valor);
         }   
    }
    exibir_resutaodr(valor,escalar_origem,escala_destino,valor_convertido);
//</div>
 }

 //exemplo de uso 
 convertar_temperatura(40,'celsius', 'frahrenheit');
 convertar_temperatura(120 ,'frahrenheit','celsius');
 convertar_temperatura(312,'kelvin','celsisus');

