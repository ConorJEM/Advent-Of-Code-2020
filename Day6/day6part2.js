const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
var fs = require('fs');
var data = fs.readFileSync('./day6input.txt').toString().split('\n\n');


let total=0
for (k=0;k<data.length;k++){

let target=0

let x=data[k].split('\n');
let pans=[];

for (i=0;i<x[0].length;i++){
    pans.push(x[0][i]);
}

//cqu
let panscopy=pans
for (i=0;i<pans.length;i++){
    for(j=1;j<x.length;j++){
        if(x[j].includes(pans[i])){
            
        } else{
            //arr = arr.filter(item => item !== value)
            panscopy=panscopy.filter(item => item !== pans[i]);
        }    
}

}

target=panscopy.length;
total=total+target;

}

console.log(total);


