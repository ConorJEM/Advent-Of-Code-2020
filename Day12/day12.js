var fs = require('fs');
var instructions = fs.readFileSync('./inputday12.txt').toString().split("\n");

function parse(array){
    for(i=0;i<array.length;i++){
        array[i]=array[i].split('')
        var joinedArray = instructions[i].slice(1, array[i].length).join("");
        array[i]=array[i].splice(0,1)
        array[i].push(joinedArray)
        
        
    }return array
    }
parse(instructions)

let directions=['N','E','S','W']
let position=[0,0,directions[1]]

console.log(position,'position before!')
function solver(array){
    let counter=1
    for(i=0;i<array.length;i++){
        //FOR THE CASE OF R OR L, TURNING

        //R
        
        if(array[i][0]=='R'){
            if(array[i][1]=='90'){
                counter+=1
                if(counter>3){
                    counter=counter-4
                }
                position[2]=directions[counter]
            } else if(array[i][1]=='180'){
                counter+=2
                if(counter>3){
                    counter=counter-4
                }
                position[2]=directions[counter]
            } else if(array[i][1]=='270'){
                counter+=3
                if(counter>3){
                    counter=counter-4
                }
                position[2]=directions[counter]
            }
        }
        //L
        if(array[i][0]=='L'){
            if(array[i][1]=='90'){
                counter-=1
                if(counter<0){
                    counter=counter+4
                }
                position[2]=directions[counter]
            } else if(array[i][1]=='180'){
                counter-=2
                if(counter<0){
                    counter=counter+4
                }
                position[2]=directions[counter]
            } else if(array[i][1]=='270'){
                counter-=3
                if(counter<0){
                    counter=counter+4
                }
                position[2]=directions[counter]
            }
        }


        // For the case of F, going FORWARD
        if(array[i][0]=='F'){
                   if(position[2]=='N'){
                position[1]=position[1]+parseInt(array[i][1]);
            } else if(position[2]=='S'){
                position[1]=position[1]-parseInt(array[i][1]);
            } else if(position[2]=='E'){
                position[0]=position[0]+parseInt(array[i][1]);
            } else if(position[2]=='W'){
                position[0]=position[0]-parseInt(array[i][1]);
            }
            
        }

        //for the case of a given direction , N , E , S , W

        if(array[i][0]=='N'){
            position[1]=position[1]+parseInt(array[i][1]);
        } else if(array[i][0]=='E'){
            position[0]=position[0]+parseInt(array[i][1]);
        } else if(array[i][0]=='S'){
            position[1]=position[1]-parseInt(array[i][1]);
        } else if(array[i][0]=='W'){
            position[0]=position[0]-parseInt(array[i][1]);
        }
        console.log(position,'current pos',i)
    }
   
}
solver(instructions)


console.log(position,'position after!')
console.log(Math.abs(position[0])+Math.abs(position[1]),'final ans')
//363 final ans
