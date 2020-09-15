// Makes HTTP request for JSON file
// Then extracts JSON data from HTTP response
// Then calls utility method 1, passing it the data.
fetch('/data/water.json').then((response)=>{
return response.json()
}).then((sources)=>{
  addSourcesToPage(sources)
})


//Utility method 1:
//Iterates over water sources array, passes each item to 
// utility method 2 which creates a li element for each item in 
//the list and appends to water.html

function addSourcesToPage(sources){
  const list = document.getElementById("WaterSources");

  for(let i=0; i<sources.length; i++){
    let li = createListItem(sources[i])
      list.appendChild(li)}
}

// Utility method 2.
// Takes an individual water source objects as an argument
// Returns an `li` DOM node with the data inside.

function createListItem(data){
  const listItem= document.createElement("li")
  listItem.innerHTML= data.name.toUpperCase()

  const content= document.createElement("p")
  content.innerHTML= "Discharge (cubic feet per second): " + data.discharge

  listItem.appendChild(content)
  return listItem

}