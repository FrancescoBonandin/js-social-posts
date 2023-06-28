// 1. ciclo array e creo gli elementi che mi servono, gli assegno le classi e li riempio



const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


const container = document.getElementById("container")

for (let index = 0; index < posts.length; index++) {

    const element = posts[index];

    const creationDateObj = dateToDateObj(element.created);

    // const dateUSA = `${creationDateObj.month}/${creationDateObj.day}/${creationDateObj.year}`;

    const dateITA = `${creationDateObj.day}/${creationDateObj.month}/${creationDateObj.year}`;

    console.log(getNameInitials(element.author.name))


    container.innerHTML += 
    
    `<div class="post">

        <div class="post__header">

            <div class="post-meta">   

                <div class="post-meta__icon">

                    <img class="profile-pic" src="${element.author.image}" alt="${getNameInitials(element.author.name)}">                    
                
                </div>

                <div class="post-meta__data">

                    <div class="post-meta__author">${element.author.name}</div>

                    <div class="post-meta__time">${dateITA}</div>

                </div>       

            </div>

        </div>

        <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
        
        <div class="post__image">

            <img src="${element.media}" alt="">

        </div>

        <div class="post__footer">

            <div class="likes js-likes">

                <div class="likes__cta">

                    <a class="like-button  js-like-button" href="#nogo" data-postid="${element.id}">

                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>

                        <span class="like-button__label">Mi Piace</span>

                    </a>

                </div>

                <div class="likes__counter">

                    Piace a <b id="like-counter-${element.id}" class="js-likes-counter">${element.likes}</b> persone

                </div>

            </div>
                
        </div>      

    </div>`

}



const allLikeButton = document.querySelectorAll(".like-button");
const likedPosts = []


allLikeButton.forEach((element, i) => {

    element.addEventListener("click",function(){

        const thisPost = this.getAttribute("data-postid");
        
        if(this.classList.contains("like-button--liked")){
        
        
            likedPosts.splice(likedPosts.indexOf(thisPost),1);
            
            posts[i].likes--;

        }
    
        else{
            likedPosts.push(thisPost);
            
            posts[i].likes++;

        }
        
        this.classList.toggle("like-button--liked");
        
        const likesCounter = document.getElementById(`like-counter-${thisPost}`);
     
        likesCounter.innerHTML = posts[i].likes;

    })
    
});


const allProfilePic = document.querySelectorAll(".profile-pic")
    

allProfilePic.forEach((element,i)=>{
    
    element.addEventListener("error", function(){
        this.parentElement.innerHTML=  `<div class="profile-pic-default"><span>${getNameInitials(posts[i].author.name)}</span></div>`
    })
})



// ----------FUNCTIONS-----------

function dateToDateObj(date){

    let arr = date.split("-");

    let dateObj = {

        year:undefined,
        month:undefined,
        day:undefined

    };

    for (let index = 0; index < arr.length; index++) {

        switch (index) {

            case 0:{
                dateObj.year=arr[index]
                
               
            }

            case 1:{
                dateObj.month=arr[index]
                
               
            }

            case 2:{
                dateObj.day=arr[index]
                
               
            }
         
        }

    }
    
        return dateObj;
    
}

function getNameInitials(fullName){
   const fullNameArr = fullName.split(" ");

   const firstNameSFirstLetter = fullNameArr[0][0] ;
   const lastNameSFirstLetter = fullNameArr[fullNameArr.length-1][0]

   const nameInitials = firstNameSFirstLetter+lastNameSFirstLetter;
   return nameInitials;
}