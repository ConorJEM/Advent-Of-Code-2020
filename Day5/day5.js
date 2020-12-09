var fs = require('fs');
var data = fs.readFileSync('./inputday5.txt').toString().split('\n');



let=colss=[];
let=rowss=[];

let ids=[];


for (j=0;j<8;j++){
    colss.push(j);
} 
for (k=0;k<128;k++){
    rowss.push(k);
}




for(i=0;i<data.length;i++){
    var cols=colss;
    var rows=rowss;

    for(j=0;j<data[i].length;j++){

        if (data[i][j]=='R'){
            cols=cols.slice(cols.length/2);
        } else if (data[i][j]=='L'){
            cols=cols.slice(0,cols.length/2);
        } else if (data[i][j]=='F'){
            rows=rows.slice(0,rows.length/2);
        } else if (data[i][j]=='B'){
            rows=rows.slice(rows.length/2);
        }

    }
    ids.push(parseInt(rows)*8+parseInt(cols))
}

console.log(Math.max(...ids));




