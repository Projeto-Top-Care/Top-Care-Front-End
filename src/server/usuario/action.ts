import usuarios from '@/banco/usuarios.json'

export function buscarUsuario(id: number) {
    let usuarioEncontrado;
    usuarios.forEach((usuario)=>{
        if(usuario.id == id){
            usuarioEncontrado = usuario;
        }
    })
    return usuarioEncontrado
}