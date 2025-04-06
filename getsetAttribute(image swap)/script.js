let img1 =document.querySelector('#img1');
let img2 =document.querySelector('#img2');
let btn =document.querySelector('button');


btn.addEventListener('click',function(){
    let img1src= img1.getAttribute('src');
    let img2src= img2.getAttribute('src');
    
    img1.setAttribute('src',img2src);
    img2.setAttribute('src',img1src);

})