let familia = [
    [ "Fred", "Barney" ],
    [ "George", "Jane", "Elroy" ],
    [ "Homer", "Marge", "Bart" ]
];
function tabula(familia) {

for (let i in familia) {
        for (let j = 0; j < familia[i].length; j++) {
        console.log( ''+familia[i][j]);
    }
    }

}
    
tabula([familia]);