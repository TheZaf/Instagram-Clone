const insta =[{
    profilePic:'source/ui_interface/profile/profile1.jpeg',
    profileName:'marvel',
    post:'source/ui_interface/post/post1.jpg',
    like:'588,500',
    bluetick:'source/ui_interface/ui_ico/verified.png',
    caption:' Deadpool and Wolverine have some of the wildestmisadventures ever told in the Marvel Universe....',
    comments:'509',
    days: '• 3d'
},{
    profilePic:'source/ui_interface/profile/profile2.jpeg',
    profileName:'wealth',
    post:'source/ui_interface/post/post2.jpg',
    like:'111,121',
    bluetick:'source/ui_interface/ui_ico/verified.png',
    caption:'Delhi has set a new national temperature record,reaching a scorching 52.9°C (127°F), according to the India... ',
    comments:'1077',
    days: '• 3d'
},{
    profilePic:'source/ui_interface/profile/profile3.jpeg',
    profileName:'forbes',
    post:'source/ui_interface/post/post3.jpg',
    like:'5820',
    bluetick:'source/ui_interface/ui_ico/verified.png',
    caption:'Quote of the day.by the founder Richard Branson Virgin Group...',
    comments:'30',
    days: '• 1h' 
},{
    profilePic:'source/ui_interface/profile/profile4.jpeg',
    profileName:'f1',
    post:'source/ui_interface/post/post4.jpg',
    like:'685,278',
    bluetick:'source/ui_interface/ui_ico/verified.png',
    caption:'mclaren know how to do a special edition livery in formula 1😇...',
    comments:'830',
    days: '• 4d' 
},{
    profilePic:'source/ui_interface/profile/profile5.jpeg',
    profileName:'nasa',
    post:'source/ui_interface/post/post5.jpg',
    like:'35,335',
    bluetick:'source/ui_interface/ui_ico/verified.png',
    caption:'setting the bar sky high witness the beauty of barred spiral galaxy NGC 4731...',
    comments:'145',
    days: '• 11m' 
},{
    profilePic:'source/ui_interface/profile/profile6.jpeg',
    profileName:'bugatti',
    post:'source/ui_interface/post/post6.jpg',
    like:'507,335',
    bluetick:'source/ui_interface/ui_ico/verified.png',
    caption:'celebrating the end of incomparable era Beautifully 500th and final CHIRON...',
    comments:'1567',
    days: '• 12d' 
},{
    profilePic:'source/ui_interface/profile/profile7.jpeg',
    profileName:'chennaiipl',
    post:'source/ui_interface/post/post7.jpg',
    like:'488,125',
    bluetick:'source/ui_interface/ui_ico/verified.png',
    caption:'The night that rained whistles and celebrations! 🥳💛',
    comments:'723',
    days: '• 4d'
},{
    profilePic:'source/ui_interface/profile/profile8.jpeg',
    profileName:'lamborghini',
    post:'source/ui_interface/post/post8.jpg',
    like:'276,325',
    bluetick:'source/ui_interface/ui_ico/verified.png',
    caption:'A powertrain that delivers 1015 CV Lamborghini Revuelto...',
    comments:'683',
    days: '• 2d'
},{
    profilePic:'source/ui_interface/profile/profile9.jpeg',
    profileName:'indiancriketteam',
    post:'source/ui_interface/post/post9.jpg',
    like:'1,020,325',
    bluetick:'source/ui_interface/ui_ico/verified.png',
    caption:'All smiles in New York 60-run win in the warmup clash against Bangladesh...',
    comments:'1,183',
    days: '• 2d'
},{
    profilePic:'source/ui_interface/profile/profile10.jpeg',
    profileName:'5am.secrets',
    post:'source/ui_interface/post/post10.jpg',
    like:'182,020',
    bluetick:'source/ui_interface/ui_ico/verified.png',
    caption:'Every great achievement starts with the decision to try...',
    comments:'613',
    days: '• 2w'
},{
    profilePic:'source/ui_interface/profile/profile11.jpeg',
    profileName:'starsportstamil',
    post:'source/ui_interface/post/post11.jpg',
    like:'11,110',
    bluetick:'source/ui_interface/ui_ico/verified.png',
    caption:'ICC Tournament-னு வந்தாலே தலைவன கையிலயே பிடிக்க முடியாது! 😎',
    comments:'613',
    days: '• 1d'
}
];
 
let feedHTML = '';

function getLike(){
    document.getElementById('like').src="source/ui_interface/ui_ico/liked.jpeg";
    }

insta.forEach((instagram) => {
    feedHTML += 
    ` <div class="feed">
    <div class="feed-header">
        <div class="profile-feed"><img src="${instagram.profilePic}"></div>
        <div class="profile-name">${instagram.profileName}<img style="padding-left: 5px;" src="source/ui_interface/ui_ico/verified.png"> <span class="days">${instagram.days}</span></div>
        <div class="more"><img src="source/ui_interface/ui_ico/more.png"></div>
    </div>
    <div class="post"><img class="post-img" src="${instagram.post}"></div>
    <div class="post-status">
        <div class="stat">
          <img id="like" class="avg" src="source/ui_interface/ui_ico/heart.png">
            <img class="avg"  src="source/ui_interface/ui_ico/comment.jpeg">
            <img class="avg"  src="source/ui_interface/ui_ico/share.jpeg">
        </div>
        <div class="save"><img src="source/ui_interface/ui_ico/bookmark.png"></div>
    </div>
    <div class="like-count">${instagram.like} likes</div>
        <div class="caption"><span class="author">${instagram.profileName}</span><img style="padding-left: 5px;" src="source/ui_interface/ui_ico/verified.png">
        ${instagram.caption}
        <span class="cmt">more</span>
    </div>
    <div class="cmt">Veiw all ${instagram.comments} comments</div>
    <div class="add-cmt">add a comment...</div>
</div>`


});

document.querySelector('.js-feed').innerHTML=feedHTML;


