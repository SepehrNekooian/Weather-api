


// console.log('antor')
// console.log('siam')
// try{
// console.lo('bsl;da')
// }
// catch(err){
//     console.log(err)
// }

// setTimeout(()=>{
// console.log('jbslifsgdgf')
// },1000)


//  console.log('gsrgsdg')
//  console.log('hgfctg')



// dom

// let button = document.querySelector('button')
// console.log(1)
// console.log(2)
// console.log(3)
// button.addEventListener('click' , ()=>{
//     console.log(4)
// })
// console.log(5)
// console.log(6)



// dom

// let main =document.querySelector('.main')
// fetch('https://dummyjson.com/users')

// .then(res =>res.json())
// .then((data)=>{
//     // console.log(data.users[1].ein)

//     data.users.map((item)=>{
//         console.log(item)

//         // create tag
//         let img = document.createElement('img')
//         let h1 =document.createElement('h1')

//         // append chlid
// main.appendChild(img)
// main.appendChild(h1)

// // value assign

// img.setAttribute('src',  item.image)
// img.setAttribute('alt', 'images' )

// h1.innerHTML =`name : ${item.age}`
//     })

// })




// let myArray = [[1,2],[3,4],[5,6]]
// console.log(myArray[0][1])




        // dom
        
let input = document.querySelector('.search_input')
        let h2 = document.querySelector('h2')
        let button = document.querySelector('button')
        let main =document.querySelector('.main')
        let result = document.querySelector('.result')
        let h1 =document.querySelector('h1')
        let span =document.querySelector('.span')
        let div_span =document.querySelector('.div_span')
        let pressure =document.querySelector('.pressure')


let handelbutton = ()=>{
    if(!input.value){
        alert('please select a name')
        
    }
else{

    
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${input.value}&limit=1&appid=f584576413af72532787b63791db9fba`)
.then(res =>res.json())
.then((data)=>{

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=f584576413af72532787b63791db9fba`)
.then(res =>res.json())
.then((data)=>{
    console.log(data.main)
    result.innerHTML = `${Math.floor(data.main.temp -273.15)} <sup>o</sup>`
    div_span.innerHTML = `${Math.floor(data.main.feels_like)} <sup>o</sup>`
    span.innerHTML = `${data.main.humidity}%`
    pressure.innerHTML = `${data.main.pressure}hPa`
    h1.innerHTML = input.value


                let date = new Date();
                let time = date.toLocaleTimeString();
                let dateElement = document.createElement('p');
                dateElement.textContent = `time: ${time}`;
                main.appendChild(dateElement);


                let tempCelsius = data.main.temp - 273.15;
let humidity = data.main.humidity;
let dewPoint = tempCelsius - ((100 - humidity) / 5);


let dewElement = document.createElement('p');
dewElement.textContent = `Dew Point: ${dewPoint.toFixed(1)}°C`;
main.appendChild(dewElement);



})
})
}
}






















