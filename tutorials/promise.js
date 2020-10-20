const promise = new Promise((resolve, reject) => {
  resolve('Success!')
  // reject('Fail on error')
})

promise.then((successMessage) => {
  console.log('Yay! ' + successMessage)
}).catch((error) => {
  // throw new Error("Whoops!");
  console.log(error)
})
