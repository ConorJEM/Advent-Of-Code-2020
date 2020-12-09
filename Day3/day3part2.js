var fs = require('fs');
var data = fs.readFileSync('./day3input.txt').toString().split("\n");

//console.log(data[1].length)
//=32

let trees=0;
let trees1=0;
let trees2=0;
let trees3=0;
let trees4=0;


let pos=0;
let pos1=0;
let pos2=0;
let pos3=0;
let pos4=0;


for (i=0;i<data.length;i++){
    //let point=data[i][pos+3];
    //trees 1
    point1=(data[i][pos1])
    if(point1=='#'){
        trees1=trees1+1;
    }
    
    pos1=pos1+1;
    if (pos1>30){
        pos1=pos1-31;
    }
    //trees 2
    point2=(data[i][pos2])
    if(point2=='#'){
        trees2=trees2+1;
    }
    pos2=pos2+5;
    if (pos2>30){
        pos2=pos2-31;
    }
    //trees3
    point3=(data[i][pos3])
    if(point3=='#'){
        trees3=trees3+1;
    }
    pos3=pos3+7;
    if (pos3>30){
        pos3=pos3-31;
    }


 
    //trees4
    if(i<(data.length)/2){

    
    point4=(data[i*2][pos4])
    if(point4=='#'){
        trees4=trees4+1;
    }
    pos4=pos4+1;
    if (pos4>30){
        pos4=pos4-31;
    }
    
    }
    
    
  //  
    point=(data[i][pos]);
    if(point=='#'){
        trees=trees+1;
    }
    
    pos=pos+3;
    if (pos>30){
        pos=pos-31;
    }
}
console.log(trees,trees1,trees2,trees3,trees4);
console.log(trees*trees1*trees2*trees3*trees4);

//46 6 = #