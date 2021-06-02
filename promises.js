
function sendBackThePostToPrint(callback)
// fetch the posts
{
let request = new XMLHttpRequest();
request.open("GET","https://jsonplaceholder.typicode.com/posts")
request.send();
request.onload = () => {
    // console.log(request.response);
    callback(request.response);
}
function logPosts(posts){
    console.log(`posts are ${posts}`)
}
sendBackThePostToPrint(10, 20, logPosts);
}

// promises

const getEmployeeIds = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("rejected for learning purpose");
    },2000)
    setTimeout(()=>{
        console.log("trying to resolve after 5 seconds");
        resolve([2,3,4,5,6,7])
    },5000)
})

getEmployeeIds.then()
.then((idArray)=> {
console.log("promise resolved ids :", idArray)
})
.catch( error=>{
    console.log("promise rejected:", error)
})
// calling API using fetch that returns a promise

function logPosts(posts) {
    console.log(`posts are ${posts}`)
}
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => (response.json()));
  then(jsonvalue => logPosts(jsonvalue));

