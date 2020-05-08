//Archivo de Parametros a Firebase
// Inicializar Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAqIQKRo0WcWVarAEhndXNbNAhZPA9pnsI",
    authDomain: "consolas-ea2aa.firebaseapp.com",
    databaseURL: "https://consolas-ea2aa.firebaseio.com",
    projectId: "consolas-ea2aa",
    storageBucket: "consolas-ea2aa.appspot.com",
    messagingSenderId: "745278205642",
    appId: "1:745278205642:web:ca046b6c719754fc284e33",
    measurementId: "G-F7JQVG887M"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();

function inhabilitar() {
	document.getElementById('name').disabled = true;
	document.getElementById('phone').disabled = true;
	document.getElementById('email').disabled = true;
	document.getElementById('paquete').disabled = true;
	document.getElementById('consola').disabled = true;
	document.getElementById('pay').disabled = true;
	
}

function save() {
	let name = document.getElementById('name').value;
	let tel = document.getElementById('phone').value;
	let correo = document.getElementById('email').value;
	let service = document.getElementById('paquete').value;
	let cons = document.getElementById('consola').value;
	let metodopag = document.getElementById('pay').value;

	if (name) {
		db.collection("servicios").add({
			Telefono: tel,
			consola: cons,
			email: correo,
			nombre: name,
			// fechareg: new Date().getTime(),
			paquete: service,
			paymethod: metodopag
		})
		 .then(() => {
				const toast = Swal.mixin({
					toast: true,
					position: 'top-end',
					showConfirmButton: false,
					timer: 4000,
					width: 400,
					// background:'#efeded',

				})

				toast({
					type: 'success',
					title: 'Los datos se han registrado exitosamente'
				})
			})
			.catch(() => {
				const toast = Swal.mixin({
					toast: true,
					position: 'bottom-start',
					showConfirmButton: false,
					timer: 4000,
					width: 400,
					background: '#f2f2f2'
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
			width: 350,
			showConfirmButton: true,
			confirmButtonText: 'Aceptar',
			background: 'white',

		})

		toast({
			type: 'error',
			title: 'No es posible guardar los datos, verifica tu información',
		})
	}
	// document.getElementById('registro').reset();

}
AOS.init({
	duration: 1200,
  })
