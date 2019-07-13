//Declara Variables
var mensaje1="Sale of Computers PW";
var precio = 5.50;
var CUI = 2485793645138;
var estado = true;
var resultado = 3+9;
//Salida por consala
console.log(CUI);

alert(mensaje1);
swal("Bienvenido");

//
var Compu = angular.module("Compu",[]);

Compu.controller("Computacion",function($scope){

	$scope.Mostrar = function(){
	$scope.J = [{
		"nombre":"Computadora HP  Precio Q.1250.00",
		"imagen":"https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png"
	},{
		"nombre":"Dell Chromebook 11 Precio Q 1350.00",
		"imagen":"https://www.altonivel.com.mx/assets/images/Estructura_V3/Tecnologia/Soluciones/Dell_Chromebook_11.jpg"
	},{
		"nombre":"Asus X200MA Precio Q 1150.00",
		"imagen":"https://www.altonivel.com.mx/assets/images/Estructura_V3/Tecnologia/Soluciones/Asus_X200MA.jpg"
	},{
		"nombre":"Acer Aspire Acer_Aspire_E1-572 Precio Q 1550.00",
		"imagen":"https://www.altonivel.com.mx/assets/images/Estructura_V3/Tecnologia/Soluciones/Acer_Aspire_E1-572.jpg"
	},{
		"nombre":"Apple MacBook Air Precio Q 1650.00",
		"imagen":"https://www.altonivel.com.mx/assets/images/Estructura_V3/Tecnologia/Soluciones/apple_macbook_air_ruiz.jpg"
		}]

	}

})