import CheckZipCode from "./server/server.checkZipCode.js";
const cep = document.getElementById("cep");
const endress = document.getElementById("endereco");
const bairro = document.getElementById("bairro");
const city = document.getElementById("cidade");
const uf = document.getElementById("estado");

cep.addEventListener("focusout", async (e)=>{
    e.preventDefault();
    const checkCode = new CheckZipCode();
    const code = e.currentTarget.value

    const dataInfoCheck = await checkCode.GETCheckCode(String(code));

    if(dataInfoCheck === "Not found!") {
        return  checkCode.ErrorGetCheckCode();
    }

    cep.value = dataInfoCheck.cep;
    endress.value = dataInfoCheck.logradouro;
    bairro.value = dataInfoCheck.bairro;
    city.value = dataInfoCheck.localidade;
    uf.value = dataInfoCheck.uf;
})

