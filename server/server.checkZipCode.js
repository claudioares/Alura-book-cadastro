export default class CheckZipCode {

    async GETCheckCode (code) {
        try {
            const response = (await fetch(`https://viacep.com.br/ws/${code}/json/`));
            const responseJson = await response.json();
            
            if(responseJson.erro){return 'Not found!'}
    
            return responseJson;
        } catch (error) {
            return error
        }
    };

    ErrorGetCheckCode () {
        const modalError = document.getElementById("error__modal__info");
        modalError.classList.add('error__modal__info');
        setTimeout(()=>{
            modalError.classList.remove('error__modal__info');
        }, 3000)
    }
}