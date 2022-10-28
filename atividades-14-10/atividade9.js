let familia = [
    [ "Fred", "Barney" ],
    [ "George", "Jane", "Elroy" ],
    [ "Homer", "Marge", "Bart" ]
];
function tabula(familia) {
let x;

for (let i = 0; i < familia.length; i++) {
        for (let j = 0; j < familia[i].length; j++) {
        console.log('\t'+familia[i][j]);
    }
    }
return x;
}
      
tabula([familia]);