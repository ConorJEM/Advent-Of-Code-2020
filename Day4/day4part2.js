var fs = require('fs');
var data = fs.readFileSync('./day4input.txt').toString().split('\n\n');
let cands=[];
let counter=0
let ncounter=0 


for (i=0;i<data.length;i++){
    if(data[i].includes("byr")&&data[i].includes("iyr")&&data[i].includes("eyr")&&data[i].includes("hgt")&&data[i].includes("hcl")&&data[i].includes("ecl")&&data[i].includes("pid")){
        cands.push(i);
        counter+=1;
    }
} 

for (num in cands){
 

 let x=data[cands[num]].split(' ').join(',').split('\n').join(',').split(',');
 
 for (i=0;i<x.length;i++){
     let y=x[i].split(':');
    
        //correct
        if (y[0].includes("ecl")){
            if (y[1].includes('amb')||y[1].includes('blu')||y[1].includes('brn')||y[1].includes('gry')||y[1].includes('grn')||y[1].includes('hzl')||y[1].includes('oth')){
                
            } else {
                ncounter=ncounter+1;
        
                break;
            }
        
    }
    //correct
      else if(y[0].includes("iyr") && !(y[1]>=2010 && y[1]<=2020)){
        ncounter=ncounter+1;
     
        break
    } 
    //correct
    else if (y[0].includes("eyr") && !(y[1]>=2020 && y[1]<=2030)){
        ncounter=ncounter+1;
        
        break
    } else if (y[0].includes("pid")&& y[1].length != 9){
        ncounter=ncounter+1;
       
                
        break


        //HEIGHT CORRECT
    } else if (y[0].includes("hgt")){

        if ((y[1].includes("cm")&&(parseInt(y[1])>=150&&parseInt(y[1])<=193))||(y[1].includes("in")&&(parseInt(y[1])>=59&&parseInt(y[1])<=76))){
            
        } else {
        ncounter=ncounter+1;
        
        break
        }
           
        
        
        
    }




        //hcl working
    else if (y[0].includes("hcl")){
        if(!(/^#[0-9A-F]{6}$/i.test(y[1]))){
            ncounter=ncounter+1;
            
            break; 
        }
        
    } 
        //byr working
    else if (y[0].includes("byr")){
        if(y[1]>=1920 && y[1]<=2002){
            
        } else {
           ncounter=ncounter+1;
           
           break
        }

       //maybe change so only INSIDE these rangers addd counter
   }
   
 }
 
}
console.log(ncounter);
console.log(cands.length);
console.log(cands.length-ncounter)
