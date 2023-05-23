function greet(name) {
    return new Promise((resolve) => {
        const greeting = `Hello, ${name}!`
        resolve(greeting)
    })
}

greet("santu").then((message) => console.log(message))