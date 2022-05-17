function solve(n1, n2, n3){
  
    let arrn1 = String(n1);
    let arrn2 = String(n2);
     let arrn3 = String(n3);
     
     if (arrn1.charAt(arrn1.length-1) === arrn2.charAt(arrn2.length-1) === arrn3.charAt(arrn3.length-1)){
       console.log(arrn1.charAt(arrn1.length-1));
     }else {
       console.log("It ain't there");
     }
     
   }
   solve(69,2129,12312319);
   
     