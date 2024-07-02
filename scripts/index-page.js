const commentArray = [
    {
        name: "Victor Pinto",
        date: "11/02/2023",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."

    },

    {
        name: "Christina Cabrera",
        date: "10/28/2023",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."

    },

    {
        name: "Isaac Tadesse",
        date: "10/20/2023",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough"
    },
];

const commentList = document.querySelector(".post__items")

function displayComments(commentArray) {
    for (i = 0; i < commentArray.length; i++){

        let listItems = document.createElement("li");
        listItems.classList.add("post__list-items", "post__list-items--top");

        let postHeader = document.createElement("div");
        postHeader.classList.add("post__header");

        let headName = document.createElement("h3");
        headName.innerText = commentArray[i].name;

        let headDate = document.createElement("p");
        headDate.classList.add("post__header--date");
        headDate.innerText = commentArray[i].date;

        let text = document.createElement("p");
        text.classList.add("post__comment");
        text.innerText = commentArray[i].comment;

        let avatar = document.createElement("img");
        avatar.classList.add("post__avatar");


        commentList.appendChild(listItems);
        listItems.appendChild(postHeader);
        postHeader.appendChild(headName);
        postHeader.appendChild(headDate);
        listItems.appendChild(text);
        listItems.appendChild(avatar);
    }
}

displayComments(commentArray);

let formCta = document.querySelector(".comments__textbox")

formCta.addEventListener("submit", (e) =>{
    e.preventDefault();

    let nameText = e.target.nameText.value;
    let commentText = e.target.commentText.value;

    if (nameText && commentText){
        const currentDate = new Date();
        commentList.innerText = "";
        commentArray.unshift({
            name: nameText,
            comment: commentText,
            date: currentDate
        });
        for(i = 0; i < commentArray.length; i++){
            displayComments(commentArray);
        }
    }
    document.querySelector(".comments__textbox--name").value = "";
    document.querySelector(".comments__textbox--comment").value = "";
}
)

function formatTimeAgo(dateString) {
    const datePosted = new Date(dateString);
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - datePosted.getTime();
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
        return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
    }
}