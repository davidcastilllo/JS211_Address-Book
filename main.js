let url = 'https://randomuser.me/api/?results=8'

fetch(url)
 .then(response => response.json())
 .then(json => {
  let data = json.results
  DisplayBook(data)
 });


 let DisplayBook = (users) => {
  console.log(users)
  users.forEach(u => {
   console.log(u.gender)
   let div = document.createElement('div')
   let img = document.createElement('img')
   img.src = u.picture.medium
   div.appendChild(img)
   document.body.appendChild(div)
   div.class = ''
  });
 }

 