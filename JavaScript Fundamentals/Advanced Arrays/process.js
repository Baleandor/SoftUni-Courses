function process(arr) {

   //let filtered =  arr.filter((x, i) => i % 2 == 1);

  // let doubledResult = arr.filter((x, i) => i % 2 == 1).map (x => x * 2).reverse().join(' ');

   console.log(
       arr
       .filter((x, i) => i % 2 == 1)
       .map (x => x * 2)
       .reverse()
       .join(' '));

  // let result = doubledResult.reverse();

   console.log(result.join(' '));

   //arr => arr.filted.map.reverse.join to be all fancy and shit



}