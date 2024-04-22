let formulariosPreenchidos: object[] = [];

export function guardarFormularios(formulario: Object){
    formulariosPreenchidos.push(formulario);
    console.log(formulariosPreenchidos)
}