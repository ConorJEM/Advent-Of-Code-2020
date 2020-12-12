var fs = require('fs');
var instructions = fs.readFileSync('./inputday8.txt').toString().split('\n');


//instructions=['nop +0','acc +1','jmp +4','acc +3','jmp -3','acc -99','acc +1','jmp -4','acc +6'];
let map={};
let list=[];
let vals=0
let task=''

for (i=0;i<instructions.length;i++){
    
    let [task,values]=instructions[i].split(' ');
    
    let sign=values[0]
    if(sign='+'){
         vals=parseInt(values)
    } else{
         vals=parseInt(values)*-1
    }
    
    list.push([i,task,vals])
    
}
console.log(list.length);

let acc=0;
let visited=[];


for(j=0;j<1000000;j++){

    let currentinstruction=list[j][0];
    //end the loop if we reach a previous instruction
    if(visited.includes(list[j][0])){
        console.log(acc,'the final acc value')
        break;
    } else {
        visited.push(list[j][0])
    }
    if(list[j][1]=='acc'){
        acc+=list[j][2]
    } else if(list[j][1]=='jmp'){
        j=j+list[j][2]-1
    } 

}

