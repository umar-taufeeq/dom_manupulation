var arr= [
    {
    dp:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1571513800374-df1bbe650e56?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    dp:"https://images.unsplash.com/photo-1599662875272-64de8289f6d8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}
,{
    dp:"https://images.unsplash.com/photo-1551831639-df4be8a9e9ce?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1571513800374-df1bbe650e56?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    dp:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1599662875272-64de8289f6d8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    dp:"https://images.unsplash.com/photo-1551831639-df4be8a9e9ce?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1571513800374-df1bbe650e56?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}
]

var storiyan=document.querySelector("#storiyan")
var clutter =""
arr.forEach(function(elem,idx){
    clutter +=`<div class="story">
        <img id="${idx}" src="${elem.dp}" alt=""> 
    </div>`
})


storiyan.innerHTML=clutter



storiyan.addEventListener("click",function(dets){
var val=arr[dets.target.id].story
document.querySelector("#full-screen").style.display="block"
document.querySelector("#full-screen").style.backgroundImage=`url(${val})`


setTimeout(function(){
    document.querySelector("#full-screen").style.display="none"
},2000)
});
console.log(clutter);
