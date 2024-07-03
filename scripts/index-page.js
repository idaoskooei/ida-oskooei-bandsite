const url = "https:unit-2-project-api-25c1595833b2.herokuapp.com/";
const apiKey = "3c6412bd-6a41-4e5b-b0ec-dd57c144bf86";
const commentList = document.querySelector(".post__items");

function getComments(){
    axios
        .get(url + "comments?api_key=" + apiKey)
            .then(response => {
                console.log(response.data);
                let commentArray = response.data.sort((a,b) => {
                    return b.timestamp - a.timestamp
                });
    
                commentArray.forEach((comment) => {
    
                    let listItems = document.createElement("li");
                    listItems.classList.add("post__list-items", "post__list-items--top");
    
                    let postHeader = document.createElement("div");
                    postHeader.classList.add("post__header");
    
                    let headName = document.createElement("h3");
                    headName.innerText = comment.name;
    
                    let headDate = document.createElement("p");
                    headDate.classList.add("post__header--date");
                    headDate.innerText = new Date(comment.timestamp).toDateString();
    
                    let text = document.createElement("p");
                    text.classList.add("post__comment");
                    text.innerText = comment.comment;
    
                    let avatar = document.createElement("img");
                    avatar.classList.add("post__avatar");
    
    
                    commentList.appendChild(listItems);
                    listItems.appendChild(postHeader);
                    postHeader.appendChild(headName);
                    postHeader.appendChild(headDate);
                    listItems.appendChild(text);
                    listItems.appendChild(avatar);
                });
                
            })
            .catch(err => {
                console.log(err);
            });
        }
    
    getComments();

let formCta = document.querySelector(".comments__textbox");

formCta.addEventListener("submit", (e) => {
    e.preventDefault();

    let nameText = e.target.nameText.value;
    let commentText = e.target.commentText.value;
    let newComment = {
        name: nameText,
        comment: commentText
    }

    if (nameText && commentText) {
        commentList.innerText = "";
        axios
        .post(url + "comments?api_key=" + apiKey, newComment)
        .then(response=>{
            getComments();
        })
        .catch(err => {
            console.log(err);
        });
    }

    document.querySelector(".comments__textbox--name").value = "";
    document.querySelector(".comments__textbox--comment").value = "";
});