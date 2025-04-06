const arr = [
    {
      username: 'Salmon',
      age: 65,
      married: false,
      istatus: 'Stranger',
      image: 'https://images.unsplash.com/photo-1677760904764-801d55083330?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3'
    },
    {
      username: 'Shahrukh',
      age: 60,
      married: true,
      istatus: 'Stranger',
      image: 'https://images.unsplash.com/photo-1677760904452-ac9064748986?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3'
    },
    {
      username: 'Sarthak',
      age: 40,
      married: false,
      istatus: 'Stranger',
      image: 'https://images.unsplash.com/photo-1639566421067-ba2f7bbc70a6?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3'
    },
    {
      username: 'Priya',
      age: 32,
      married: false,
      istatus: 'Stranger',
      image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3'
    },
    {
      username: 'Dev',
      age: 45,
      married: true,
      istatus: 'Stranger',
      image: 'https://images.unsplash.com/photo-1611042553484-6cb016cce63b?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3'
    },
    {
      username: 'Ananya',
      age: 29,
      married: false,
      istatus: 'Stranger',
      image: 'https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3'
    },
    {
      username: 'Ravi',
      age: 35,
      married: true,
      istatus: 'Stranger',
      image: 'https://images.unsplash.com/photo-1603415526960-f7e0328f35d6?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3'
    },
    {
      username: 'Megha',
      age: 26,
      married: false,
      istatus: 'Stranger',
      image: 'https://images.unsplash.com/photo-1614287435070-7b7a5f32c74e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3'
    },
    {
      username: 'Aarav',
      age: 38,
      married: true,
      istatus: 'Stranger',
      image: 'https://images.unsplash.com/photo-1621315271948-c926f248fd97?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3'
    },
    {
      username: 'Riya',
      age: 30,
      married: false,
      istatus: 'Stranger',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3'
    }
  ];
  
// var main = document.querySelector('#main')
// var main = document.querySelector('body')
var main = document.querySelector('#container')
function heroFunction() {
    var sum = ''

    arr.forEach(function (user, idx) {
        sum = sum + `<img src="$${user.image}" alt="${user.username}" />
      <h2>${user.username}</h2>
      <p class="info">Age: ${user.age} | Married: ${user.married ? "Yes" : "No"}</p>
      <span class="status-tag">${user.istatus}</span>
      <button id="${idx}" class="btn">${user.istatus == 'Stranger' ? 'Add Friend' : 'Remove Friend'}</button>`
    })

    main.innerHTML = sum
}
heroFunction()

main.addEventListener('click', function (dets) {
    var gold = arr[dets.target.id]
    if(gold.istatus == 'Stranger'){
        gold.istatus = 'Friends'
    }else{
        gold.istatus = 'Stranger'
    }
    heroFunction()
})