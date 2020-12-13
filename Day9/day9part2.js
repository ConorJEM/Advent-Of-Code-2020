var fs = require('fs');
var instructions = fs.readFileSync('./inputday9.txt',{encoding:'utf-8'}).split('\n');


for (i=0;i<instructions.length;i++){
    instructions[i]=parseInt(instructions[i]);
}
let target=15690279;


myarr=[]
let x=myarr.reduce((a,b)=>a+b,0)
for (i=0;i<instructions.length;i++){
    
    
    if(x==target){
        console.log('success!')
        console.log(myarr,'myarr')
        
        break;
        
    } else if(x<target){
        myarr.push(instructions[i]);
        x=myarr.reduce((a,b)=>a+b,0)
        
    } else if(x>target){
    
        myarr.shift()
        i=i-1
        x=myarr.reduce((a,b)=>a+b,0)
        
    }
    
}

console.log(Math.min(...myarr)+Math.max(...myarr),'final ans');