const getWeatherDataWithAsyncAwait = async ()=> {
    let zip = document.querySelector(".zip").value
// this is how you would do it if you use async await
   const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${zip}&appid=a659a0293f728d1e1cbe4ac7490ffc17&units=imperial`)
    const formattedJson = await data.json()
    console.log(formattedJson)

    let temp = document.createElement("p")
        temp.innerHTML = formattedJson.main.temp 
        
    let app = document.querySelector("#app")
    app.append(temp)

}

let btn = document.querySelector(".btn")
btn.addEventListener("click", getWeatherDataWithAsyncAwait)



