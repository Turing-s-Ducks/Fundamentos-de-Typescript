( function test() {
    let mensaje = 'hola mundo';
    const URL_FACEBOOK = 'enviroment.urlfacebook' // Const en mayusculas datos que no puedenb cambiar
    if(true){
        // mensaje = ' variable global '
        // let mensaje = ' variable local ';
        let mensaje = 'holi crayoli';
    }
    console.log(mensaje);
});



// Tipos de datos
( function tiposDatos() {
        let mensaje : string = 'Hola'; 
        let numero : number = 2;
        let buleano : boolean = true;
        let hoy : Date = new Date();
        let cualquierCosa;
        cualquierCosa = buleano;
        let student = {
            nombre : 'martin',
            edad : 23
        }
        student = {
            nombre : 'juan',
            edad : 40
        }
    }
);

( function () {
    function getistrue() {
        return( "it's true " )
    } 
    const nombre : string = 'alex';
    const apellido : string = 'maguey';
    const edad : number = 23;
    const output = ` ${ nombre } ${ apellido } y su edad es ${ edad } ${ getistrue() } `;
    console.log(output);
});


( function argumentos() {
    // function ordenTacos(alguien:string, ordeno: string = 'tacos') {
        //     const output = ` ${ alguien } ordneo ${ ordeno }`;
        //     return(output);
        // }
    function ordenTacos(
            alguien:string, 
            ordeno: string = 'tacos',
            momento?: string
        ) {
            let output : string;
            if (momento){
                output = ` ${ alguien } ordeno ${ ordeno } ${ momento } `;
            }else{
                output = ` ${ alguien } ordeno ${ ordeno } `;
            }
            return(output);
        }
    console.log( ordenTacos('susan') );
    console.log( ordenTacos('toño','quesadilla') );
    console.log( ordenTacos('marta','3 tortas','hace 5 minutos') );
});


// Funciones flecha
( function funcionesFlecha() {
    let myFunction = function (a:string) {
        return a.toUpperCase();
    }

    function myFunction2(a){
        return a;
    }

    const funcionF = (a: string) => a.toUpperCase(); 

    const suma = (a : number, b : number) =>{
        return (a + b) ;
    };

    let name : string = 'Jorge';
    setTimeout(() => {
        console.log(` ${name} awesome it's works `)
    }, 1000);
});



//  Desestructuracion de objetos y arreglos
( () => {
    
})();




// Promesas 
(()=>{
    const myPromesa = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('se termino el timeout');
            reject('se termino la promise');
        }, 1000);
    });
    myPromesa.then(mensaje => console.log(mensaje)).catch( err => console.warn(err));
})();

// Promesas 
(()=>{
    let realizaPago = ( montoPago:number) =>{
        let montoCuenta = 1000;
        return new Promise( (resolve, reject)=>{
            if(montoPago< montoCuenta){
                montoCuenta -= montoPago;
                resolve('El pago se ha realizado con exito');
            }else{
                reject('No cuentas con los fondo suficientes')
            }
        });
    }

    realizaPago(500).then(
        montoCuenta => console.log(montoCuenta)
    )
})();






// interfaces
( () => {
    // Paso 1
    // const historialAcademico = ( upiicsaStudent) => {
    //     console.log(`Estas viendo el historial de ${upiicsaStudent.nombre}`)
    // }
    // const upiicsaStudent = {
    //     nombre : 'Martin',
    //     carrera: 'IFO',
    //     matricula: 213132919230
    // }
    // Paso 2
    // const historialAcademico = ( upiicsaStudent : { nombre : string} ) => {
    //     console.log(`Estas viendo el historial de ${upiicsaStudent.nombre}`)
    // }
    // const boletaGlobal = ( upiicsaStudent : { nombre : string} ) => {
    //     console.log(`Boleta global de ${upiicsaStudent.nombre}`)
    // }

    // const upiicsaStudent = {
    //     nombre : 'Martin',
    //     carrera: 'IFO',
    //     matricula: 213132919230
    // }

    // Paso 3
    interface student {
        nombre : string,
        carrera: string,
        matricula: number,
        dictamen?: boolean
    }

    const historialAcademico = ( upiicsaStudent :  student) => {
        console.log(`Estas viendo el historial de ${upiicsaStudent.nombre}`)
    }

    const boletaGlobal = ( upiicsaStudent : student ) => {
        console.log(`Boleta global de ${upiicsaStudent.nombre}`)
    }

    const upiicsaStudent:student = {
        nombre : 'Martin',
        carrera: 'IFO',
        matricula: 213132919230
    }

})();
