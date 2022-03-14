const user = {
    name: 'Luc',
    lastName: 'Alves'
};
function get(user){
    return{
    ...user,
    fullName: '${user.name} ${user.lastName}'
    }
}

const userWith = get(user);
console.log(userWith, user);