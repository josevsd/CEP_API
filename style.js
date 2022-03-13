// Chamando as IDs
const cep = document.querySelector("#cep");
const RUA = document.getElementById("logradouro");
const BAIRRO = document.getElementById("bairro");
const CIDADE = document.getElementById("localidade")
const ESTADO = document.getElementById("uf")
const IBGE = document.getElementById("ibge");

RUA.disabled = true;
BAIRRO.disabled= true;
CIDADE.disabled= true;
ESTADO.disabled= true;
IBGE.disabled= true;

// Buscando o resultado 
const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
        }
    }
}

// Colocando o resultado 
function buscar(){
    var cep = document.getElementById('cep')
    let search = cep.value.replace("-","")
    const options = {
        method: 'GET',
        node: 'cors',
        cache: 'default'
    }
    
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response =>{response.json()
        .then(data => showData(data))
    })
    .catch(e => limpa_formulario_cep('Deu Erro'+ e,message))
}
