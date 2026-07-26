export const orderRequest = async() => {
    await fetch('https://dummyjson.com/test').then(res => res.json()).then(console.log)
}

orderRequest()