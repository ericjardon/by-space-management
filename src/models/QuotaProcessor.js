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
            tableCount += val;
            for (var i=1; i<row.length; i++){
                if (row[i] !== val) {
                    tableCount += row[i];
                    val = row[i];
                }
            }
        }
        return tableCount;
    }

    // Primero selecciona las mesas que sí estan a sana distancia
    // lee de arriba a abajo, izquierda a derecha
    disableTables(data){

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




} 

let data = [
    [1,0,1,0,0,0,1], //
    [0,0,0,1,0,0,0],
    [1,1,1,0,0,0,0],
    [1,0,1,1,0,1,0]
]
let test = [
    [1,0,1,0],        // debería quedar igual
    [0,1,0,0],         // debería quedar igual
    [1,0,1,1]         // debería quedar -101 *igual?  
]

const qc = new QuotaCalculator();
//console.log(qc.countTables(data));
qc.disableTables(test);
console.log(test);