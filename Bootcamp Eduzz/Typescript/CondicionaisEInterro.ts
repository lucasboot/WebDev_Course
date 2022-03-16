interface IUsuario{
    id: string;
    email: string;
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
}
/*
interface IAdmin extends IUsuario {
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: IUsuario | IAdmin ){
    if('cargo' in usuario){
        //area de adm
    } 
    //área do usuário
}
*/
function redirecione2(usuario: IUsuario){
    if(usuario.cargo){
        //area especifica redirecionar(usuario.cargo)
    } 
    //redirecionar para área do usuário
}