const url = 'https://api.github.com/users/lealdevhub'

/*function getUsers() {
  fetch(url)
    .then(response => response.json())
    .then(data => (renderApiResult.textContent = JSON.stringify(data)))
    .catch(error => console.error(error))
}*/

function getUser() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      user.textContent = data.name
      userName.innerHTML = `@${data.login}`
      userCity.href = data.html_url
      userCity.innerHTML = data.html_url
      userAvatar.src = data.avatar_url
    })
    .catch(error => console.error(error))
}

/*getUsers()*/
getUser()
