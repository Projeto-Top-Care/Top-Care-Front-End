import usuarios from '@/banco/usuarios.json'
import { Usuario } from '@/types/usuarios';
import { axiosAPI } from '../api';

export function buscarUsuarioEmail(email:string){
    let usuarioEncontrado;
    usuarios.forEach((usuario)=>{
        if(usuario.email == email){
            usuarioEncontrado = usuario;
        }
    })
    return usuarioEncontrado
}

export async function buscarEndereco(idEndereco: number, idUsuario: number){
    const usuario: Usuario = await buscarUsuario(idUsuario)!
    let enderecoEncontrado;
    usuario.enderecos.forEach((endereco)=>{
        if(endereco.id == idEndereco){
            enderecoEncontrado = endereco 
        }
    })
    return enderecoEncontrado;
}

export async function buscarPedido(idPedido: number, idUsuario: number){
    const usuario: Usuario = await buscarUsuario(idUsuario)!
    let pedidoEncontrado;
    usuario.pedidos.forEach((pedido)=>{
        if(pedido.id == idPedido){
            pedidoEncontrado = pedido 
        }
    })
    return pedidoEncontrado;
}

export async function buscarUsuario(id: number) {
    const response = await axiosAPI.get(`/usuario/buscar/${id}`).then(resp => resp);
    return response.data
}

export async function cadastroUsuario(payload: any){
    const response = await axiosAPI.post("/usuario/cliente/cadastro", payload).then(resp => resp);
    return response.data
}

export async function login(payload:any) {
    const response = await axiosAPI.post("/usuario/login", payload).then(resp => resp);
    return response.data
}

export async function editarUsuario(payload:any, id:number) {
    const response = await axiosAPI.put("/usuario/cliente/editar/"+id, payload).then(resp => resp);
    return response.data
}