const url = "http://localhost:5500/api"

function getUsers() {
  axios.get(url)
  .then(response => {
    apiResult.textContent = JSON.stringify(response.data)
  })
  .catch(error => console.error(error))
}

function addNewUser(newUser) { 
  axios.post(url, newUser)
  .then(response =>  {
    console.log(response)
  })
  .catch(error => console.error(error))
}

function getUser(id) {
  axios.get(`${url}/${id}`)
  .then(response => {
    const data = response.data
    userName.textContent = data.name
    userCity.textContent = data.city
    userID.textContent= data.id
    userAvatar.src = data.avatar
  })
    .catch(error => console.error(error))
}

function updateUser(id, updatedUser) {
  axios.put(`${url}/${id}`, updatedUser)
  .then( response => {
    console.log(response)
  })
  .catch(error => console.error(error))
}

function deleteUser(id) { 
  axios.delete(`${url}/${id}`)
  .then(response => {
    console.response
  })
  .catch(error => console.error(error))
}

const updatedUser = {
  name: "Arthur Lacerda",
  avatar: "https://picsum.photos/200/300",
  city: "Rio de Janeiro"
}

const newUser = {
  name: "Silvio Dias",
  avatar: "https://picsum.photos/200/300",
  city: "Belo Horizonte"
}

//deleteUser(3)

getUsers()
getUser(1)
//addNewUser(newUser)
//updateUser(3, updatedUser)

