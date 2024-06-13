const story = [{
    storyProfile:'source/ui_interface/story/story1.jpg',
    storyName:'ana_d_armas'
},{  
    storyProfile:'source/ui_interface/story/story2.png',
    storyName:'leomessi'
},{
    storyProfile:'source/ui_interface/story/story3.png',
    storyName:'mansory'
},{
    storyProfile:'source/ui_interface/story/story4.png',
    storyName:'mannykho...'
},{
    storyProfile:'source/ui_interface/story/story5.png',
    storyName:'bmw'
},{
    storyProfile:'source/ui_interface/story/story6.png',
    storyName:'5am.secerts'
},{
    storyProfile:'source/ui_interface/story/story12.jpeg',
    storyName:'manoj_zaf'
},{
    storyProfile:'source/ui_interface/story/story8.png',
    storyName:'lamborghini'
},{
    storyProfile:'source/ui_interface/story/story9.png',
    storyName:'mclaren'
},{
    storyProfile:'source/ui_interface/story/story10.png',
    storyName:'christiano'
}
];


let storyHTML = '';

story.forEach((insta) => {
    storyHTML += `
    <div class="story">
    <div><img class="stry-img" src="${insta.storyProfile}"></div>
    <div class="name">${insta.storyName}</div>
   </div> `
})

document.querySelector('.js-story').innerHTML = storyHTML;