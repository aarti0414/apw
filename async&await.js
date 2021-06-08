console.log("person 1: Shows Ticket")
console.log("person 2: Shows Ticket")


// PROMISES
const promiseWifeBringsTicket = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Tickets');
    },2000)
})

const getPopcorn = promiseWifeBringsTicket.then((res) => {
    console.log('Wife : I have tickets.')
    console.log('husband : Lets go in!')
    console.log('Wife: I am hungry.')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${res} Popcorn`)
        },2000)
    })
})

const getButter = getPopcorn.then((res) => {
    console.log('husband : Lets go in!')
    console.log('Wife: I need butter.')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${res} Butter`)
        },2000)
    })
})

const getColdDrink = getButter.then((res)=> {
    console.log('husband: Lets go in!')
    console.log('wife: I need coldDrinks.')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${res} ColdDrinks`)
        },2000)
    })
})

getColdDrink.then((res) => console.log(res))


// ASYNC AND AWAIT
const preMovie = async () => {
    const promiseWifeBringsTicket = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Tickets');
        },2000)
    })

    const getPopcorn = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`Popcorn`)
            },2000)
        })
     
    const getButter = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`Butter`)
            },2000)
        })

    const getcoldDrinks = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`ColdDrink`)
        },2000)
    })
     
    let ticket = await promiseWifeBringsTicket;
    
    console.log(`Wife : I have ${ticket}`)
    console.log('husband : Lets go in!')
    console.log('Wife: I am hungry.')
    
    let popcorn = await getPopcorn;

    console.log(`husband : I got ${popcorn}`)
    console.log('husband : lets go in!')
    console.log('Wife: I need butter.')

    let butter = await getButter

    console.log(`husband : I got ${butter}`)
    console.log('husband : lets go in!')
    console.log('Wife: I need coldDrinks!')

    let coldDrink = await getcoldDrinks

    console.log(`husband : I got ${coldDrink}`)
    console.log('Wife : lets go in we are getting late!')
    console.log('husband: thank you for the reminder.. DUH!')

    return ticket;
}

preMovie().then((m) => console.log(`Person 3: Shows ${m}`))

console.log("person 4: Shows Ticket")
console.log("person 5: Shows Ticket")


function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;
            if(!error){
                resolve();
            }
            else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });   
}


// CREATE AND DELETE POST WITH ASYNC AND AWAIT
async function createPost( post) {
    let postCreated = new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)
            const error = false;
            if(!error){
                resolve('Post created successfully');
            }
            else {
                reject('Error: Something went wrong');
            }
        },2000)
    })

    await createPost
}

const deletePost = async ()=> {
    const del = new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.pop()
            resolve('Post deleted');
        },2000)
    })
}
