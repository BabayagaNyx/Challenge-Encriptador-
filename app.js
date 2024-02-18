function encriptacionAlura(letra) {
  const reemplazos = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
  };
  return reemplazos[letra] || letra;
}

function desencriptacionAlura(match) {
  const sustituciones = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
  };
  return sustituciones[match] || match;
}

function encriptarTexto(texto) {
  const textoParaCambiar = document.getElementById('input1').value;
  var regex = /[A-ZáéíóúÁÉÍÓÚñÑ!@#$%^&*()_+=[\]{};':"\\|,.<>/?~`]/g;
  if (regex.test(textoParaCambiar)) {
      alert('El texto solo tiene que estar en letras minúsculas y no deben ser utilizados letras con acentos ni caracteres especiales.');
      document.getElementById('input1').value = "";
  } else {
    let textoEncriptado = textoParaCambiar.replace(/a|e|i|o|u/g, encriptacionAlura); 
    document.getElementById('input2').value = textoEncriptado; 
  }
}

function desencriptarTexto() {
  const textoOriginal = document.getElementById('input1').value; 
  var regex2 = /[A-ZáéíóúÁÉÍÓÚñÑ!@#$%^&*()_+=[\]{};':"\\|,.<>/?~`]/g;
  if (regex2.test(textoOriginal)) {
    alert('El texto solo tiene que estar en letras minúsculas y no deben ser utilizados letras con acentos ni caracteres especiales.');
} else {
  let textoTransformado = textoOriginal.replace(/ai|enter|imes|ober|ufat/g, desencriptacionAlura);
  document.getElementById('input2').value = textoTransformado; 
}
}

function vaciar() {
  document.getElementById('input1').value = "";
  document.getElementById('input2').value = "";
}

function copiar() {
  var textoInput = document.getElementById('input2');
  textoInput.select();
  var copiado = document.execCommand('copy');
}

document.addEventListener("DOMContentLoaded", function() {
  var input = document.getElementById("input1");
  var audio = document.getElementById("miAudio");

  input.addEventListener("input", function() {
      audio.play();
      audio.volume = 0.5;      
  });
});

// *********** INICIO EFECTO MATRIX *********** //
// Obtener el nodo de lienzo y el contexto de dibujo
const canvas = document.getElementById('canvasMatrix');
const ctx = canvas.getContext('2d');

// Establecer la anchura y la altura del lienzo
const w = canvas.width = document.body.offsetWidth;
const h = canvas.height = document.body.offsetHeight;

// Dibuja un rectángulo negro de ancho y alto igual que el del lienzo
ctx.fillStyle = '#000';
ctx.fillRect(0, 0, w, h);

const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);

function matrix () {
	// Dibuja un rectángulo negro semitransparente encima del dibujo anterior
	ctx.fillStyle = '#0001';
	ctx.fillRect(0, 0, w, h);

	// Establezca la color en verde y la fuente en monoespaciado de 15 puntos en el contexto del dibujo
	ctx.fillStyle = '#0f0'; //#0f0
	ctx.font = '12.5pt monospace';

	// Para cada columna, coloque un carácter aleatorio al final
	ypos.forEach((y, ind) => {
		// Generar un carácter aleatorio
		const text = String.fromCharCode(Math.random() * 122);

		// La coordenada x de la columna, la coordenada y ya está dada
		const x = ind * 20;
		// Renderizar el carácter en (x, y)
		ctx.fillText(text, x, y);

		// Restablece aleatoriamente el final de la columna si tiene al menos 100 px de altura
		if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
		// de lo contrario, simplemente mueva la coordenada y de la columna 20px hacia abajo,
		else ypos[ind] = y + 20;
	});
}

// renderizar la animación a 20 FPS.
setInterval(matrix, 80);

/* Fuente Efecto Matrix: https://www.linkedin.com/pulse/como-hacer-el-efecto-matrix-en-un-sitio-web-bayron-jonathan-vazquez/?originalSubdomain=es */
// *********** FIN EFECTO MATRIX *********** //