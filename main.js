
const music = new Audio('audio/Alen/15.mp3');

let wave = document.getElementById('wave');
let wave1 = document.getElementsByClassName('wave1');
let masterplay = document.getElementById('masterplay');

masterplay.addEventListener('click', ()=>{
    if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1');
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterplay.classList.remove('bi-pause-fill');
        masterplay.classList.add('bi-play-fill');
    }
})
const makeallplay = () =>{
    Array.from(document.getElementsByClassName('playlistplay')).forEach((el)=>{
        el.style.background=`rgb(105,105,105,0)`;
        el.classList.remove('bi-pause-circle-fill');
        el.classList.add('bi-play-circle-fill');
    })
}
const makeallbackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background=`rgb(105,105,105,0)`
    })
}


// play music on click on any
let index=0;
let title = document.getElementById('title');
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let content_h1 = document.getElementById('content_h1');
let content = document.getElementsByClassName('content');
let song_side = document.querySelector('.song_side').style;
let ssc_para = document.getElementById('ssc_para');
Array.from(document.getElementsByClassName('playlistplay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        index = el.target.id;
        // console.log(index)
        music.src=`audio/${index}.mp3`;
        download_music.href = `audio/${index}.mp3`;
        // poster_master_play.src=`imags/bg.png`;
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');

        let songTitles = song.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let { songName , poster } = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
            poster_master_play.src=poster;
            content_h1.innerHTML = songName;
            ssc_para.innerHTML=' ';
            // song_side.setProperty('--background', 'url(poster)');
        });
        
        
        makeallbackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105,105,.1)";
        makeallplay();
        el.target.classList.add('bi-pause-circle-fill');
        el.target.classList.remove('bi-play-circle-fill');
        wave.classList.add('active1');
        
        
    })
})

//function for suffel play

const next_music = () =>{
    if (index == song.length) {
        index = 1;
    } else {
        index++;
    }
    music.src=`audio/${index}.mp3`;
    download_music.href = `audio/${index}.mp3`;
    // poster_master_play.src=`imags/bg.png`;
    music.play();
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');

    let songTitles = song.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let { songName , poster } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
        poster_master_play.src=poster;
    });

    makeallbackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105,105,.1)";
    makeallplay();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');
    wave.classList.add('active1');
}

const repeat_music = () =>{
    index;
    music.src=`audio/${index}.mp3`;
    download_music.href = `audio/${index}.mp3`;
    // poster_master_play.src=`imags/bg.png`;
    music.play();
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');

    let songTitles = song.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let { songName , poster } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
        poster_master_play.src=poster;
    });

    makeallbackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105,105,.1)";
    makeallplay();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');
    wave.classList.add('active1');
}

const random_music = () =>{
    if (index == song.length) {
        index = 1;
    } else {
        index= Math.floor((Math.random()* song.length)+1);
    }
    music.src=`audio/${index}.mp3`;
    download_music.href = `audio/${index}.mp3`;
    // poster_master_play.src=`imags/bg.png`;
    music.play();
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');

    let songTitles = song.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let { songName , poster } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
        poster_master_play.src=poster;
    });

    makeallbackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105,105,.1)";
    makeallplay();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');
    wave.classList.add('active1');
}

music.addEventListener('ended' , () =>{
    let b = suffle.innerHTML;
    switch (b) {
        case "repeat":
            repeat_music();
            break;

        case "random":
            random_music();
            break;
            
        case "next":
            next_music();
            break;    
        
    }
})

// music time update and duration update code
let currentstart = document.getElementById('currentstart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bwr2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];



music.addEventListener('timeupdate', ()=>{
    let music_current_time = music.currentTime;
    let music_duration = music.duration;

    let min1 = Math.floor(music_duration/60);
    let sec1 = Math.floor(music_duration%60);

    if(sec1<10){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1} : ${sec1}`;

    let min2 = Math.floor(music_current_time/60);
    let sec2 = Math.floor(music_current_time%60);
    if (sec2<10) {
        sec2= `0${sec2}`;
    }
    currentstart.innerText =`${min2}:${sec2}`
    let progressbar = parseInt((music_current_time/music_duration)*100);
     seek.value = progressbar;
     let seekbar = seek.value;
     bar2.style.width = `${seekbar}%`;
     dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', () =>{
    music.currentTime = seek.value * music.duration / 100;
    console.log(seekbar)
})

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change' , () => {
    if (vol.value == 0 ){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
    }if (vol.value > 0 ){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    if (vol.value >50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume= vol_a/100;
})


let backbtn = document.getElementById('backbtn');
let nextbtn = document.getElementById('nextbtn');

//backbtn of masterplay section code
backbtn.addEventListener('click', () =>{
        index= index-1;
        if (index < 1) {
            index = Array.from(document.getElementsByClassName('songItem')).length;
        }
        music.src=`audio/${index}.mp3`;
        download_music.href = `audio/${index}.mp3`;
        // poster_master_play.src=`imags/bg.png`;
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');

        let songTitles = song.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let { songName , poster } = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
            poster_master_play.src=poster;
        });

        makeallbackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105,105,.1)";
        makeallplay();
        // playlistplay.target.classList.add('bi-pause-circle-fill');
        // playlistplay.target.classList.remove('bi-play-circle-fill');
        wave.classList.add('active1');
        
})


//nextbtn of masteplay section code
nextbtn.addEventListener('click', () =>{
    index++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    music.src=`audio/${index}.mp3`;
    download_music.href = `audio/${index}.mp3`;//download music code
    // poster_master_play.src=`imags/bg.png`;
    music.play();
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');

    let songTitles = song.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let { songName , poster } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);//code to change the title of the download music
        poster_master_play.src=poster;
    });

    makeallbackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105,105,.1)";
    makeallplay();
    // playlistplay.target.classList.add('bi-pause-circle-fill');
    // playlistplay.target.classList.remove('bi-play-circle-fill');
    wave.classList.add('active1');
    
})



//suffle btn code
let suffle = document.getElementsByClassName('suffle')[0];
suffle.addEventListener('click', () =>{
    
    const a =suffle.innerHTML;
    switch (a) {
        case "next":
            suffle.classList.add('bi-arrow-repeat');
            suffle.classList.remove('bi-music-note-beamed');
            suffle.classList.remove('bi-shuffle');
            suffle.innerHTML = 'repeat';
            break;
        case "repeat":
            suffle.classList.remove('bi-arrow-repeat');
            suffle.classList.remove('bi-music-note-beamed');
            suffle.classList.add('bi-shuffle');
            suffle.innerHTML = 'random';
            break;
        case "random":
            suffle.classList.remove('bi-arrow-repeat');
            suffle.classList.add('bi-music-note-beamed');
            suffle.classList.remove('bi-shuffle');
            suffle.innerHTML='next';
            break;
    
    }
    
})





// right left curser code for popular songs and popular artist section
let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener( 'click' , () =>{
    pop_song.scrollLeft+=330;
})

pop_song_left.addEventListener( 'click' , () =>{
    pop_song.scrollLeft-=330;
})

let pop_artist_left = document.getElementById('pop_artist_left');
let pop_artist_right = document.getElementById('pop_artist_right');
let pop_artist = document.getElementsByClassName('pop_artist')[0];

pop_artist_right.addEventListener('click' , ()=>{
    pop_artist.scrollLeft+=330;
})
pop_artist_left.addEventListener('click' , ()=>{
    pop_artist.scrollLeft-=330;
})





// musics.play();

const song=[
    {
        id: 1,
        songName:` Hello World<br>
        <div class="subtitle">Alen Walker</div>`,
        poster:"imags/hello world.jpg"
    },
    {
        id: 2,
        songName:`Heeriye Heeriye<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/heeriye.jpg"
    },
    {
        id: 3,
        songName:` Extremes<br>
        <div class="subtitle">Alen Walker</div>`,
        poster:"imags/extereme.jpg"
    },
    {
        id: 4,
        songName:` Fake A Smile<br>
        <div class="subtitle">Alen Walker</div>`,
        poster:"imags/fakeasmile.jpg"
    },
    {
        id: 5,
        songName:` O Bedardeya<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/O Bedardeya.jpg"
    },
    {
        id: 6,
        songName:` Hum Mar Jayenge<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/hum mar jayenge.jpg"
    },
    {
        id: 7,
        songName:` Paradise<br>
        <div class="subtitle">Alen Walker</div>`,
        poster:"imags/paradise.jpg"
    },
    {
        id: 8,
        songName:` O Desh Mere<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/desh mere.jpg"
    },
    {
        id: 9,
        songName:`Shut up<br>
        <div class="subtitle">Alen Walker</div>`,
        poster:"imags/shut up.jpg"
    },
    {
        id: 10,
        songName:` Humdard<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/Humdard.jpg"
    },
    {
        id: 11,
        songName:`Sorry<br>
        <div class="subtitle">Alen Walker</div>`,
        poster:"imags/soory.jpg"
    },
    {
        id: 12,
        songName:` Jhoome Jo Pathaan<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/Jhoome Jo Pathaan.jpg"
    },
    {
        id: 13,
        songName:` The Drum<br>
        <div class="subtitle">Alen Walker</div>`,
        poster:"imags/the drum.jpg"
    },
    {
        id: 14,
        songName:` Unity<br>
        <div class="subtitle">Alen Walker</div>`,
        poster:"imags/unity.jpg"
    },
    {
        id: 15,
        songName:` Kashmir Main , Tu Kanyakumari<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/Kashmir Main Tu Kanyakumari.jpg"
    },
    {
        id: 16,
        songName:` Naina<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/Naina.jpg"
    },
    {
        id: 17,
        songName:` Space Melody<br>
        <div class="subtitle">Alen Walker</div>`,
        poster:"imags/space melody.jpg"
    },
    {
        id: 18,
        songName:` Kesariya<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/kesariya.jpg"
    },
    {
        id: 19,
        songName:` Running Out Of Roses<br>
        <div class="subtitle">Alen Walker</div>`,
        poster:"imags/running out of roses.jpg"
    },
    {
        id: 20,
        songName:` Nashe Se Chadh Gayi<br>
        <div class="subtitle">Alen Walker</div>`,
        poster:"imags/Nashe Si Chadh Gayi.jpg"
    },
]
const Alen_song=[
    {
        Alenid: 1,
        songName:` Believers<br>
        <div class="subtitle">Alen Walker</div>`,
        poster:"imags/believer.jpg"
    },
    {
        Alenid: 2,
        songName:`Blue<br>
        <div class="subtitle">Alen Walker</div>`,
        poster:"imags/blue.jpg"
    },
    {
        Alenid: 3,
        songName:` Extremes<br>
        <div class="subtitle">Alen Walker</div>`,
        poster:"imags/extereme.jpg"
    },
    {
        Alenid: 4,
        songName:` Fake A Smile<br>
        <div class="subtitle">Alen Walker</div>`,
        poster:"imags/fakeasmile.jpg"
    },
    {
        Alenid: 5,
        songName:` Hello World<br>
        <div class="subtitle">Alen Walker</div>`,
        poster:"imags/hello world.jpg"
    },
    {
        Alenid: 6,
        songName:` Lovesick<br>
        <div class="subtitle">Alen Walker</div>`,
        poster:"imags/lovesick.jpg"
    },
    {
        Alenid: 7,
        songName:` Paradise<br>
        <div class="subtitle">Alen Walker</div>`,
        poster:"imags/paradise.jpg"
    },
    {
        Alenid: 8,
        songName:` Running Out of Roses<br>
        <div class="subtitle">Alen Walker</div>`,
        poster:"imags/running out of roses.jpg"
    },
    {
        Alenid: 9,
        songName:`Shut up<br>
        <div class="subtitle">Alen Walker</div>`,
        poster:"imags/shut up.jpg"
    },
    {
        Alenid: 10,
        songName:` Somebody Likes U<br>
        <div class="subtitle">Alen Walker</div>`,
        poster:"imags/somebody.jpg"
    },
    {
        Alenid: 11,
        songName:`Sorry<br>
        <div class="subtitle">Alen Walker</div>`,
        poster:"imags/soory.jpg"
    },
    {
        Alenid: 12,
        songName:` Space Melody<br>
        <div class="subtitle">Alen Walker</div>`,
        poster:"imags/space melody.jpg"
    },
    {
        Alenid: 13,
        songName:` The Drum<br>
        <div class="subtitle">Alen Walker</div>`,
        poster:"imags/the drum.jpg"
    },
    {
        Alenid: 14,
        songName:` Unity<br>
        <div class="subtitle">Alen Walker</div>`,
        poster:"imags/unity.jpg"
    },
    {
        Alenid: 15,
        songName:` Faded<br>
        <div class="subtitle">Alen Walker</div>`,
        poster:"imags/faded.jpg"
    },
    {
        Alenid: 16,
        songName:` Alone<br>
        <div class="subtitle">Alen Walker</div>`,
        poster:"imags/alone.jpg"
    },
    
]
const Arijit_song=[
    
    {
        id: 1,
        songName:` Ae Dil Hai Mushkil<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/ae dil hai muskil.jpg"
    },
    {
        id: 2,
        songName:`Agar Tum Sath Ho <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/Agar Tum Saath Ho.jpg"
    },
    {
        id: 3,
        songName:` Baatein Ye Kabhi Na Tu Bhul Na<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/baatein ye kavina.jpg"
    },
    {
        id: 4,
        songName:` Bandeya Rey Bandeya<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/bandeya re bandeya.jpg"
    },
    {
        id: 5,
        songName:` Bandeya<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/bandeya.jpg"
    },
    {
        id: 6,
        songName:`Bolna Mahi Bolna <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/bolna mahi bolna.jpg"
    },
    {
        id: 7,
        songName:` Bulleya<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/ae dil hai muskil.jpg"
    },
    {
        id: 8,
        songName:`Channa Mereya <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/channa mereya.jpg"
    },
    {
        id: 9,
        songName:`Enna Sona Kyu <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/enna sona.jpg"
    },
    {
        id: 10,
        songName:` Galti Se Mistake<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/galti se mistke.jpg"
    },
    {
        id: 11,
        songName:`Hamari Adhuri Kahani <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/hamari adhuri kahani.jpg"
    },
    {
        id: 12,
        songName:`Hamdard <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/Humdard.jpg"
    },
    {
        id: 13,
        songName:`Hawayein <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/hawayein.jpg"
    },
    {
        id: 15,
        songName:`Heeriye Heeriye <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/heeriye.jpg"
    },
    {
        id: 16,
        songName:` Hum Mar Jayenge<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/hum mar jayenge.jpg"
    },
    {
        id: 18,
        songName:`Jhoome Jo Pathan <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/Jhoome Jo Pathaan.jpg"
    },
    {
        id: 19,
        songName:` Kashmir Main,Tu Kanyakumari<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/Kashmir Main Tu Kanyakumari.jpg"
    },
    {
        id: 20,
        songName:` Kesariya<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/kesariya.jpg"
    },
    {
        id: 21,
        songName:`Khamoshiyan <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/khamoshiyan.jpg"
    },
    {
        id: 22,
        songName:` Lambiyaan Si Judaiyaan<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/lambiyaan si judaiyaan.jpg"
    },
    {
        id: 23,
        songName:` Main Dhoondne Ko Zamane Mein<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/Main Dhoondne Ko Zamaane Mein.jpg"
    },
    {
        id: 24,
        songName:` Main Tera Boyfriend<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/Main Tera Boyfriend.jpg"
    },
    {
        id: 25,
        songName:` Main Tenu Smajhawan Ki <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/samjhawan.jpg"
    },
    {
        id: 26,
        songName:` Mere Watan<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/Ae Watan.jpg"
    },
    {
        id: 27,
        songName:` Naina<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/Naina.jpg"
    },
    {
        id: 28,
        songName:` Nashe Se Chad Gai<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/Nashe Si Chadh Gayi.jpg"
    },
    {
        id: 29,
        songName:` O Bedardeya<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/O Bedardeya.jpg"
    },
    {
        id: 30,
        songName:`O Desh Mere Teri Shan Pe  <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/desh mere.jpg"
    },
    {
        id: 31,
        songName:`Pal Kaisa Pal Palme Jaye <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/pal kais pal.jpg"
    },
    {
        id: 32,
        songName:` Phir Aur kya Chahiye<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/phir aur kya chahiye.jpg"
    },
    {
        id: 33,
        songName:`Saware <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/Saware.jpg"
    },
    {
        id: 34,
        songName:` Shayad<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/shyad.jpg"
    },
    {
        id: 35,
        songName:` Sooraj Dooba Hain Yaroo<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/Sooraj Dooba Hain.jpg"
    },
    {
        id: 36,
        songName:` Tera Yaar Hoon Main<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/tera yar hoon main.jpg"
    },
    {
        id: 37,
        songName:` Tu Har Lamha<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/tu har lamha.jpg"
    },
    {
        id: 38,
        songName:`Tum kya Mile <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/Tum Kya Mile.jpg"
    },
    {
        id: 39,
        songName:` What Jhumka<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/what jhumka.jpg"
    },
    {
        id: 40,
        songName:` Woh Din Bhi Kya Din The<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/woh din.jpg"
    },
    {
        id: 41,
        songName:` Sanam Re<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"imags/sanam re.jpg"
    },
    
]

//search data start

let search_result = document.getElementsByClassName('search_result')[0];
song.forEach(element => {
    const {id, songName , poster} = element;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href= "#" + id
    card.innerHTML =`<img src="${poster}" alt="">
    <div class="content">
        ${songName}
    </div>`;
    search_result.appendChild(card);
});

Alen_song.forEach(element => {
    const {Alenid, songName , poster} = element;
    let card = document.createElement('a');
    card.classList.add('card');
    // card.href= "#" + id
    card.innerHTML =`<img src="${poster}" alt="">
    <div class="content">
        ${songName}
    </div>`;
    search_result.appendChild(card);
     
    card.addEventListener('click', ()=>{

        index = Alenid;
        // console.log(index);
        music.src=`audio/Alen/${index}.mp3`;
        download_music.href = `audio/Alen/${index}.mp3`;
        // poster_master_play.src=`imags/bg.png`;
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');

        let songTitles = Alen_song.filter((els) =>{
            return els.Alenid == index;
        });

        songTitles.forEach(elss =>{
            let { songName , poster } = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
            poster_master_play.src=poster;
            content_h1.innerHTML = songName;
            ssc_para.innerHTML=' ';
            // song_side.setProperty('--background', 'url(poster)');
        });
        
        search_result.style.display="none";
        wave.classList.add('active1');
        
    })
});



Arijit_song.forEach(element => {
    const {id, songName , poster} = element;
    let card = document.createElement('a');
    card.classList.add('card');
    // card.href= "#" + id
    card.innerHTML =`<img src="${poster}" alt="">
    <div class="content">
        ${songName}
    </div>`;
    search_result.appendChild(card);
    
    card.addEventListener('click', ()=>{
        index=id;
        // console.log(index);
        music.src=`audio/Arijit/${index}.mp3`;
        download_music.href = `audio/Arijit/${index}.mp3`;
        // poster_master_play.src=`imags/bg.png`;
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');

        let songTitles = Arijit_song.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let { songName , poster } = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
            poster_master_play.src=poster;
            content_h1.innerHTML = songName;
            ssc_para.innerHTML=' ';
            // song_side.setProperty('--background', 'url(poster)');
            
        });
        search_result.style.display="none";
        wave.classList.add('active1');
        // let style_element = document.head.appendChild(document.createElement("style"));
        // style_element.innerHTML = ".song_side.after{background: white;}";
    })
});


let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup' , ()=>{
    let input_value = input.value.toUpperCase();
    let items = search_result.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value) > - 1 ) {
            
            items[index].style.display= "flex";
        } else {
            items[index].style.display= "none";
        }
        if (input_value == 0) {

            search_result.style.display="none";
            
        } else {
            search_result.style.display="";
        }
        
    }
})
//search data end

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{ 
    e.getElementsByTagName('img')[0].src=song[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = song[i].songName;
})

let arijitsingh = document.getElementById('arijitsingh');
let alkayagani = document.getElementById('alkayagani');
let alenwalker = document.getElementById('alenwalker');

arijitsingh.addEventListener('click', ()=>{
    arijitsingh.href = 'arijit.html';
    
})
alenwalker.addEventListener('click', ()=>{
    alenwalker.href = 'index.html';
})














