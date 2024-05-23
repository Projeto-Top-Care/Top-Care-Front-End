import usuarios from '@/banco/usuarios.json'
import { Usuario } from '@/types/usuarios';

export function buscarUsuario(id: number) {
    let usuarioEncontrado;

    usuarios.forEach((usuario)=>{
        if(usuario.id == id){
            usuarioEncontrado = usuario;
        }
    })
    return usuarioEncontrado
}

export function login(email: string, senha: string) {
    let id;
    usuarios.forEach((usuario) =>{
        if(usuario.email == email) {
            if(usuario.senha == senha) {
                id = usuario.id
            }
        }
    })
    return id
}

export function buscarUsuarioEmail(email:string){
    let usuarioEncontrado;
    usuarios.forEach((usuario)=>{
        if(usuario.email == email){
            usuarioEncontrado = usuario;
        }
    })
    return usuarioEncontrado
}

export function buscarEndereco(idEndereco: number, idUsuario: number){
    const usuario: Usuario = buscarUsuario(idUsuario)!
    let enderecoEncontrado;
    usuario.enderecos.forEach((endereco)=>{
        if(endereco.id == idEndereco){
            enderecoEncontrado = endereco 
        }
    })
    return enderecoEncontrado;
}

export function buscarPedido(idPedido: number, idUsuario: number){
    const usuario: Usuario = buscarUsuario(idUsuario)!
    let pedidoEncontrado;
    usuario.pedidos.forEach((pedido)=>{
        if(pedido.id == idPedido){
            pedidoEncontrado = pedido 
        }
    })
    return pedidoEncontrado;
}