var fs = require('fs');
var instructions = fs.readFileSync('./inputday8.txt').toString().split('\n');


//instructions=['nop +0','acc +1','jmp +4','acc +3','jmp -3','acc -99','acc +1','jmp -4','acc +6'];

let list=[];
let vals=0


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


function solver(specificlist) {
    let acc=0;
    let visited=[];
    
    
    for(j=0;j<10000;j++){
    
        
        //end the loop if we reach a previous instruction
        if(j==specificlist.length-1){
            return ('success',acc)
        }
        if(visited.includes(specificlist[j][0])){
            //console.log(acc,'the final acc value')
            return 'fail';
        } else {
            visited.push(specificlist[j][0])
        }
        if(specificlist[j][1]=='acc'){
            acc+=specificlist[j][2]
        } else if(specificlist[j][1]=='jmp'){
            j=j+specificlist[j][2]-1
        } 
    
    }
    return acc
    }
    
    console.log(solver(list))


    
for(k=0;k<list.length;k++){
    let newlist=[...list];
    if(newlist[k][1]=='jmp'){
        newlist[k][1]='nop'
        if(solver(newlist)!='fail'){
        console.log(solver(newlist))}
        newlist[k][1]='jmp'
    } else if (newlist[k][1]=='nop'){
        newlist[k][1]='jmp'
        if(solver(newlist)!='fail'){
            console.log(solver(newlist))}
        
        newlist[k][1]='nop'
    }
       
}