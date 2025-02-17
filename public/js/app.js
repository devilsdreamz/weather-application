console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#one')
const messageTwo = document.querySelector('#two')

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    fetch('/weather?search='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
           messageOne.textContent = data.error
           messageTwo.textContent = ''
        } else{
           messageOne.textContent = data.location
           messageTwo.textContent = data.forecast
        }
    })
})
    
})