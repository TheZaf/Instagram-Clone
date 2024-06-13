const people = [{
    profile:'source/ui_interface/suggestion/sgpro1.jpeg',
    name:'_framexx._',
    suggest:'Suggested for you',
    target:'follow'
},{
    profile:'source/ui_interface/suggestion/sgpro2.jpeg',
    name:'v_i_g_n_e_s_h',
    suggest:'Suggested for you',
    target:'follow' 
},{
    profile:'source/ui_interface/suggestion/sgpro3.jpeg',
    name:'classy_bava',
    suggest:'Suggested for you',
    target:'follow'
},{
    profile:'source/ui_interface/suggestion/sgpro4.png',
    name:'4vrg_4cnt',
    suggest:'Suggested for you',
    target:'follow'
},{
    profile:'source/ui_interface/suggestion/sgpro5.jpeg',
    name:'suffering_boy',
    suggest:'Suggested for you',
    target:'follow'
}   
];

let peopleHTML ='';
  

people.forEach((sugprofile) => {
    peopleHTML +=
    `<div class="suggest-user">
    <div class="profile1">
        <div class="user">
            <img src="${sugprofile.profile}" alt="">
        </div>
        <div class="user_name">
            <span style="padding-bottom: 5px;">${sugprofile.name}</span>
            <span style="color: #737373;">${sugprofile.suggest}</span>
        </div>
        <div class="switch" style="color: #0095f6;">${sugprofile.target}</div>
    </div>
   
</div>`
});

document.querySelector('.js-container').innerHTML = peopleHTML;