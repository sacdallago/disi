const Disi = require('../build/disi.js');

let n_of_vectors = 2;
let vector_length = 10;

let vectors = [];

for(let i=0; i<n_of_vectors; i++){
    let v = [];

    for(let j=0; j<vector_length; j++){
        v.push(parseInt(Math.random()*10));
    }

    vectors.push(v);
}

for(let i=0; i<n_of_vectors; i++){
    for(let j=i+1; j<n_of_vectors; j++){
        let A = vectors[i];
        let B = vectors[j];
        console.log("-----------------------------------");
        console.log("Vector " + i + ": "    + JSON.stringify(A));
        console.log();
        console.log("Vector " + j + ": "    + JSON.stringify(B));
        console.log("-----------------------------------");
        console.log();

        console.log("Distances:");
        console.log("\tManhattan: "   + Disi.manhattan(A, B));
        console.log("\tMikowski r=1: "+ Disi.mikowski(A, B, 1));
        console.log("\tEuclidian: "   + Disi.euclidian(A, B));
        console.log("\tMikowski r=2: "+ Disi.mikowski(A, B, 2));
        console.log("\tSupremum: "    + Disi.supremum(A, B));
        console.log("\tMikowski r=infinity: "+ Disi.mikowski(A, B, Infinity));
        console.log();
    }
}

console.log("\n\nEnd_of_file.");