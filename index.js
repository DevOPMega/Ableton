const menuBtn = document.getElementsByClassName("menu-btn")[0];
const menu = document.getElementsByClassName("menu")[0];
console.log(menuBtn, menu);

menuBtn.addEventListener("click", ()=>{
    menu.classList.toggle("active-menu");
})