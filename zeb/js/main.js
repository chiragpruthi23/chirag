function gw() {
    let a = document.getElementsByTagName('html')[0].offsetWidth;
    let b = document.getElementsByTagName('html')[0];
    b.style.backgroundColor='black';
    
    document.getElementsByTagName('header')[0].innerHTML="<div class='upper-head'><div id='left_header'><img src='/chirag/zeb/images/logo.png' alt='LOGO' id='logo'><img src='/chirag/zeb/images/zeb.png' alt='ZeB' id='logo'>            </div><div id='center_header'><a href='/chirag/zeb/index.html'>HOME</a><a href='/chirag/zeb/trend.html'>TREND</a><a href='/chirag/zeb/fav.html'>FAVOURITE</a></div><div id='right_header'><div ><div class='search-bar' ><input type='text' placeholder='search ....' id='search-input' ><button onclick=searchitem() type='submit'><img style='width:3vw' src='/chirag/zeb/images/search.png' alt='Search'></button></div></div><input onclick='menu()' type='checkbox' id='check' class='checked'><label for='check'><img id='menu' src='/chirag/zeb/images/menu.png' alt='MENU'></label></div></div><div class='lower-head' id='menu_menu'><div id='menu-list'><div id='upper-lower-head'><a href='/chirag/zeb/index.html'>Home</a><a href='/chirag/zeb/trend.html'>Trend</a><a href='/chirag/zeb/fav.html'>Favouraites</a><a href='/chirag/zeb/library.html'>Library</a></div><div id='lower-lower-head'><a href='/chirag/zeb/about.html'>About Us</a><a href='/chirag/zeb/contact.html'>Contact Us</a><a href='/chirag/zeb/feedback.html'>Feedback</a><a href='/chirag/zeb/help.html'>Help</a></div></div></div>"

    document.getElementsByTagName('footer')[0].innerHTML="<div class='left-footer'><div class='left-left-footer'><a href='/chirag/zeb/about.html'>About Us</a><a href='/chirag/zeb/contact.html'>Contact Us</a>                </div><div class='left-right-footer'><a href='/chirag/zeb/help.html'>Help</a><a href='/chirag/zeb/feedback.html'>Feedback</a></div></div><div class='right-footer'><div class='logo-area'><img class='l' src='/chirag/zeb/images/logo.png' alt='LOGO'><img class='l' src='/chirag/zeb/images/zeb.png' alt='ZEB'></div><p>by Zeb community</p><p>2023 All copy-rights reserved </p></div>"
} 

function menu(){
    let a = document.getElementById('menu_menu').style.visibility;
    if(a=='visible'){
        document.getElementById('menu_menu').style.visibility='hidden';
    }
    else{
        document.getElementById('menu_menu').style.visibility='visible';
    }
}

function check_clicked(){
    let a = document.title;
    if(a=='Zeb.com'){
        obj=document.getElementsByTagName('a')[0];
        obj.style.background='rgba(255,255,255,0.3)';
        obj.style.color='yellow';
        objj=document.getElementsByTagName('a')[3];
        objj.style.background='rgba(255,201,14,1)';
        objj.style.color='black';     
    }
    else if(a=='Zeb.com/Trend'){
        obj=document.getElementsByTagName('a')[1];
        obj.style.background='rgba(255,255,255,0.3)';
        obj.style.color='yellow';
        objj=document.getElementsByTagName('a')[4];
        objj.style.background='rgba(255,201,14,1)';
        objj.style.color='black';     
    }
    else if(a=='Zeb.com/Favourite'){
        obj=document.getElementsByTagName('a')[2];
        obj.style.background='rgba(255,255,255,0.3)';
        obj.style.color='yellow';
        objj=document.getElementsByTagName('a')[5];
        objj.style.background='rgba(255,201,14,1)';
        objj.style.color='black';     
    }
    else if(a=='Zeb.com/Library'){
        obj=document.getElementsByTagName('a')[6];
        obj.style.background='rgba(255,201,14,1)';
        obj.style.color='black';
    }
    else if(a=='Zeb.com/About'){
        obj=document.getElementsByTagName('a')[7];
        obj.style.background='rgba(255,201,14,1)';
        obj.style.color='black';
    }
    else if(a=='Zeb.com/Contact'){
        obj=document.getElementsByTagName('a')[8];
        obj.style.background='rgba(255,201,14,1)';
        obj.style.color='black';
    }
    else if(a=='Zeb.com/Feedback'){
        obj=document.getElementsByTagName('a')[9];
        obj.style.background='rgba(255,201,14,1)';
        obj.style.color='black';
    }
    else if(a=='Zeb.com/Help'){
        obj=document.getElementsByTagName('a')[10];
        obj.style.background='rgba(255,201,14,1)';
        obj.style.color='black';
    }
    else{
        null;
    }
}

function searchitem(){
    let item=document.getElementsByTagName('search-input')[0].value;
    let main=document.getElementsByTagName('main')[0];
    if(item=="demon slayer"){
        main.innerHTML="<div class='item-div'><div class='left-div'><br><img class='img' src='/chirag/zeb/content/demon_slayer_season_4/img1.jpeg' alt='IMAGE'></div><div class='right-item'><a href='/chirag/zeb/content/demon_slayer_season_4/4_content.html'><h2>Demon Slayer Season 4: What to Expect from the Continuing Journey</h2><br><p>Demon Slayer, a most popular anime of Japan, has taken the anime world by storm since its debut. With stunning animation, compelling characters, and a captivating storyline, it's no wonder fans eagerly await each new season. The release of Demon Slayer Season 4 promises more epic battles and emotional depth, keeping the anime's popularity soaring</p></a></div></div>";
    }
    else{
        main.innerHTML="ERROR : Webpage under process";
    }
}

gw();
check_clicked();
// ==================================================================
//                     Main Program Starts Here

//   Variables
var list={
    '1':'adventure_life',
    '2':'ai_technology',
    '3':'crypto_currency',
    '4':'demon_slayer_season_4',
    '5':'history_of_landmarks',
    '6':'icc_mens_cricket',
    '7':'lifestyle_tips',
    '8':'mars_exploration',
    '9':'mental_health',
    '10':'mindfullness_life',
    '11':'revolution_industries'
};

let cartoon={
    'demon_slayer':['/chirag/zeb/content/demon_slayer_season_4/4_content.html']
};

let space={
    'space':['/chirag/zeb/content/mars_exploration/8_content.html']
};

let data=[cartoon,space];