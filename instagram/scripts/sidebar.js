const sidebar =[{
    icon:"source/ui_interface/ui_ico/home.png",
    section:'Home'
    },{
     icon:"source/ui_interface/ui_ico/search.png",
     section:'Search'
    },{
    icon:"source/ui_interface/ui_ico/explore.png",
    section:'Explore'
    },{
    icon:"source/ui_interface/ui_ico/reel.png",
    section:'Reels'
    },{
    icon:"source/ui_interface/ui_ico/messenger.png",
    section:'Messages'
    },{
    icon:"source/ui_interface/ui_ico/heart.png",
    section:'Notification'    
    },{
        icon:"source/ui_interface/ui_ico/add.png",
        section:'Create'
    },{
        icon:"source/ui_interface/ui_ico/user1.png",
        section:'Profile'
    }
    
];
let sidebarHTML = '';

sidebar.forEach((side) =>{
    sidebarHTML+=`
    <div class="shell">
    <div class="icon"><img src="${side.icon}"></div>
    <div class="section">${side.section}</div>
    </div>`
});

document.querySelector('.js-sidebar').innerHTML=sidebarHTML;