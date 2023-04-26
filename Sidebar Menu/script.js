const menu = document.querySelector(".menu-content");
const menuItems = document.querySelectorAll(".submenu-item");
const subMenuTitles = document.querySelectorAll(".submenu .menu-title");

menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        menu.classList.add("submenu-active");
        // Add "show-submenu" style for this item
        item.classList.add("show-submenu");
        // remove "show-submenu" style for others
        menuItems.forEach((item_o,index_o)=>{
            if (index !== index_o){
                item_o.classList.remove("show-submenu");
            }
        })
    })
})

subMenuTitles.forEach((title)=>{
    title.addEventListener("click",()=>{
        menu.classList.remove("submenu-active");
    })
})

const menuIcon = document.querySelector('.menuIcon');
const sidebar = document.querySelector('.sideBar')

console.log(menuIcon)
menuIcon.addEventListener("click",()=>{
    // ???
    sidebar.classList.toggle("close")
})