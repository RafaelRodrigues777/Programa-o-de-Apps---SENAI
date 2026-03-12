let users = []
let posts = []

async function fetchData() {
    const userData = await fetch('https://jsonplaceholder.typicode.com/users')
    const postsData = await fetch('https://jsonplaceholder.typicode.com/posts')
    users = await userData.json()
    posts = await postsData.json()
}

async function setData(){
    await fetchData();
    
    const usuarios = users.map((user) =>{
        let arei = []

        const postss = posts.map((post) =>{
            if (user.id == post.userId){
                return  arei.push({name: user.name, id: user.id, tittle: post.title, body: post.body })}


        })
        return arei
    })
    console.log(usuarios)
}



setData();

