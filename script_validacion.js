function validacion(formulario){
	var validName = false;
	var validNumber = false;
	//comprobamos si los inputs son vac�os
	if (((formulario..value.length == 0) || /^\s+$/.test(formulario.nombre.value)) && (formulario.nacido.value.length == 0)){
		formulario.nombre.value = "Debe introducir alg�n texto";
		formulario.nombre.focus();
		document.getElementsByTagName('p')[2].outerHTML = "Debe introducir un a�o de nacimiento";
		return false;
	}
	//comprobamos si el value del input es > 0
	if (formulario.nombre.value.length> 0){		
	    //Expresi�n regular para ver si s�lo contiene letras
		result = /^[A-Z]+$/i.test(formulario.nombre.value);		
		if (result){
			validName = true;
		}
		else{
			formulario.nombre.value = "Ha introducido n�meros. No est� permitido";
		}
	}	
	//comprobamos que son s�lo n�mero y que tienen que ser 4 d�gitos
	if (/^([0-9]{4})+$/i.test(formulario.nacido.value)){
		validNumber = true;
	}
	else{
		document.getElementsByTagName('p')[2].outerHTML = "El a�o de nacimiento debe tener 4 d�gitos";
	}
	if (validName && validNumber){
		return true;
	}
	else{
		return  false;
	}
	
}