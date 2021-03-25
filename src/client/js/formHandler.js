

export function handleSubmit(event) {
    event.preventDefault()

    const endPoint = 'http://api.openweathermap.org/data/2.5/weather?zip=';
    const unit = 'units=metric';
    const APIkey = '90abf74758a800d3b4d2dfcaa7ca08bc';

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch(`${endPoint}10001&${unit}&appid=${APIkey}`)
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.main.temp
    })
}
