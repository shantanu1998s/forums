
//NavBar
function hideIconBar(){
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:none;");
    navigation.classList.remove("hide");
}

function showIconBar(){
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:block;");
    navigation.classList.add("hide");
}


 function showReply(btn,body,comment){
   const doesReplpyInputExists = document.querySelector(".replyTextArea");
    if(doesReplpyInputExists === null){
     const replpyInput = document.createElement("textarea");
     replpyInput.classList.add("replyTextArea");
    // replpyInput.autofocus = true; 
     const container = document.querySelector(`div[id="${comment}"]`);
     container.insertAdjacentElement("afterbegin",replpyInput);
    }else{
      const replyInput = document.querySelector(".replyTextArea");
      const replyInputValue = replyInput.value;
      // const afterElem = document.querySelector(`div[id="${comment}"]`); // div[id="${comment}"] 
      const afterElem = document.getElementById(comment); // div[id="${comment}"]
      const replyElem  = document.createElement("div");
      replyElem.textContent = replyInputValue;
      replyElem.classList.add("postReply");
      afterElem.insertAdjacentElement("beforebegin",replyElem);
      //console.log(replyInputValue);
      replyInput.remove();
   }
   
  /* 
    1. => 
    2. => 
    3. comment => reply button container [you want to insert the reply text here above the reply button]
  */
     //console.log(btn,body,comment)
  //  const cc=document.getElementById(btn);
  //   const idd=randomId();
  //   const c=document.getElementById(comment);
  //   const div=document.createElement("div")
  //   div.classList.add("comment-area");
  //   // div.classList.add("hide");
  //   const teaxtarea=document.createElement("textarea")
  //   teaxtarea.id=idd;
  //   div.appendChild(teaxtarea);
  //   const p =c.querySelector("button")
  //   c.insertBefore(div,p)
  //   document.getElementById("btn").disabled = false;
  //       getValue(idd);
  
 }
    

 function randomId(){
    let id = "";
    for(let i=0;i<9;i++){
      id += Math.floor(Math.random() * 9);
    }
    return id;
  }

   let reply_count=0;
   let like_count=0;
const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();
   const randomid=randomId();
   const randomid2=randomId();
   const randomid3=randomId();
   const comment_count=randomId()
  //  console.log(randomid)
  //  console.log(randomid2)
  //  console.log(randomid3)
  // value coming from form
  const username = document.querySelector('#username').value;
  const message = document.querySelector('#message').value;
  const title= document.querySelector('#title').value;
  const comments=document.getElementById("comments");
  
  // create body element.....
   const div_body=document.createElement('div');

   const div_info=document.createElement('div');
   const name=document.createElement('h5');
   const titlee=document.createElement('h5');
   const div_user_name=document.createElement('div');
   const div_role=document.createElement('div');
   const div_img=document.createElement('img');
   const div_reply_count=document.createElement('div');
   const div_like=document.createElement('div');
   div_like.classList.add('like_class');
   const like_button=document.createElement('button');
   like_button.classList.add("div_like")
   like_button.innerHTML="Like"

   /// like and unlike button handle
   
   let temp = true;
  like_button.addEventListener("click", function () {
    if (temp) {
      like_button.style.backgroundColor = " #1F74BA";
      like_button.style.color="white"
      temp = false;
      // console.log(temp);
    } else if (!temp) {
      like_button.style.backgroundColor = "white";
      like_button.style.color="black"
      temp = true;
      // console.log(temp);
    }
  });

   const div_content=document.createElement('div');
   const div_h5=document.createElement('h5');
   const div_reply=document.createElement('p');

   const div_button=document.createElement('div');
   const button=document.createElement('button');
  
    // value putting in content class
    div_h5.innerHTML=message;
    div_reply.innerText="Reply:-";
    button.innerHTML="Reply"
    div_content.classList.add("content")
    div_content.id=randomid2;
    div_button.classList.add("comment");
    div_button.id=randomid3;
    button.id= randomid;
    button.dd=randomid2;
    button.dy=randomid3;
    button.setAttribute("onclick","showReply(id,dd,dy)")
    div_button.appendChild(button);
    div_content.appendChild(div_h5)
    div_content.appendChild(div_reply);
    div_content.appendChild(div_button);

   // element craeting for textarea.........
   const div_reply_area=document.createElement('div');
   const div_texrarea=document.createElement('textarea');
   const div_input_submit=document.createElement('input');
   
   div_reply_area.classList.add("comment-area");
   div_reply_area.classList.add("hide");
   div_reply_area.innerHTML=div_texrarea;
   div_reply_area.innerHTML=div_input_submit;

  // value puting in authors classs
  name.innerHTML="Name:"
  titlee.innerHTML='Title:'
  div_user_name.innerHTML=username;
  div_role.classList.add("title_role")
  div_role.innerHTML=title;
  div_img.src="https://cdn.pixabay.com/photo/2015/11/06/13/27/ninja-1027877_960_720.jpg"
  div_img.alt="No Image Found"
  div_img.classList.add("img");
  div_reply_count.innerHTML=`Comments ${comment_count}`
  div_like.appendChild(like_button);

  div_info.classList.add("authors")
  div_info.appendChild(name);
  div_info.appendChild(div_user_name);
  div_info.appendChild(titlee)
  div_info.appendChild(div_role);
  div_info.appendChild(div_img);
  div_info.appendChild(div_reply_count);
  div_info.appendChild(div_like);
  div_body.classList.add("body")
  div_body.appendChild(div_info);
  div_body.appendChild(div_content)
  comments.appendChild(div_body)
  comments.appendChild(div_reply_area)
  
  document.querySelector('#username').value = '';
  document.querySelector('#message').value = '';
  document.querySelector('#title').value = '';
});
