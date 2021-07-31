//texto a a analizar 
const { default: Analizador } = require('../helpers/Analizador');
let data= require('../source/data.json'); // data de enterno

////////////////////////////////////////////////////////////////////////////////
// import { PorterStemmerEs } from 'natural'; // para encontarr la raiz de la palabra
// import { NeuralNetwork } from 'brain.js';

// const removeAccents = (str) => {
//   return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
// } // funcion para remover expresiones latinas

// let text = 'La uña se me rompió después de beber cachaça';

// const tokenize = (text)=> text.toLowerCase().split(/\W+/).filter(x=>x!=='');// separamos la frase en palabras y quitamos lo vacios

// const stem = (arrText)=>arrText.map(word=> PorterStemmerEs.stem(word)); //obtener origen d e la palabra

// // console.log(stem(tokenize(removeAccents(text))));

// const corpusFuntion= (data)=>{
//     return data.map(item=>{
//     return {
//       input: stem(tokenize(removeAccents(item.input))).reduce((p,c)=>{
//         p[c]=1;
//         return p;
//       }, {}),
//       output: {[removeAccents(item.output)]:1 }
//     }
//   })
// };

// const netConfig = {
//   hiddenLayers: []
// }

// const net = new NeuralNetwork(netConfig)
// // console.log(net.train(corpusFuntion(data.data)));
// net.train(corpusFuntion(data.data));

// const analizarPalabra = (text)=>{
//   return net.run(
//       stem(tokenize(removeAccents(text))).reduce((p,c)=>{
//       p[c]=1;
//       return p;
//     }, {})
//   )
// }

// const resultado= analizarPalabra('Excel, Mineria, electrico')

// const max = Object.entries(resultado).reduce(function(prev, curr){
//   return prev[1] > curr[1] ? prev : curr;
// });

// console.log({[max[0]]: (max[1]*100).toFixed(2)+'%'});

// console.log(data.data);
////////////////////////////////////////////////////////////////////////////////

console.log(Analizador(data.data, 'Excel, Mineria, electrico'));
