console.log('The js file is up and running!');

//bringing data to client side javascript from browser through FETCH API

// fetch('http://localhost:3000/weather?address=lahore').then((response) => {
//     response.json().then((data) => {
//         if(data.error) {
//             console.log(data.error);
//         }
//         else {
//             console.log(data.location);
//             console.log(data.forecast);
//         }
//     })
// })


const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const msg1 = document.querySelector('#msg-1');
const msg2 = document.querySelector('#msg-2');

weatherForm.addEventListener('submit' , (e) => {
    e.preventDefault();
    const address = search.value;

    msg1.textContent = 'Loading Forecast...';
    msg2.textContent = '';

    
    fetch('http://localhost:3000/weather?address=' + address).then((response) => {
    response.json().then((data) => {
        if(data.error) {
            console.log(data.error);
            msg1.textContent = data.error;
            return msg2.textContent = '';
        }
            else{
            console.log(data.location);
            console.log(data.forecast);
            msg1.textContent = data.location;
            msg2.textContent = data.forecast;
            }
        })
    })
})