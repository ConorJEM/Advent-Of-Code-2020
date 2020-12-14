//for example 1: Correct Result
//adapters=[16,10,15,5,1,11,7,19,6,12,4];

//for example 2: Correct Result
//adapters=[28,33,18,42,31,14,46,20,48,47,24,23,49,45,19,38,39,11,1,32,25,35,8,17,7,9,4,2,34,10,3];

var fs = require('fs');
var adapters = fs.readFileSync('./inputday10.txt',{encoding:'utf-8'}).split('\n');



for (i=0;i<adapters.length;i++){
    adapters[i]=parseInt(adapters[i])
}
console.log(adapters);


myadapt=Math.max(...adapters)+3;
adapters.push(myadapt);
//console.log(myadapt);



let current=0;
let num1s=0;
let num2s=0;
let num3s=0;


for(i=0;i<adapters.length+1;i++){

    if(current==myadapt){
        console.log('complete!')
        console.log(current,'final current')
        console.log(num1s,' differences of 1 volt')
        console.log(num2s,' differences of 2 volt')
        console.log(num3s,' differences of 3 volt')
        console.log(num3s*num1s,'final result')
    }


    if(adapters.includes(current+1)){
        //console.log(current)
        current+=1;
        num1s+=1;
    } else if(adapters.includes(current+2)){
        //console.log(current)
        current+=2
        num2s+=1;
    } else if(adapters.includes(current+3)){
        //console.log(current)
        current+=3
        num3s+=1;
    }
  
}