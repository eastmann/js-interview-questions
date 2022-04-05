// 1. Write code to get array of names from given array of users
// 2. Get back only active users
// 3. Sort users by age descending
const users = [
    {
        id: 1,
        name: 'Jack',
        isActive: true,
        age: 20,
    },
    {
        id: 2,
        name: 'John',
        isActive: true,
        age: 18,
    },
    {
        id: 3,
        name: 'Mike',
        isActive: false,
        age: 30,
    },
]

const names = users
    .sort((user1, user2) => (user1.age < user2.age ? 1 : -1))
    .filter(user => user.isActive)
    .map(user => user.name)

// const names = []
// users.forEach((user) => {
//     names.push(user.name)
// })

// users.sort((user1, user2) => (user1.age > user2.age ? -1 : 1))

// const names = []
// for (let i = 0; i < users.length; i++) {
//     if (users[i].isActive) {
//         names.push(users[i].name)
//     }
// }

console.log('names', names)
