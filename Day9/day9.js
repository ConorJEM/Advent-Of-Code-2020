const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
var fs = require('fs');
var instructions = fs.readFileSync('./inputday9.txt',{encoding:'utf-8'}).split('\n');



for (i=0;i<instructions.length;i++){
    instructions[i]=parseInt(instructions[i])
}


let moving=instructions.slice(0,25);


function solve(){
for(let i=moving.length;i<instructions.length;i++){
     let newTarg=instructions[i];
     let result=issum(moving,newTarg);
     if(result){
         
         moving.push(newTarg)
         moving.shift()
         
     } else {
         console.log('failure')
         console.log(instructions[i],'this number')
         break;
     }
         
}
}

function issum (array,target){
    for(i=0;i<array.length;i++){
        for(j=1;j<array.length;j++){
            
            if (array[i]+array[j]==target){
                
                return true
            }
            }
        }    
        return false
    }

console.log(solve())