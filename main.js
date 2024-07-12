//let a = 6;
//let b = a++;
//document.write("a="+a);
//document.write("<br>");
//document.write("b="+b);

// eger a++ yazdiqda a-nin deyeri 1 vahid artir amma evvelki deyeri qaytarirlir
//eger ++a yazdiqda  a-nin deyeri 1 vahid artir hem de artirdigi qiymeti qaytarir


  // IF VE ELSE 

  //let bal = 65 ;
  //if(bal>50){
    //console.log("qebul oldunuz:" + bal);
  //}



/*let yas = Number(prompt("yasiniz:"));
let pul = Number(prompt("budceniz:"));

if(yas>=18 && pul >=3000){
    alert("daxil ola bilersiniz:");
}else{
   alert("daxil olmaq olmaz:");
} */







           //  ders ortalamasi tapmaq //


   // smestr1 %30 , smestr2 %30 , final %40 
   
   
let smestr1 = Number(prompt("smestr 1 balinizi yazin:"));
let smestr2 = Number(prompt("smestr 2 balinizi girin :"));

let final = Number(prompt("final balinizi girin:"));

let ortalama = smestr1*0.3 + smestr2*0.3 + final*0.4;

if(ortalama>=60){
    alert("Dersden kecdiniz:");
}else{
    alert("Dersden kesildiniz:");
}


