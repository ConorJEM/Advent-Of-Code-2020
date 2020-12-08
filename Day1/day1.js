var fs = require('fs');
var data = fs.readFileSync('./inputday1.txt').toString().split("\n");

let target=2020;
for (i=0;i<data.length;i++){
    for (j=0;j<data.length;j++){
        x=parseInt(data[i]);
        y=parseInt(data[j]);
        if(x+y==2020){
            return console.log(data[i]*data[j]);
        }
    }
}