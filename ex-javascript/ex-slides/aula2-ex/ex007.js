let users = [
    {id: 'jhon', name:'Jhon Smith', age: 20},
    {id: 'ann', name:'Ann Smith', age: 24},
    {id: 'pete', name:'Pete Peterson', age: 31},
]

function groupId(arrUsers) {
    const usersObj = new Object;
    users.forEach((user) => {
        usersObj[user['id']] = user;
    });
    console.log(usersObj);
}

groupId(users);