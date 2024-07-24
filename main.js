const people = document.querySelector('#people')

const asyncData = () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'persons.json')
    request.setRequestHeader('Content-type', 'application/json')
    request.send()

    request.onload = () => {
        const persons = JSON.parse(request.response)
        console.log( persons)
        persons.forEach((item) => {
            const card = document.createElement('div')
            card.className = 'card'
            card.innerHTML = `
                <span>${item.name}</span>
                <h5>${item.age}</h5>
                <img class="imgages" src='${item.photo}' alt="">
            `
            people.append(card)
        })
    }
}
asyncData()