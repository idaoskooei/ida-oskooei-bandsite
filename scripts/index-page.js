const bandSiteApi = new BandSiteApi("3c6412bd-6a41-4e5b-b0ec-dd57c144bf86");
const commentList = document.querySelector(".post__items");

async function displayComments() {
  try {
    console.log("Fetching comments...");
    const comments = await bandSiteApi.getComments();
    console.log("Comments fetched:", comments);

    commentList.innerHTML = "";
    comments.forEach(comment => {
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
  } catch (error) {
    console.error("Error displaying comments:", error);
  }
}

displayComments();

let formCta = document.querySelector(".comments__textbox");

formCta.addEventListener("submit", async (e) => {
  e.preventDefault();

  let nameText = e.target.nameText.value;
  let commentText = e.target.commentText.value;
  let newComment = {
    name: nameText,
    comment: commentText
  }

  if (nameText && commentText) {
    try {
      console.log("Posting new comment...");
      await bandSiteApi.postComment(newComment);
      console.log("New comment posted");
      displayComments();
    } catch (error) {
      console.error("Error posting new comment:", error);
    }
  }

  document.querySelector(".comments__textbox--name").value = "";
  document.querySelector(".comments__textbox--comment").value = "";
});