let agendamentos: object[] = [];
let servicos: object[] = [];
let duvidas: object[] = [];
let sugestoes: object[] = [];
let reclamacoes: object[] = [];
let compras: object[] = [];

export function guardarFormularios(formulario: object, atendimento: FormDataEntryValue){
    if(atendimento == 'Agendamento'){
        agendamentos.push(formulario);
    }
    if(atendimento == 'Serviço'){
        servicos.push(formulario);
    }
    if(atendimento == 'Dúvidas'){
        duvidas.push(formulario);
    }
    if(atendimento == 'Sugestões'){
        sugestoes.push(formulario);
    }
    if(atendimento == 'Reclamações'){
        reclamacoes.push(formulario);
    }
    if(atendimento == 'Compras'){
        compras.push(formulario);
    }
}
