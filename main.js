
// async function getFetch(){
//     try{
//         return await fetch('https://jsonplaceholder.typicode.com/todos')
//     }
//     catch(error){
//         return error
//     }
        
    

// }

// getFetch()
// .then(response => response.json())
// .then(json => console.log(json))

//*************************************-1-*********************************************** */
// async function getPosting(){
//     try {
//         return await fetch('https://jsonplaceholder.typicode.com/posts')
//     } catch (error) {
//         return error 
        
//     }
// }
// getPosting()
// .then(response => response.json())
// .then(json => console.log(json))

//***************************************-3-**************************************************** */

// async function getComets(){
//     try {
//         return await fetch('https://jsonplaceholder.typicode.com/comments/5')
//     } catch (error) {
//         return error 
        
//     }
// }
// getComets()
// .then(response => response.json())
// .then(json => console.log(json))

//**************************************-4-********************************************* */


// async function getNineComment(){
//     try {
//         return await fetch('https://jsonplaceholder.typicode.com/comments/9')
//     } catch (error) {
//         return error 
        
//     }
// }
// getNineComment()
// .then(response => response.json())
// .then(json => console.log(json))


//********************************************-5-************************************************** */

// async function getAllAlbums(){
//     try {
//         return await fetch('https://jsonplaceholder.typicode.com/albums')
//     } catch (error) {
//         return error 
        
//     }
// }
// getAllAlbums()
// .then(response => response.json())
// .then(json => console.log(json))





//****************************************-6-************************************************ */


// async function getSecondeAlbum(){
//     try {
//         return await fetch('https://jsonplaceholder.typicode.com/albums/2')
//     } catch (error) {
//         return error 
        
//     }
// }
// getSecondeAlbum()
// .then(response => response.json())
// .then((res)=>{
//     for(let item in res){
//         answerDiv.innerHTML+=`<h1>${item} -${res[item]}</h1>`
//     }
// })


/**********************************************-7********************************************************** */


// async function getAllUsers(){
//     try {
//         return await fetch('https://jsonplaceholder.typicode.com/users')
//     } catch (error) {
//         return error 
        
//     }
// }
// getAllUsers()
// .then(response => response.json())
// .then((res)=>{
//     for(let item of res){
//         for(let key in item){
//             answerDiv.innerHTML+=`<p>${key}-${item[key]}</p>`
//         }
//     }
// })

//*******************************************-8-***-9-******************************************** */


// function getData(api,userId){
//     return new Promise((resolve,reject)=>{
//         fetch(`${api}/${userId}`)
//         .then(response=>response.json())
//         .then(res=>res.id?resolve(res):reject({massage:"no data"}))
//     })
// }

// async function get22User(){
//     try {
//         return await getData('https://jsonplaceholder.typicode.com/users',22)
//     } catch (error) {
//       console.log(error ); 
        
//     }
// }
// get22User()


//***********************************************************-10-************************************************ */




// const options ={
//     method:`post`
//    }

// async function saveData(){
//     try {
//         return await  fetch('https://jsonplaceholder.typicode.com/todos',options)
//         .then(res=>res.json())
//     } catch (error) {
//         return error
//     }
    
// }
    

// saveData().then(result =>console.log(result));


//******************************************************************************************************* */


// const add ={
//     method:`post`
//    }

// async function savePostsData(){
//     try {
//         return await  fetch('https://jsonplaceholder.typicode.com/posts',add)
//         .then(res=>res.json())
//     } catch (error) {
//         return error
//     }
    
// }
    

// savePostsData().then(result =>console.log(result));

//*************************************************************************************************************** */

// const albumOjb={
//     name:"matan",
//     aga:25,
//     email:"kahska@as.com"
    
// }

// const addToAlbums={
//     method:`post`,
//     body:JSON.stringify(albumOjb)
// }

// async function saveAlbumsData(){
//     try {
//         return await fetch('https://jsonplaceholder.typicode.com/albums',addToAlbums)
//         .then(res=>res.json())
//     } catch (error) {
//         return error
//     }
// }

// saveAlbumsData().then((res=>console.log(res)));

//***********************************************************************************************/




const userOjb={
    name:"matan",
    aga:25,
    email:"kahska@as.com"
    
}

const addToUsers={
    method:`post`,
    body:JSON.stringify(userOjb)
}

async function saveToUsers(){
    try {
        return await fetch('https://jsonplaceholder.typicode.com/users',addToUsers)
        .then(res=>res.json())
    } catch (error) {
        return error
    }
}

saveToUsers().then((res=>console.log(res)));






    

//*********************************************************************************************/

const add15 ={
    method:`post`
   }

async function addToPosts (someUrl,options){
    try {
        return await  fetch(someUrl,options)
        .then(res=>res.json())
    } catch (error) {
        return error
    }
    
}
    

addToPosts ('https://jsonplaceholder.typicode.com/posts',add15).then(result =>console.log(result));



//******************************************************************************************************* */

const options ={
    method:`post`
   }



   async function addTo(someUrl,options){
    try {
        return await  fetch(someUrl,options)
        .then(res=>res.json())
    } catch (error) {
        return error
    }
    
}
    


myButton.onclick=()=>{
    switch (mySelcet.value) {
        case "posts" :
           addTo('https://jsonplaceholder.typicode.com/posts',options).then(result =>console.log(result));
            break;
            case "albums" :
                addTo('https://jsonplaceholder.typicode.com/albums',options).then(result =>console.log(result));
                 break;
                 case "photos" :
                    addTo('https://jsonplaceholder.typicode.com/photos',options).then(result =>console.log(result));
                     break;
                     case "todos" :
                        addTo('https://jsonplaceholder.typicode.com/todos',options).then(result =>console.log(result));
                         break;
                         case "users" :
                            addTo('https://jsonplaceholder.typicode.com/users',options).then(result =>console.log(result));
                             break;
                     
                 
             
                 
         
    
        default:
            break;
    }
}