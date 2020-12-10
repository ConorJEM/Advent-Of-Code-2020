var fs = require('fs');
var data = fs.readFileSync('./day4input.txt').toString().split('\n\n');

let counter=0
 
for (i=0;i<data.length;i++){
    if(data[i].includes("byr")&&data[i].includes("iyr")&&data[i].includes("eyr")&&data[i].includes("hgt")&&data[i].includes("hcl")&&data[i].includes("ecl")&&data[i].includes("pid")){
        counter+=1
        
    }

} 
console.log(counter);
