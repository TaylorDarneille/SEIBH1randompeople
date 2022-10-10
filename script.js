let numPeople
let form = document.getElementById("form")

const addPerson = (person) => {
    let name = person.name.first + " " + person.name.last
    // create new li element
    let newListItem = document.createElement("li")
    // add the name to the li
    newListItem.innerText = name
    // append the li to the ul using the id (peopleList)
    peopleList.appendChild(newListItem)
}

const fetchPeople = () => {
    const apiURL = `https://randomuser.me/api/?results=${numPeople}`
    fetch(apiURL)
    .then(fetchedPeopleObj=>{
        // Fetch will package the response into an object and pass
        // it into this callback function as the argument
        // use the .json() method to return the data in json format
        return fetchedPeopleObj.json()
    })
    .then(jsonPeople=>{
        // whatever we return in the first .then gets
        // passed into THIS callback as the argument
        console.log(jsonPeople.results)
        jsonPeople.results.forEach(addPerson)
    })
    .catch(err=>{
        console.log(err)
    })
}

const clearList = () => {
    // while(peopleList.firstChild){
    //     peopleList.removeChild(peopleList.firstChild)
    // }
    peopleList.innerHTML = ""
}

form.addEventListener("submit", (e)=>{
    // stop the default refresh behavior
    e.preventDefault()
    clearList()
    numPeople=document.getElementById("numPeople").value
    fetchPeople()
})








