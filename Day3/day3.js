var fs = require('fs');
var data = fs.readFileSync('./day3input.txt').toString().split("\n");

//console.log(data[1].length)
//=32

let trees=0;
let pos=0;
for (i=0;i<data.length;i++){
    //let point=data[i][pos+3];
    point=(data[i][pos]);
    if(point=='#'){
        trees=trees+1
    }
    
    pos=pos+3;
    if (pos>30){
        pos=pos-31;
    }
}
console.log(trees)

//46 6 = #