
//var fs = require('fs');
//var beforeseat = fs.readFileSync('./inputtest.txt').toString().split("\r\n");
var fs = require('fs');
var beforeseat = fs.readFileSync('./inputday11.txt').toString().split("\n");

let seat=[]
for(i=0;i<beforeseat.length;i++){
    newseatrow=beforeseat[i].split('') 
    seat.push(newseatrow);
}

function addborder (seat){
    const dotarray=[]
    for(i=0;i<seat[0].length;i++){
            dotarray.push('.')
    }
    
    seat.unshift(dotarray);
    seat.push(dotarray);
    
    for(i=0;i<seat.length-1;i++){
            
            seat[i].push('.')
            seat[i].unshift('.')
        
    }
    
    return seat
}

addborder(seat);
    
console.log(seat[1]);
    
 
    
function applyrules(arraycopy,array){
    for(i=1;i<arraycopy.length-1;i++){
            for(j=1;j<arraycopy[i].length-1;j++){
                    var count=0;
                    if(arraycopy[i+1][j]=='#'){
                            count+=1;
                    }
                    if(arraycopy[i-1][j]=='#'){
                            count+=1;
                    }
                    if(arraycopy[i+1][j+1]=='#'){
                            count+=1;
                    }
                    if(arraycopy[i+1][j-1]=='#'){
                            count+=1;
                    }
                    if(arraycopy[i][j+1]=='#'){
                            count+=1;
                    }
                    if(arraycopy[i][j-1]=='#'){
                            count+=1;
                    }
                    if(arraycopy[i-1][j+1]=='#'){
                            count+=1;
                    }
                    if(arraycopy[i-1][j-1]=='#'){
                            count+=1;
                    }
                    if(count==0&&arraycopy[i][j]=='L'){
                            array[i][j]='#'
                    }
                    if(count>=4 &&arraycopy[i][j]=='#'){
                            array[i][j]='L'
                    }
                    
            }
    }return array
    }

function clone (existingArray) {
    var newObj = (existingArray instanceof Array) ? [] : {};
    for (i in existingArray) {
       if (i == 'clone') continue;
       if (existingArray[i] && typeof existingArray[i] == "object") {
          newObj[i] = clone(existingArray[i]);
       } else {
          newObj[i] = existingArray[i]
       }
    }
    return newObj;
 }






for(k=0;k<100000;k++){
    let numocc=0
    if(clone(seat).toString()===applyrules(clone(seat),seat).toString()){
        for(o=0;o<clone(seat).length;o++){
            for(l=0;l<clone(seat)[o].length;l++){
                if (clone(seat)[o][l]=='#')
                numocc+=1
            }
        }
        console.log(numocc,'final ans')
        break;
    }
    
    applyrules(clone(seat),seat)
    
}

