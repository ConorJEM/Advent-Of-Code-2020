var fs = require('fs');
var data = fs.readFileSync('./day6input.txt').toString().split('\n\n');

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

let total=0
for(i=0;i<data.length;i++){

    let a=data[i].split('\n').join('').split('');
    let unique = a.filter(onlyUnique);
    let score=unique.length
    total=total+score
    
}

console.log(total);

  
  



