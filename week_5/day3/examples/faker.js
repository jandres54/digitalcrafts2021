const fetchImages = async() => {
    const images = await fetch("https://fakerapi.it/api/v1/images?_quantity=1&_type=kittens&_height=300");

    const convertedJson = await images.json();

    console.log(convertedJson)


}

let button2 = document.querySelector("#images")
button2.addEventListener("click", ()=> {
    fetchImages();
})



const fetchPeople = async() => {
    const people = await fetch("https://fakerapi.it/api/v1/persons?_quantity=1&_gender=male&_birthday_start=2005-01-01");

    const convertedJson = await people.json();

    console.log(convertedJson)


}



let button1 = document.querySelector("#people")
button1.addEventListener("click", ()=> {
    fetchPeople();
})




