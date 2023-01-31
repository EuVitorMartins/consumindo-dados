async function buscarEndereco(cep) {
    let mensagemErro = document.querySelector("#erro");
    mensagemErro.innerHTML = "";
    try{
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro){
            throw Error('CEP não encontrado!');
        }
        let cidade = document.querySelector("#cidade");
        let logradouro = document.querySelector("#endereco");
        let estado = document.querySelector("#estado");

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch (erro) {
        console.log(erro);
        mensagemErro.innerHTML = `<p>CEP Não encontrado</p>`;
    } 
};
   
const cep = document.querySelector("#cep");
cep.addEventListener("focusout",() => buscarEndereco(cep.value));