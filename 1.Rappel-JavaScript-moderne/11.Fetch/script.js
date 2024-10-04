fetch("https://jsonplaceholder.typicode.com/users")
.then(data => {
    console.log(data)
    if(!data.ok) throw new Error("Error")
    return data.json()
})
.then(data => {
    console.log(data)
})
.catch(e => {
    console.log(e)
})