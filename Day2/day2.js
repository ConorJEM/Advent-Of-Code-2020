var fs = require('fs');
var data = fs.readFileSync('./inputday2.txt').toString().split("\n");

console.log(data)
let finalans=0
for(i=0;i<data.length-1;i++){
    let x=data[i].split(' ');
    let letter=x[1][0]
    let string=x[2]
    let y=x[0].split('-');
    
    let counter=0
    
    for(j=0;j<string.length;j++){
        
        if (string[j]==letter){
            counter+=1;

        }
        
    }
    if (counter>=parseInt(y[0]) && counter<=parseInt(y[1])){
        finalans+=1;
    }
    
    
    
}
console.log(finalans);
