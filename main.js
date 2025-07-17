const container = document.getElementById('cards-container')

const request = new XMLHttpRequest()
request.open('GET', 'persons.json')
request.setRequestHeader('Content-Type', 'application/json')
request.send()

request.addEventListener('load', () => {
  const data = JSON.parse(request.response)

  data.forEach(person => {
    const card = document.createElement('div')
    card.classList.add('card')

    card.innerHTML = `
      <img src="${person.person_photo}" alt="${person.name}">
      <h2>${person.name}</h2>
      <p><strong>Age:</strong> ${person.age}</p>
      <p><strong>House:</strong> ${person.house}</p>
    `

    container.appendChild(card)
  })
})

const jsonRequest = new XMLHttpRequest()
jsonRequest.open('GET', 'data.json')
jsonRequest.setRequestHeader('Content-Type', 'application/json')
jsonRequest.send()

jsonRequest.addEventListener('load', () => {
  const response = JSON.parse(jsonRequest.response)
  console.log('JSON data from file:', response)
})
