let url = 'https://randomuser.me/api/?results=8'

fetch(url)
 .then(response => response.json())
 .then(json => {
  let data = json.results
  DisplayBook(data)
 });


 let DisplayBook = (users) => {
  users.forEach(u => {
   let div = document.createElement('div')
   let img = document.createElement('img')
   let name = document.createElement('div')
   let info = document.createElement('div')
   let dob = document.createElement('p')
   let address = document.createElement('p')
   let button = document.createElement('button')
   info.appendChild(dob)
   info.appendChild(address)
   div.appendChild(img)
   div.appendChild(name) 
   div.appendChild(button)
   div.append(info)
   document.getElementById('shell').appendChild(div)
   div.classList.add('users') 
   name.classList.add('name')
   info.id = 'id' + users.indexOf(u)
   info.classList.add('info')
   button.classList.add('btn')
   button.innerHTML = 'Click To Toggle More'
   // button.id = 'btnId' + users.indexOf(u)
    button.addEventListener("click", function() {
     let infoElement = document.getElementById('id'+users.indexOf(u))
     if (infoElement.style.visibility === 'hidden') {
      infoElement.style.visibility = 'visible'
     }
     else {infoElement.style.visibility = 'hidden'}
   });
   name.innerHTML = u.name.first + ' ' + u.name.last
   img.src = u.picture.medium
   dob.innerHTML = 'Date of Birth: ' + u.dob.date.slice(0,10) + '  Age: ' + u.dob.age
   address.innerHTML =  'Address: ' + u.location.street.number + ' ' + u.location.street.name + ', ' + u.location.city
   info.style.visibility = 'hidden'
  });
 }


 