const getWeatherDataWithAsyncAwait = async ()=> {
    // this is how you would do it if you use async await
   const data = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Houston&appid=a659a0293f728d1e1cbe4ac7490ffc17&units=imperial')
    // .then(response => response.json())
    // .then(data => console.log(data))
    // convert to json
    const formattedJson = await data.json()
    console.log(formattedJson)
    // let name = document.createElement("h1")
    // name.innerHTML = formattedJson.name
    // let img = document.createElement("img")
    // let root = document.querySelector(".root")
    // img.src = formattedJson.sprites.front_default
    // root.append(img, name)
    let temp = document.createElement("p")
        temp.innerHTML = formattedJson.main.temp 
        
    let app = document.querySelector("#app")
    app.append(temp)

}

getWeatherDataWithAsyncAwait()