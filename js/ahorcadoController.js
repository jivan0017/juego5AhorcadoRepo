// arreglo de palabras: 
var arregloPalabras = ["amor", "tamarindo", "mejorandola", "desarrollo", "monica", "jaime"];
var arregloPistaPalabras = ["sentimiento", "fruta", "experiencia online", "forzar cerebro", "nombre simple", "nombre simple"];
                      


//palabra temporal
var palabraTmp = "AMOR";


var textBoxLetra;
var textBoxPista;
var objeto1;
var espacio;

var globalChar = "";
var contadorGral = 0;

//METODO PRINCIPAL ----------------------------------------------  M A I N  ----------------------------------------
function callAhorcadoMain () {
	//seleccionar una palabra:
	var indicePalabraEscogida = retornaNumeroAleatorio(0, (arregloPalabras.length - 1));

	palabraTmp = arregloPalabras[indicePalabraEscogida];
	alert("AHORCADO, palabras disponibles: " + arregloPalabras.length + " , tener en cuenta esta pista: " + arregloPistaPalabras[indicePalabraEscogida]);

	//alert(arregloPalabras.length);

	

	//--------------------------------------------------------------------------------------
	var canvasView = document.getElementById("canvasAhorcado");

	canvasView.width = 500;
	canvasView.height = 400;

	var contextoCanvas = canvasView.getContext("2d");
	//creo una instancia de la clase AHORCADO
	objeto1 = new ClassAhorcado(contextoCanvas);

	//llamado de los metodos del objeto

	//txtPista.textContent = "test";

	//------------------------ CAPTURA DE ELEMENTOS GRAFICOS ----------
	//obteniendo el boton
	var botonClickLetra  = document.getElementById("btnSeleccionarLetra");
	textBoxLetra = document.getElementById("txtLetra");

	var txtPista = document.getElementById("txtPista");
	textBoxPista = txtPista;
	textBoxPista.textContent = "la palabra tiene relacion con: " + arregloPistaPalabras[indicePalabraEscogida];
	
	//-----------------------------------------------------------------

	//espacios a tener en cuenta
	espacio = new Array(palabraTmp.length); 
	// CONVERTIR A MAYOUSCULA : toUpperCase => mayusculas
	//mostrar pista la primer vez
	imprimirUnderScore(false);

	objeto1.mostrarPistaPalabra(espacio);

	//OJO! el evento1, no tiene ( ), ya que no se dispara al agregar el evento, sino hasta cuando realmente se presione click en el boton
	botonClickLetra.addEventListener("click", evento1);


	//objeto1 = nombrePalabra;
}
//------------------------------------------------------------------------------------------------------------------


function evento1(){

	var componente = "componenteGUI";
	//alert("click");
	//textBoxLetra.value ="sdsd";
	//alert (textBoxLetra.value);

	var contenidoLetra = textBoxLetra.value;

	//alert(palabraTmp.toUpperCase);




	//VALIDACION para cunado sea un caractrer
	if (contenidoLetra.length >0){ // cambiar mecanismo de validacion
		//alert("es un caracter");
		globalChar = contenidoLetra;

		//valida si la letra forma parte de la palabra
		var retorno = objeto1.validarLetraPorPalabra(palabraTmp, globalChar);

		if (retorno == true){
			//existe la letra en el caracter
			imprimirUnderScore(textBoxPista, contenidoLetra[0], true);

			

			// objeto1.mostrarPistaPalabra(espacio);
		 }else {

			// DIBUJAR PARTE AHORCADO   <====   ir dibujando las partes.

		    objeto1.trazarAhorcado();
		    //objeto1.maximo--;
		    alert("INTENTO FALLIDO, VA EN EL INTENTO:  " + (objeto1.intentos) + ", solo tiene 5 intentos!");
			//objeto1.dibujarAhorcado();
		   if (objeto1.vivo == false){
			     	alert ("FINAL DEL JUEGO, HAS QUEDADO:  AHORCADO, TU MEMORIA ES DE:  POLLO,  \n Nuevamente se eligirá una palabra al azar, buena suerte...");
		   }
			    // alert("estado ahorcado: " + objeto1.vivo);
			     //objetoTexto.textContent = caracter;

		 }

		
	  //NO ES UN CARACTER
	}else{
		// flujo alterno 1.
		alert("El elemento ingresado no corresponde a una letra o caractér valido para hallar la palabra completa...")
	}


	objeto1.mostrarPistaPalabra(espacio);

	if (validarJuegoGanado()){
		alert("JUEGO TERMINADO, USTED HA ADIVINADO LA PALABRA, NUEVAMENTE SE PONDRA AL ALZAR UNA NUEVA PALABRA...");
		callAhorcadoMain();
	}

	//mala practica! porque si se repiten intentos con letras que ya existen este codigo realmente daria por hecho el total de palabras
	//if (contadorGral == palabraTmp.length){
	//		alert("HAS GANADO EL JUEGO, FELICITACIONES");
	//		callAhorcadoMain();
	//}


	textBoxLetra.value = "";
	textBoxLetra.focus();
	//alert (contenidoLetra[0]);
	//objeto1.trazarAhorcado();
	//objeto1.dibujarAhorcado();
}

<<<<<<< HEAD
var valorUsuario=0;
do{
	valorUsuario = prompt("elije valores entre [ 0 - 4 ]");
} while (valorUsuario < 0 || valorUsuario > 4);
=======

var ClassRandonNumber = function(){
	//variable blogal para la funcion
	this.resultadoGeneral = 0;
}

ClassRandonNumber.prototype.generarNumeroAleatorio = function(minimo,maximo){
    var numeroAretornar = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    //se asigna al atributo de la clase o funcion el valor generado
    this.resultadoGeneral = numeroAretornar;	
}

var objetoRandom = new ClassRandonNumber();

//genera numeros aleatorios entre [0 - 8]
objetoRandom.generarNumeroAleatorio(1,8);
>>>>>>> origin/gh-pages



//DECLARACION DE CLASES EN JAVA SCRIPT:
var ClassAhorcado = function(contexto){
	//obteniendo el contexto (TABLERO DE LA PAGINA)
	this.contexto  = contexto;
	this.intentos = 0;
	this.maximo = 5; // Numero de dibujos que conforman el humano que representa a un ahorcado
	this.vivo = true;

	//llamado del metodo tipo prototype
	 this.dibujarAhorcado();
}
//EXTENSION DE LA CLASE AHORCADO, APLICANDO PROTOTYPE EN JAVASCRIPT
ClassAhorcado.prototype.dibujarAhorcado = function (){	
	//obteniendo el contexto
	var dibujo = this.contexto;

	dibujo.beginPath();
	//ubicar la posicion del cursor en un punto inicial
	dibujo.moveTo(150,100);
	dibujo.lineTo(150, 50);
	dibujo.lineTo(400,50);
	dibujo.lineTo(400, 350);
	dibujo.lineWidth = 15;
	dibujo.strokeStyle = "#000000";
	dibujo.stroke();
	dibujo.closePath

	//this.trazarAhorcado();

	if (this.intentos > 0){
		//dibujar la cabeza
		//iniciar otro dibujo
		dibujo.beginPath();
		dibujo.arc(150,140,40,0, Math.PI * 2, false);
		dibujo.strokeStyle = "red";
		dibujo.lineWidth = 5;
		dibujo.stroke();
		//finalizar la traza del dibujo
		dibujo.closePath();


		if (this.intentos > 1){
			//dibujando el torso
					dibujo.beginPath();
					dibujo.moveTo(150,180);
					dibujo.lineTo(150,260);
					dibujo.strokeStyle = "red";
					dibujo.lineWidth = 5;
					dibujo.stroke();
					//finalizar la traza del dibujo
					dibujo.closePath();

					if (this.intentos >2){
								//DIBUJANDO LAS MANOS
							dibujo.beginPath();
							dibujo.moveTo(120,220);
							dibujo.lineTo(150,190);
							dibujo.lineTo(180,220);
							dibujo.strokeStyle = "red";
							dibujo.lineWidth = 5;
							dibujo.stroke();
							//finalizar la traza del dibujo
							dibujo.closePath();	

							if (this.intentos >3){
									//DIBUJANDO LAS PIERNAS
									dibujo.beginPath();
									dibujo.moveTo(120,290);
									dibujo.lineTo(150,260);
									dibujo.lineTo(180,290);
									dibujo.strokeStyle = "red";
									dibujo.lineWidth = 5;
									dibujo.stroke();
									//finalizar la traza del dibujo
									dibujo.closePath();

									if (this.intentos >4){
												dibujo.beginPath();
												dibujo.moveTo(125,120);
												dibujo.lineTo(145,145);
												dibujo.moveTo(145,120);
												dibujo.lineTo(125,145);
												dibujo.strokeStyle = "blue";
												dibujo.lineWidth = 5;
												dibujo.stroke();
												//finalizar la traza del dibujo
												dibujo.closePath();


												dibujo.beginPath();
												dibujo.moveTo(155,120);
												dibujo.lineTo(175,145);
												dibujo.moveTo(175,120);
												dibujo.lineTo(155,145);
												dibujo.strokeStyle = "blue";
												dibujo.lineWidth = 5;
												dibujo.stroke();
												//finalizar la traza del dibujo
												dibujo.closePath();

									}
							}

					}
		}

	}

}


// OJO! Crear clase utilidades para extender la funcionalidad de esta funcion
ClassAhorcado.prototype.trazarAhorcado = function() {
	// incrementar los intentos a drede para que se dibuje la cabeza
	this.intentos ++;

	if (this.intentos >= this.maximo){
		alert("intentos CERO");
		this.vivo = false;
	}

	this.dibujarAhorcado();
}




ClassAhorcado.prototype.validarLetraPorPalabra = function (palabra, letra){	

	//hallar longitud de la palabra
	var longitud = palabra.length;
	var estadoBusqueda = false;

	for (i=0;  i<longitud; i++){

		if (palabra[i]== letra){
			//existe la palabra 
			//alert("letra" + letra + " , posicion: " + i);
			estadoBusqueda = true;
			//incrementar el contador
		    contadorGral++;
		}
	}

	if (estadoBusqueda == true){
		//alert("letra: " + letra + " , encontrada");
	}

	return estadoBusqueda;

	// utilizar ciclos
}

//funcion que permite dibujar la pista, inicializa automaticamente con los caracteres "_"
ClassAhorcado.prototype.mostrarPistaPalabra = function (espacios){

	var imprimirElement = document.getElementById("txtPistaTmp");
	var texto = "";
	var longitudPalabra = espacios.length;
	var i=0;

	for (i = 0;  i<longitudPalabra;  i++){

		if (espacios[i] == undefined){
			//texto += espacios[i] + " ";
			texto+= "_ ";
		}else {
			//texto+= "_ ";
			texto += espacios[i] + " ";
		}
	}

	//imprimirElement.innerText = texto;
	imprimirElement.textContent = texto;
	//return "";
}

//-------------------------------------------------------------------------------------------------------------------------------

function imprimirUnderScore (object, letraEncontrada,esPrimerVez) {

 var objetoTexto = object;
 var caracter = "";


 if (esPrimerVez == false){
 	 for (i = 0;   i < palabraTmp.length; i++){
 		caracter = caracter + "_  ";

     }

 		//objetoTexto.textContent = caracter;
     }else {

	 for (i = 0;   i < palabraTmp.length; i++){
	 	if (palabraTmp[i] == letraEncontrada){
	 		caracter = caracter + letraEncontrada + " ";

	 		//actualizar la variable global
	 		espacio[i] = letraEncontrada;
	 	}else{
	 		caracter = caracter + "_  ";
	 	}

     }

 }

}

//--------------------------------- SE LLAMA CUANDO SE ESTA AHORCADO ---------------------------
//funcion que valida si un juego se ha terminado, evaluando el caracter de la palabra por cada letra de la variable espacio
function validarJuegoGanado(){
	var banderaJuegoTerminado = true;
	var contador = palabraTmp.length;
	var contador2 = 0;
	
	for (p=0; p < contador; p++){
		if (palabraTmp[p] == espacio[p]){
			//alert("letr: " + palabraTmp[p]);
		}else{
			banderaJuegoTerminado = false;
		}
		//alert(espacio[p]);
	}
	 return banderaJuegoTerminado;
}
//----------------------------------------------------------------------------------------------------------------
//Genera un número aleatorio entre un rango de enteros
function retornaNumeroAleatorio(minimo, maximo)
{
	//variable que captura una referencia de un numero aleatorio en un rango definido
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/gh-pages
