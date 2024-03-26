let nomeInserido = "";
let idadeInserida = "";
let langInserida = "";
const formulario = document.getElementById('formulario');
const inputNome = document.getElementById('nome');
const inputIdade = document.getElementById('idade');
const inputLang = document.getElementById('lang');

formulario.addEventListener('submit', function() {
})

const respRadio = document.querySelectorAll('input[name="inlineRadioOptions"]');

function getResults (event){
  event.preventDefault();
  document.getElementById('resposta').style.display = "flex";
  nomeInserido = document.getElementById('nome').value;
  idadeInserida = document.getElementById('idade').value;
  langInserida = document.getElementById('lang').value;

  document.getElementById('nomeResp').textContent = nomeInserido;
  document.getElementById('idadeResp').textContent = idadeInserida;
  document.getElementById('langResp').textContent = langInserida;
  document.getElementById('langSatisf').textContent = langInserida;
}


if (document.querySelector('input[name="inlineRadioOptions"]')) {
  document.querySelectorAll('input[name="inlineRadioOptions"]').forEach((elem) => {
    elem.addEventListener("change", function(event) {
      var item = event.target.value;
      if(item === 'option1'){
      	console.log('opcao 1')
		document.getElementById("respDivRadio").textContent = "Muito booom! Continue estudando e você terá muito sucesso"
      } else if (item === 'option2') {
      	console.log('opçao 2')
		document.getElementById('respDivRadio').textContent = "Ahh, que pena... Já tentou aprender outras linguagens?"
      }
      
    });
  });
}


if (document.querySelector('input[name="areasSeguir"]')) {
	document.querySelectorAll('input[name="areasSeguir"]').forEach((botao) => {
		botao.addEventListener("change", function(event) {
			var itemSeguir = event.target.value;
			if (itemSeguir === 'areasSeguir1'){
				document.getElementById('dependeResposta1').style.display = "block";
				document.getElementById('dependeResposta2').style.display = "none";
			} else if (itemSeguir === 'areasSeguir2') {
				document.getElementById('dependeResposta2').style.display = "block";
				document.getElementById('dependeResposta1').style.display = "none";
			}
		})
	})
}

function limparRadios(name) {
  const radios = document.getElementsByName(name);
  for(var i=0;i<radios.length;i++)
    radios[i].checked = false;
}

function limparDiv(idDiv){
	document.getElementById(idDiv).textContent=""
}

function limpaForm (){
	document.getElementById('resposta').style.display = "none";
	limparRadios('inlineRadioOptions');
	limparDiv('respDivRadio');
}


function limpaFormSecond (){
	divDependeResposta = document.getElementsByClassName('dependResp')
	for (var i=0; i<divDependeResposta.length; i++){
		divDependeResposta[i].style.display = "none";
	}
	limparRadios('inlineRadioOptions');
	limparDiv('respDivRadio');
}