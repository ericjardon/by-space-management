/* Esta clase realiza las 
funciones del backend relacionadas con el cálculo de disponibilidad.
 */
// TEST DATA


class QuotaCalculator{
 

    countTables(data){
        let tableCount = 0;
        let row;
        for (row of data){
            let val = row[0];
            //if(val===1){
            //tableCount += val;
            for (var i=0; i<row.length; i++){
                if (row[i] === 1) {
                    tableCount += row[i];
                }
            }
        }
        return tableCount;      // cuenta mesas unidades totales 
    }

    // Primero selecciona las mesas que sí estan a sana distancia
    // lee de arriba a abajo, izquierda a derecha
    disableTablesX(data){       // aprovecha esquinas
        let row;
        for (row of data){
            for (var i=0; i<row.length-2; i++){
                if (row[i] === 1){
                        if(row[i+1] === 0){
                            if(row[i+2]!==0){
                                row[i+2]=-1;
                            }
                        }
                    }
                }
            }
        }
    disableTablesX2(data){      // aprovecha centro
        let row;
        for (row of data){
            for (var i=0; i<row.length-2; i++){
                if (row[i] === 1){
                        if(row[i+1] === 0){
                            if(row[i+2]!==0){
                                row[i]=-1;
                            }
                        }
                    }
                }
            }
        }
    
        disableTablesY(data){
            let i; 
            let j;
             
            for (j=0; j<data[0].length; j++){        // recorre por columnas a la derecha
                for (i=0; i<data.length-2;i++){  // recorre filas hacia abajo
                    if (data[i][j] === 1){
                            if(data[i+1][j] === 0){     // checar adyacente abajo
                                if(data[i+2][j] !== 0){
                                    data[i+2][j]=-1;
                                }
                            }
                        }
                }
            }
        }
        disableTablesY2(data){      // aprovecha centro
            let i; 
            let j;
             
            for (j=0; j<data[0].length; j++){        // recorre por columnas a la derecha
                for (i=0; i<data.length-2;i++){  // recorre filas hacia abajo
                    if (data[i][j] === 1){
                            if(data[i+1][j] === 0){     // checar adyacente abajo
                                if(data[i+2][j] !== 0){
                                    data[i][j]=-1;
                                }
                            }
                        }
                }
            }
        }

        disableTablesDiaDerecha(data){
            let i; 
            let j;
            for (j=0; j<data[0].length-1; j++){        // recorre por columnas a la derecha
                for (i=0; i<data.length-1;i++){  // recorre filas hacia abajo
                    if(data[i][j]===1){
                        if (data[i+1][j+1] === 1){
                            data[i+1][j+1]=-1;
                        }
                    }
                }
            }
        }

        disableTablesDiaIzquierda(data){
            let i; 
            let j;
            for (i=0; i<data.length-1;i++){        // recorre por columnas a la derecha
                for (j=0; j<data[0].length; j++){  // recorre filas hacia abajo
                    if(data[i][j]===1){
                        if (data[i+1][j-1] === 1){
                            data[i+1][j-1]=-1;
                        }
                    }
                }
                    
            }
        }
    }
        
        /*readCols(data){
            let i; 
            let j;
             
            for (j=0; j<data[0].length; j++){        // recorre por columnas a la derecha
                let col =[];
                for (i=0; i<data.length;i++){
                    col.push(data[i][j]);
                }
                console.log("Column: " + col);
            }
        }*/
 

let data = [
    [1,0,1,0,1,0,1], //     
    [0,0,0,1,0,0,0], //     
    [1,1,1,0,0,0,0], //     
    [1,0,0,1,0,1,0]  //      11 mesas unidades
]

let test = [
    [1,1,0,1,1],  // debería quedar
    [1,1,0,1,0],         // debería quedar 
    [1,1,0,1,1],
    [1,1,1,1,0],
    [1,0,1,1,0]   // 18 mesas unidades
]
let testEasy = [
    [0,1,0,1,0],
    [1,0,1,0,1],
    [0,1,0,1,0],
    [1,0,1,0,1],
    ]

let diaTest = [
    [0,1],
    [1,0],
    [0,1],
    [1,0],
]

let m1 = [     
    [0,0,0,0,0,1,0,0,0,1,1],
    [0,0,0,0,0,0,0,0,0,1,1],
    [0,0,1,1,0,0,0,1,1,0,0],
    [0,0,0,0,0,1,0,0,0,1,1],
    [0,0,0,0,0,1,0,0,0,1,1],
]
let m3 = [     
    [0,0,1,1,0,1,0,0,0,1,1],
    [0,0,0,0,0,0,0,0,0,1,1],        // aunque no detecte una mesa de 2x2, sí detecra dos de 2x1 por el criterio diagonal.
    [0,1,1,1,0,0,0,1,1,0,0],
    [1,0,0,0,0,1,0,0,0,0,1],
    [1,0,0,0,1,0,0,0,1,1,1],
]

let m2 = [
    [0,0,0,1,1,0,1,0,1,1],
    [1,1,0,0,1,1,1,0,0,1],
    [0,0,1,1,0,0,1,0,0,0],
    [1,0,1,0,1,0,1,0,1,1],
    [1,0,0,1,1,0,1,1,0,0],
]

let m4= [    
    [0,0,0,0,0,1,0,0,0,1,1],
    [0,0,0,0,0,0,0,0,0,1,1],
    [0,1,1,1,0,0,0,1,1,0,0],
    [1,0,0,0,0,1,0,0,0,0,1],
    [1,0,0,0,1,0,0,0,1,1,1],
    [0,0,1,1,0,0,0,1,1,0,0],
    [0,0,0,0,0,1,0,0,0,1,1],
    [0,0,0,0,0,1,0,0,0,1,1],
    [0,0,0,0,0,1,0,0,0,1,1],
    [0,0,0,0,0,0,0,0,0,1,1],
    [0,0,1,1,0,0,0,1,1,0,0],
    [0,0,0,0,0,1,0,0,0,1,1],
    [0,0,0,0,0,1,0,0,0,1,1],
]

const qc = new QuotaCalculator();

let testMatrices = [];
testMatrices.push(m1,m2,m3,m4);
for (var m of testMatrices){
    // probar aquí las permutaciones: X, Y, DiaIzq, DiaDer
    console.log(m);
}
//console.log(qc.countTables(data));
/*
// AMBOS APROVECHAN EXTREMOS
console.log(qc.countTables(testEasy));
qc.disableTablesX(testEasy);
qc.disableTablesY(testEasy)
console.log("\n", testEasy);
console.log(qc.countTables(testEasy));

// X APROVECHA CENTRO, Y APORVECHA ESQUINAS
console.log(qc.countTables(testEasy));
qc.disableTablesX2(testEasy);
qc.disableTablesY(testEasy)
console.log("\n", testEasy);
console.log(qc.countTables(testEasy));

// X APROVECHA ESQUINAS, Y APROVECHA CENTRO
console.log(qc.countTables(testEasy));
qc.disableTablesX(testEasy);
qc.disableTablesY2(testEasy)
console.log("\n", testEasy);
console.log(qc.countTables(testEasy));

// AMBAS APROHCANDO CENTRO
console.log(qc.countTables(testEasy));
qc.disableTablesX2(testEasy);
qc.disableTablesY2(testEasy)
console.log("\n", testEasy);
console.log(qc.countTables(testEasy));
*/

//qc.disableTablesY(data);
console.log(qc.countTables(testEasy));
qc.disableTablesDiaDerecha(testEasy);
console.log(testEasy);

qc.disableTablesDiaIzquierda(testEasy);
console.log(testEasy);

console.log(qc.countTables(testEasy));