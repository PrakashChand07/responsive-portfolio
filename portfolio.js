 const contents = document.querySelectorAll('.ex-title'); 
  const sublink = document.querySelectorAll('.sub-link');
sublink.forEach((item,idx)=>{
item.addEventListener('click',()=>{
    hideAllContents();
    contents[idx].classList.add('active-link');
    })
})
function hideAllContents() {
    contents.forEach(content => content.classList.remove('active-link'));
 }
const libar =document.querySelector('.ulbar');
const open =document.querySelector('.fa-bars');
open.addEventListener('click',()=>{
    open.classList.add('hidebar');
    libar.classList.remove('hidebar');
})
libar.addEventListener('click',()=>{
    libar.classList.add('hidebar');
    open.classList.remove('hidebar');
})