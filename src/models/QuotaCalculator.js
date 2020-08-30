/* Esta clase realiza las 
funciones del backend relacionadas con el cálculo de disponibilidad.
 */

export default class QuotaCalculator{

    doEverything(data,quota){       // data is a bidimensional array. Quota is a value between 0 and 1
        // Cuenta mesas totales
        const totalTables = this.countTables(data);
        console.log("Total tables: " + totalTables);

        // Calcular la Susana Distancia
        this.disableTablesX(data);
        this.disableTablesY(data);
        this.disableTablesDiaIzquierda(data);
        this.disableTablesDiaDerecha(data);

        // Cuenta mesas disponibles
        const available = this.countTables(data);
        console.log("available Tables for use: " + available);

        // Calcular porcentaje con SD
        const distancePC = this.calculatePC(available, totalTables);
        console.log("Capacity with Safe Distancing " + distancePC);

        // If Quota is lower than PC after safe distance, disable more tables
        if(quota < distancePC) {
            console.log("Quota not achieved.")
            const extraTables = available - Math.round(totalTables*quota);
            console.log("extraTables: " +extraTables);
            // Recalcular disponibilidad según Quota
            this.disableFurther(data, extraTables);
        } else{
            console.log("Quota achieved!");
        }

        return data;
    }

    countTables(data){
        let tableCount = 0;
        let row;
        for (row of data){
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

    calculatePC(available, total){
        return available/total;
    }

    disableFurther(data, extraTables){
            // Simply turn as many ones to -1 as there are extraTables
            for (var row of data){
                for (var i=0; i<row.length; i++){
                    if (row[i] === 1 && extraTables>0) {
                        row[i] = -1;
                        extraTables --;
                    } else {
                        break;
                    }
                }
                if (extraTables<1){
                    break;
                }
            }
    }
}
        

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


//const qc = new QuotaCalculator();
//qc.doEverything(M2, 0.47);


