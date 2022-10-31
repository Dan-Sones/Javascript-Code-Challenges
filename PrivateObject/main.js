const username = Symbol("username");
const password = Symbol("password");


const user = {
    [username]: 'Daniel Sones',
    [password]: 'SecurePassword123',
    age:18
}

console.log(user.username);
console.log(user.password);
console.log(user.age);