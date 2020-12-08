var fs = require('fs');
var data = fs.readFileSync('./inputday2.txt').toString().split("\n");

function passwords(data){
let finalans=0;
for(i=0;i<data.length-1;i++){
    let x=data[i].split(' ');
    let letter=x[1][0]
    let string=x[2]
    let y=x[0].split('-');
    
    if((string[parseInt(y[0])-1]==letter || string[parseInt(y[1])-1]==letter)&& string[parseInt(y[1])-1]!=string[parseInt(y[0])-1]){
        finalans+=1;
    }
    
}
console.log(finalans);
};
passwords(data);