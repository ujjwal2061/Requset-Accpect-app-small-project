 const text=document.querySelector("h5")
 const btn=document.querySelector("#add")
 var check=0 
 btn.addEventListener("click" , function () {
     if(check==0){
            text.innerHTML="Friends"
            text.style.color="green"
            btn.innerHTML="Remove Friend"
            btn.style.color="white"
            check=1
            }else{
                text.innerHTML="Strange"
                text.style.color="red"
                btn.innerHTML="Add Friend"
                btn.style.color="black"
                check=0
            }
        })