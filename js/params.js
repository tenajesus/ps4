//Archivo de Parametros a Firebase
// Inicializar Firebase
  var config = {
    apiKey: "AIzaSyD5IJFrk1heCtkO_GXn93e0M2tZ9RqiKmE",
    authDomain: "vincertifica.firebaseapp.com",
    databaseURL: "https://vincertifica.firebaseio.com",
    projectId: "vincertifica",
    storageBucket: "vincertifica.appspot.com",
    messagingSenderId: "840130538075"
  };

  firebase.initializeApp(config);

 //Accedere a la API de Firebase
 var dbService = firebase.database();
// Hacer llamado a ella mediante una Referencia
var referencia = dbService.ref('paqueteria');
// Metodo SET (Escribir datos) Metodo UPDATE (Actualizar Datos)

function inhabilitar(){
    document.getElementById('curp').disabled=true;
    document.getElementById('name').disabled=true;
    document.getElementById('cuatri').disabled=true;
    document.getElementById('grupo').disabled=true;
    document.getElementById('carrera').disabled=true;
    document.getElementById('mail').disabled=true;
    document.getElementById('savebtn').disabled=true;
    document.getElementById('cancelbtn').disabled=true;
  }

 function save(){	
 	let name = document.getElementById('name').value;
	let crp = document.getElementById('curp').value;
  let cuat = document.getElementById('cuatri').value;
  let grp = document.getElementById('grupo').value;
  let career = document.getElementById('carrera').value;
  let corr = document.getElementById('mail').value;
 	
 	if (name) {
 	referencia.push({ 
  carrera:career,
  cuatrimestre:cuat, 
  curp:crp, 
  email:corr,
	fechareg: new Date().getTime(),
	grupo:grp,
	nombre:name
	})
  .then (() => 
  	{
	const toast = Swal.mixin({
  	toast: true,
  	position: 'top-end',
  	showConfirmButton: false,
  	timer: 4000,
  	width:400,
  	// background:'#efeded',
    
	})

	toast({
  	type: 'success',
  	title: 'Los datos se han registrado exitosamente'
  			})
  })
  .catch(() => 
 	{
 	const toast = Swal.mixin({
  	toast: true,
  	position: 'bottom-start',
  	showConfirmButton: false,
  	timer: 4000,
  	width:400,
  	background:'#f2f2f2'
	})

	toast({
  	type: 'error',
  	title: 'Perro'
  			})
 	})
    inhabilitar();
  } 
    else {
  	const toast = Swal.mixin({
  	toast: true,
  	position: 'top-end',
    showConfirmButton: false,
  	width:350,
    showConfirmButton:true,
    confirmButtonText:'Aceptar',
    background:'white',

	})

	toast({
  	type: 'error',
  	title: 'No es posible guardar los datos, verifica tu información',
     	 })
  }
  // document.getElementById('registro').reset();
  
}

