var bombas = [];
var contador = 0;
var largo = 10;

var prob_bomb = 3;
var largo_random = 12;

var band = [];
var cero_fin = false;
var puntuacion = 0;
var banderas_correctas = 0;
var evitar_loop = false;
var dif_glob = 2;
var visto = [];
var casilla = [];
var perder =false;

	



function carga ()
{
	document.getElementById("tamaño").value = largo;
	document.styleSheets[0].rules[1].style.backgroundColor = "grey";
	
}

function empezar ()
{
	evitar_loop = false;
	vic_cont = 0;
	puntuacion = 0;
	//puntos.value = puntuacion;
	contador = 0;
	
	largo = parseInt(document.getElementById("tamaño").value);
	
	document.getElementById("div_ver_vic").style.visibility="visible";
	//document.getElementById("puntos").style.visibility="visible";
	
	if (largo > 22)
		{
			largo = 22;
		}
	
	contador =0;
	/*
	prueba1.value = null;
	prueba2.value = null;
	prueba3.value = null; 
	*/
	
	tabla.innerHTML = '';
	for (iy = 0; iy < largo; iy++)
		{
			fila = "<div class='fila' id='fila"+iy+"'>";
			
			tabla.innerHTML += fila;
			
			fila = document.getElementById("fila"+iy);
			
			bombas[iy] = [];
			for (ix = 0; ix < largo; ix++)
				
				{
					
					
					col = "<div oncontextmenu='bandera("+iy+","+ix+");return false;' class='cubo' onclick=ver("+iy+","+ix+") id='cubo"+iy+"_"+ix+"'> </div>"
					/* */
					fila.innerHTML += col;
					
					
					
					random = parseInt(Math.random() * largo_random) + 1;
					
					 
					
					bombas [iy][ix] =  random;
					
					//document.getElementById("cubo"+iy+ix).style.backgroundColor = "cadetblue";
					/*
					prueba2.value += random.toString() + " [" + iy + "," + ix + "] / ";
					prueba3.value += bombas [iy][ix].toString() + " [" + iy + "," + ix + "] / ";
					*/
				}
		}
	
	for (i = 0; i < largo; i++)
	{
		
		band[i] = [];
		casilla[i] = [];
		visto[i] = [];
	}

	
	for (iy = 0; iy < largo ; iy++)
		{
			 
			for (ix=0;ix<largo;ix++)
				{
					
					band[iy][ix] = 0;
					casilla[iy][ix] = 0;
					
					
				}
		}
}



function ver (iy,ix)
{
	
	
	//prueba1.value += bombas [iy][ix].toString() + " [" + iy + "," + ix + "] / ";
	
		
	
	contador++;
	ver_bomba(iy,ix)
	
	/* ver_victoria(); */
	
	
}


function ver_bomba(iy,ix)
{
	
	

	
	
		
	if (bombas[iy][ix] <= prob_bomb && contador != 1 && band[iy][ix] != "bandera")
		{
			band [iy][ix] = "bomba";
			document.getElementById("cubo"+iy+"_"+ix).style.background = "url('bomba.jpg')";
			
			document.getElementById("cubo"+iy+"_"+ix).style.backgroundSize = "25px";
			
			if (evitar_loop != true)
				{
					perder = true;
					alert("Perdiste!, click en empezar para tratar de nuevo");
					ver_todos();
				}
		}
	else
	
	if (band[iy][ix] != "bandera")
		{
			if (contador == 1)
				{
					bombas[iy][ix] = prob_bomb + 1;
					if (iy != 0)
						{
							if (ix != 0)
								{
									bombas[iy-1][ix-1] = prob_bomb + 1;
										

								}

							bombas[iy-1][ix] = prob_bomb + 1;


							if (ix != largo - 1)
							{
								bombas[iy-1][ix+1] = prob_bomb + 1;

							}
						}
			
	
			if (ix != 0)
				{
					bombas[iy][ix-1] = prob_bomb + 1;
					
				}
				
			if (ix != largo - 1)
				{
					bombas[iy][ix+1] = prob_bomb + 1;
					
				}
	
			if (iy != largo - 1)
				{
					if (ix != 0)
						{
							bombas[iy+1][ix-1] = prob_bomb + 1;
						
						}
					
					bombas[iy+1][ix] = prob_bomb + 1;
						}
					
					
					if (ix != largo - 1)
						{
						
							bombas[iy+1][ix+1] = prob_bomb + 1;
							
						}
				}
		}
			
			
			contador_bombas = 0;
			click = true;
			revelar (iy,ix,click)
}


function revelar (iy,ix,click)
{
	
	
	ver_numero(iy,ix,click);
}

function ver_numero(iy,ix,click)
{
	
	band [iy][ix] = "revelado";
	document.getElementById("cubo"+iy+"_"+ix).style.backgroundColor = "cadetblue";
	//puntuacion++;
	//puntos.value = puntuacion;
	contador_bombas = 0;
	if (iy != 0)
				{
					if (ix != 0)
						{
							if (bombas[iy-1][ix-1] <= prob_bomb )
								{
									contador_bombas++;
								}
							
						}
						
					if (bombas[iy-1][ix] <= prob_bomb )
						{
							contador_bombas++;
						}
					
					
					if (ix != largo - 1)
					{
						if (bombas[iy-1][ix+1] <= prob_bomb )
							{
								contador_bombas++;
							}
						
					}
				}
			
	
			if (ix != 0)
				{
					if (bombas[iy][ix-1] <= prob_bomb )
						{
							contador_bombas++;
						}
					
				}
				
			if (ix != largo - 1)
				{
					if (bombas[iy][ix+1] <= prob_bomb )
						{
							contador_bombas++;
						}
					
				}
	
			if (iy != largo - 1)
				{
					if (ix != 0)
						{
							if (bombas[iy+1][ix-1] <= prob_bomb )
								{
									contador_bombas++;
								}
						
						}
					
					if (bombas[iy+1][ix] <= prob_bomb )
						{
							contador_bombas++;
						}
					
					
					if (ix != largo - 1)
						{
						
							if (bombas[iy+1][ix+1] <= prob_bomb )
								{
									contador_bombas++;
								}
							
						}
				}
	
		document.getElementById("cubo"+iy+"_"+ix).innerHTML = contador_bombas;
	   	
		casilla[iy][ix] = contador_bombas;
		
	
		
		
		if (contador_bombas == 0 && click != false)
			{
				
				ver_cero(iy,ix);
				
			}
		
		
		
				
				
			
			
			
	

}

function ver_cero(iy,ix)
{
	
	/*if (iy == 0 && ix == 0)
		return;
	if (iy == largo - 1 && ix == largo - 1)
		return;
		*/
	
	if (iy != 0)
		{
		
			if (ix != 0)
				{
					ver_numero(iy-1,ix-1,click = false);

					
				}
			
			
			ver_numero(iy-1,ix,click = false);
			
			
			
			if (ix != largo - 1)
				{
					ver_numero(iy-1,ix+1,click = false);
				}
			
		}
	
	if (ix != 0)
		{
			ver_numero(iy,ix-1,click = false);
		}
	
	if (ix != largo - 1)
		{
			ver_numero(iy,ix+1,click = false);
		}
	
	if (iy != largo - 1)
		{
			if (ix != 0)
				{
					ver_numero(iy+1,ix-1,click = false);
				}
			
			if  (ix != largo - 1)
				{
					ver_numero(iy+1,ix+1,click = false);
				}
			
			ver_numero(iy+1,ix,click = false);
			
		}
	
	
	
	//
	
	
	if (visto[iy][ix] != true)
		{
			
			if (iy != 0)
			{
				if (ix != 0)
					
					{

						if (casilla[iy-1][ix-1] == 0)
							{
								ver_cero(iy-1,ix-1,visto[iy][ix] = true);
							}
					}




				if (casilla[iy-1][ix] == 0)
							{
								ver_cero(iy-1,ix,visto[iy][ix] = true);
							}

				if (ix != largo - 1)
					{
						if (casilla[iy-1][ix+1] == 0)
							{
								ver_cero(iy-1,ix+1,visto[iy][ix] = true);
							}

					}

			}

		if (ix != 0)
			{
				if (casilla[iy][ix-1] == 0)
							{
								ver_cero(iy,ix-1,visto[iy][ix] = true);
							}

			}


		if (ix != largo - 1)
			{
				if (casilla[iy][ix+1] == 0)
							{
								ver_cero(iy,ix+1,visto[iy][ix] = true);
							}

			}

		if (iy != largo - 1)
			{
				if (ix != 0)
					{
						if (casilla[iy+1][ix-1] == 0)
							{
								ver_cero(iy+1,ix-1,visto[iy][ix] = true);
							}

					}

				if  (ix != largo - 1)
					{
						if (casilla[iy+1][ix+1] == 0)
							{
								ver_cero(iy+1,ix+1,visto[iy][ix] = true);
							}

					}

				if (casilla[iy+1][ix] == 0)
							{
								ver_cero(iy+1,ix,visto[iy][ix] = true);
							}


			}
			
		}
	
	
	
		
	//
	
	cero_fin = true;

	
}

function comprobador(iy,ix)
{
	
}

/*
function ver_cero(iy,ix)
{
	
	contador_bombas_0 = 0;
	if (iy != 0)
				{
					if (bombas[iy-1][ix-1] <= prob_bomb )
						{
							contador_bombas_0++;
						}
					
						
					if (bombas[iy-1][ix] <= prob_bomb )
						{
							contador_bombas_0++;
						}
					
						
					if (bombas[iy-1][ix+1] <= prob_bomb )
						{
							contador_bombas_0++;
						}
					
				}
			
					if (bombas[iy][ix-1] <= prob_bomb )
						{
							contador_bombas_0++;
						}
					
				
					if (bombas[iy][ix+1] <= prob_bomb )
						{
							contador_bombas_0++;
						}
					
			if ((iy+1)!=largo)
				{
					if (bombas[iy+1][ix-1] <= prob_bomb )
						{
							contador_bombas_0++;
						}
					
					if (bombas[iy+1][ix] <= prob_bomb )
						{
							contador_bombas_0++;
						}
					
					if (bombas[iy+1][ix+1] <= prob_bomb )
						{
							contador_bombas_0++;
						}
				}
	if (contador_bombas_0 == 0)
		{
			document.getElementById("cubo"+iy+"_"+ix).innerHTML = contador_bombas_0;
			document.getElementById("cubo"+iy+"_"+ix).style.backgroundColor = "cadetblue";
		}
		
	}
*/

	



function agregar ()
{
	fila = document.getElementById("fila1");
	cuadro = "<div class='cubo' onclick=ver(0,5) id='cubo00'>  </div>";
	fila.innerHTML += cuadro;
}

function ver_todos ()
{
	
	for (iy = 0; iy < largo; iy++)
		{
			for (ix = 0; ix < largo; ix++)
				{
					
				
					//prueba1.value += bombas [iy][ix].toString() + " [" + iy + "," + ix + "] / ";
					evitar_loop = true;
					ver_bomba(iy,ix);
				}
		}
	
}

function bandera (iy,ix)
{
	if (band [iy][ix] == "revelado")
		{
			return false;
		}
	
	if (band [iy][ix] == "bandera")
		{
			banderas_correctas++;
			document.getElementById("cubo"+iy+"_"+ix).style.background= "grey";
			band [iy][ix] = "sin_revelar";
			
			
		}
	else
	{
		
		
		band [iy][ix] = "bandera";
		boton = window.event;
		
	if (boton.button == 2)
		{
			
			document.getElementById("cubo"+iy+"_"+ix).style.background = "url('Minesweeper_flag.svg.png')";
			
			document.getElementById("cubo"+iy+"_"+ix).style.backgroundSize = "25px";
		}
	}
	
	
	
	
}


function ver_victoria ()
{
	vic_cont = 0;
	for (iy=0; iy<largo;iy++)
		{
			for (ix=0;ix<largo;ix++)
				{
					if (band[iy][ix] == "revelado")
						{
							vic_cont++;
							
						}
					else
					{
						if (band[iy][ix]== "bandera" && bombas[iy][ix] <= prob_bomb )
						{
							vic_cont++;
							
						}
						
					}
					
				}
		}
	document.getElementById("div_ver_vic").value = vic_cont;
	if (vic_cont == (largo*largo) && perder != true)
		{
			puntuacion = largo * largo * dif_glob;
			alert("Ganaste!, Puntuacion: "+puntuacion);
		}
	else{
		alert("Todavia no ganaste")
	}
}

function dificultad (dif)
{
	dif_glob = dif;
	
	switch(dif) {
    case 1:
        prob_bomb = 1;
        break;
    case 2:
        prob_bomb = 3;
        break;
    default:
        prob_bomb = 5;
} 
}
