import { URL_API} from "./base";
export function consultaResumo(callback){
    return fetch(`${URL_API}/resumo`)
    .then(resultado => resultado.json().then(callback));
}