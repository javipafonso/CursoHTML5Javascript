function validacion(formulario){
	var validName = false;
	var validNumber = false;
	//comprobamos si los inputs son vacíos
	if (((formulario..value.length == 0) || /^\s+$/.test(formulario.nombre.value)) && (formulario.nacido.value.length == 0)){
		formulario.nombre.value = "Debe introducir algún texto";
		formulario.nombre.focus();
		document.getElementsByTagName('p')[2].outerHTML = "Debe introducir un año de nacimiento";
		return false;
	}
	//comprobamos si el value del input es > 0
	if (formulario.nombre.value.length> 0){		
	    //Expresión regular para ver si sólo contiene letras
		result = /^[A-Z]+$/i.test(formulario.nombre.value);		
		if (result){
			validName = true;
		}
		else{
			formulario.nombre.value = "Ha introducido números. No está permitido";
		}
	}	
	//comprobamos que son sólo número y que tienen que ser 4 dígitos
	if (/^([0-9]{4})+$/i.test(formulario.nacido.value)){
		validNumber = true;
	}
	else{
		document.getElementsByTagName('p')[2].outerHTML = "El año de nacimiento debe tener 4 dígitos";
	}
	if (validName && validNumber){
		return true;
	}
	else{
		return  false;
	}
	
}