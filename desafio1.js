var euler = function(multiplo,multiplo1,ateQuando){

	this.multiplo= multiplo;
	this.multiplo1  = multiplo1;
	this.ateQuando = ateQuando;
	
	this.validaeuler = function(){
		var cont = 0;
		for(var i = 0; i < ateQuando; i++){
			
			if( (i%3 === 0) || (i%5 === 0) ){     
				 cont+= i;
			}
		}
		console.log(cont);
	}
}
//isso é para testar a funcao
//var novoeuler = new euler(3,5,1000);
//novoeuler.validaeuler();