// Create a counter function which has increment and getValue functionality

const privateSecret = () => {
    const secret = 'secret'

    return () => secret
}

const getSecret = privateSecret()

console.log(getSecret())

// const privateCounter = () => {
//     let count = 0

//     return {
//         increment(val = 1) {
//             count += val
//         },
//         getValue() {
//             return count
//         },
//     }
// }

// const counter = privateCounter()

// console.log(counter.getValue())
// console.log(counter.increment())
// console.log(counter.getValue())
