var fs = require('fs');
var data = fs.readFileSync('./inputday1.txt').toString().split("\n");

let target=2020;
for (i=0;i<data.length;i++){
    for (j=0;j<data.length;j++){
        for (k=0;k<data.length;k++){

        
        x=parseInt(data[i]);
        y=parseInt(data[j]);
        z=parseInt(data[k]);
        if(x+y+z==2020){
            return console.log(data[i]*data[j]*data[k]);
        }

        }
    }
}