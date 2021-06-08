

const posts=[
    {title:'Post One', body:'This is post one'},
    {title:'Post Two', body:'This is post Two'}
];

function getPost(){
    setTimeout(()=>{
        let output ='';
        posts.forEach((post,index)=>{
            output += `<li>${post.title}</li>`;    
        });
        document.body.innerHTML = output;
    },1000);
}

function createPost(post){
    console.log("Created");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }
            else{
                reject('Error!!');
            }
        },1000);
   
    });
}
function deletePost(){
    return new Promise((resolve, reject) => {
        posts.pop()
        if(posts.length>=0){
            setTimeout(() => {
                resolve();
            },1000)
        }
        else
            reject("Array is Empty")
    });
}
createPost({title: 'post three', body: 'this is post three'}).then(getPost);
createPost({title: 'post Four', body: 'this is post three'}).then(getPost);

const timer = setInterval(() => {
    deletePost()
    .then(() => {
        posts.pop();
        let lastPost=document.querySelector('body').lastChild;
        lastPost.remove();
        if(lastPost === null)
            console.log(err);
        
    })
    .catch(err => {
        console.log('Array is empty');
        clearInterval(timer);
    });
},2000);

//Promise all
const promise1 = Promise.resolve('hello world');
const promise2 = 10;
const promise3 = new Promise((resolve,reject)=>
setTimeout(resolve, 2000, 'Goodbye'));
Promise.all([promise1, promise2, promise3]).then(values =>
    console.log(values));



