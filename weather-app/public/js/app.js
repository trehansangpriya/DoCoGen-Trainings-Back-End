const form = document.querySelector('.search')
const search = document.querySelector('input')
const msg3 = document.querySelector('.location')
const msg1 = document.querySelector('.temp')
const msg2 = document.querySelector('.desc')
const icon = document.querySelector('.icon')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value
    console.log(location)
    msg1.innerHTML = 'Loading...'
    msg2.innerHTML = ''
    msg3.innerHTML = ''
    
    // Fecth
    fetch('/weather?location='+ location).then(
        (response)=>{
            response.json().then((data)=>{
                if (data.error) {
                    console.log(data.error)
                    msg1.innerHTML = data.error
                } else {
                    msg3.innerHTML = data.location
                    msg1.innerHTML = data.temp + '° Celcius'
                    msg2.innerHTML = data.desc
                    icon.innerHTML = '<img src="' + data.icon + '" alt="Weather Icon">'
                }
        })
    }
    )
})