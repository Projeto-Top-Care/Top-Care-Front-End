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

export function login(email: string, senha: string) {
    let login = false;
    usuarios.forEach((usuario) =>{
        if(usuario.email == email) {
            if(usuario.senha == senha) {
                login = true;
            }
        }
    })
    return login;
}