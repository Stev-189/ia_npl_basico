import { PorterStemmerEs } from 'natural'; // para encontarr la raiz de la palabra
import { NeuralNetwork } from 'brain.js';

export default class Analyzer{
  constructor(dataStudy){
    this.dataStudy=dataStudy;
    this.net = new NeuralNetwork({hiddenLayers: []});
  }

  removeAccents(str){ 
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  }

  stem(arrText){ 
    return arrText.map(word=> PorterStemmerEs.stem(word))
  }

  corpusFuntion(data){
    return data.map(item=>{
        return {
          input: this.stem(this.tokenize(this.removeAccents(item.input))).reduce((p,c)=>{
            p[c]=1;
            return p;
          }, {}),
          output: {[this.removeAccents(item.output)]:1 }
        }
    })
  }

  train(){
    this.net.train(this.corpusFuntion(this.dataStudy))
  }

  initAnalyzer(text){
      let result =this.net.run(
            this.stem(this.tokenize(this.removeAccents(text))).reduce((p,c)=>{
            p[c]=1;
            return p;
          }, {})
        )
      let max = Object.entries(result).reduce(function(prev, curr){
          return prev[1] > curr[1] ? prev : curr;
        });
      return {[max[0]]: (max[1]*100).toFixed(2)+'%'}
  }
}