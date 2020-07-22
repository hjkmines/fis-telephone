const $ul = document.querySelector("ul")

fetch("https://telephone-assessment.herokuapp.com/api/v1/contacts")
  .then(response => response.json())
  .then(parsedResponse => {
    const characters = parsedResponse.data 

    characters.map(character => {
      const $li = document.createElement("li")
      $li.innerHTML = `<img src=${character.imageURL}>
      <span>${character.name} Phone Number: ${character.phone}</span>
      <p>${character.message}</p>
      <a href="../contact.html?name=${character.name}">Leave ${character.name} a message</a>
      `
      return $li 
    }).forEach($li => {
      $ul.append($li)
    })
  }
    

    
    
    
    )


