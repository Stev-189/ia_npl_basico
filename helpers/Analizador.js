import { PorterStemmerEs } from 'natural'; // para encontarr la raiz de la palabra
import { NeuralNetwork } from 'brain.js';

const removeAccents = (str) =>str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const tokenize = (text)=> text.toLowerCase().split(/\W+/).filter(x=>x!=='');

const stem = (arrText)=>arrText.map(word=> PorterStemmerEs.stem(word));

const corpusFuntion= (data)=>{
  return data.map(item=>{
  return {
    input: stem(tokenize(removeAccents(item.input))).reduce((p,c)=>{
      p[c]=1;
      return p;
    }, {}),
    output: {[removeAccents(item.output)]:1 }
  }
})
};

export default function Analizador(dataStudy, toAnalyze){
  
  const net = new NeuralNetwork({hiddenLayers: []})
  net.train(corpusFuntion(dataStudy));
  const analizarPalabra = (text)=>{
    return net.run(
        stem(tokenize(removeAccents(text))).reduce((p,c)=>{
        p[c]=1;
        return p;
      }, {})
    )
  }
  const resultado= analizarPalabra(toAnalyze)
  const max = Object.entries(resultado).reduce(function(prev, curr){
    return prev[1] > curr[1] ? prev : curr;
  });
  return {[max[0]]: (max[1]*100).toFixed(2)+'%'}
} 