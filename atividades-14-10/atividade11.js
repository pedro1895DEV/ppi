let a = [ [4,5,6], [10,20,30] ];
let b = [ [1,2,3], [5,8,20] ];

function somamatriz (a,b){
let r =[];
for(let x in a){
let line = [];
for(let j in a[x]){
line.push(a[x][j]+b[x][j])
}
r.push(line);

}
return r;
}
console.log(somamatriz(a,b));