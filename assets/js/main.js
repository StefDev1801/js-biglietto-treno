//- Chiedere chilometri che il passeggiero dovrà percorrere
const kmToTravel =  prompt("Quanti chilometri deve percorrere?")
console.log(kmToTravel);
//- Chiedere età del passeggiero
const ageCostumer = prompt ("Inserisca la sua età")
console.log(ageCostumer);

//<!-- - avere una variabile con il prezzo (€0.21/km) -->
//- SE il passeggiero ha 17 anni o meno applicare lo sconto del 20%
if (ageCostumer < 18) {                         
    console.log("Lei dovrà pagare €" +  ((kmToTravel*0.21)/100*80).toFixed(2));
    
}
//    - OPPURE SE il passeggiero ha più o uguale a 65 anni applicare lo sconto del 40%
else if(ageCostumer > 64){                    
    console.log("Lei dovrà pagare €" + ((kmToTravel*0.21)/100*60).toFixed(2));
}
//        - OPPURE far pagare prezzo pieno
else{                                          
    console.log("Lei dovrà pagare €" + (kmToTravel*0.21).toFixed(2));
}

//- Far visualizzare l'output desiderato con massimo due cifre decimali e il simbolo €
// document.writeln