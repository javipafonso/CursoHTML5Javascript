function validacion(formulario){
	var validDNI = false;	
	//comprobamos si los inputs son vac�os
	if ((formulario.DNI.value.length == 0) || /^\s+$/.test(formulario.DNI.value)){
		formulario.DNI.value = "DNI vac�o";
		formulario.DNI.focus();		
		return false;
	}
	msg = "Formato incorrecto";
	//comprobamos si el value del input es > 0	
	if (formulario.DNI.value.length > 8 && formulario.DNI.value.length < 11){	
		
		//Array de letras v�lidas
		var letras=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"]
	    //Separamos la expresi�n en dos partes para comprobar si la cantidad 
	    //de n�meros es mayor a 7 o menor y si existe letra	    
	    if (formulario.DNI.value.includes('-')){
	    	partsDNI = formulario.DNI.value.split('-')	    
			resultNum = /^([0-9]{8})+$/i.test(partsDNI[0]);				
			resultLetras = /^([A-Z]{1})+$/i.test(partsDNI[1]);			
			if (resultNum && resultLetras){
				var resto = partsDNI[0] % 23;
				if (resto < 23){ 
					if (partsDNI[1] == letras[resto]){
						validDNI = true;
					}
				}
			}	
					
		}
		else{
			partsNumeros = formulario.DNI.value.substring(0,8);
			partsLetras = formulario.DNI.value.substring(8);
			var resto = partsNumeros % 23;
			
			if (resto < 23){ 
					if (partsLetras == letras[resto]){
						validDNI = true;
					}
					
			}

		}
		
	}
	else{			
		formulario.DNI.value = "Tama�o no v�lido.";
	}
	if (validDNI){
		return true;
	}
	else{
		formulario.DNI.value = msg;
		return  false;
	}
	
}