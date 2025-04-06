 let isStatus = document.querySelector("h5")
 
 let add =document.querySelector("#add")
//  let remove = document.querySelector("#remove")


let check =0;
 add.addEventListener("click",function(){
   if(check== 0){
    isStatus.innerHTML = "freinds"
    isStatus.style.color = "green"
    add.innerHTML = "Remove freind"
    add.style.backgroundColor = "red"
    check = 1;
   }
   else{
    isStatus.innerHTML = "Stranger"
    isStatus.style.color = "red"
    add.innerHTML = "Add Freind"
    add.style.backgroundColor = "cadetblue"
    check = 0;
   }

 })
//  remove.addEventListener("click",function(){
//     isStatus.innerHTML = "Stranger"
//     isStatus.style.color = "red"
//  })