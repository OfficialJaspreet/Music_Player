let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = 
[
    {
        img : 'images/0-To-100.jpg',
        name : '0-To-100',
        artist : 'Sidhu Moosewala',
        music : 'music/0-To-100.mp3'
    },
   
    {
        img : 'images/ajkalve.jpg',
        name : 'Aj kal ve',
        artist : 'Sidhu Mosse Wala',
        music : 'music/Aj Kal Ve.mp3'
    },
    {
        img : 'images/47.jpg',
        name : '47',
        artist : 'Sidhu Moosewala,Mist & Steel Banglez',
        music : 'music/47.mp3'
    },
    {
        img : 'images/295.jpg',
        name : '295',
        artist : 'Sidhu Moosewala',
        music : 'music/295.mp3'
    },
    {
        img : 'images/approach.jpg',
        name : 'Approach',
        artist : 'Sidhu Moosewala',
        music : 'music/Approach.mp3'
    },
    {
        img : 'images/aroma.jpg',
        name : 'Aroma',
        artist : 'Sidhu Moosewala',
        music : 'music/Aroma.mp3'
    },
    {
        img : 'images/BnW.jpg',
        name : 'B n W',
        artist : 'Sidhu Moosewala',
        music : 'music/B n W.mp3'
    },
    {
        img : 'images/baapu.jpg',
        name : 'Baapu',
        artist : 'Sidhu Moosewala',
        music : 'music/Baapu.mp3'
    },
    {
        img : 'images/bad.jpg',
        name : 'Bad',
        artist : 'Sidhu Moosewala',
        music : 'music/Bad.mp3'
    },
    {
        img : 'images/Badfella.jpg',
        name : 'Badfella',
        artist : 'Sidhu Moosewala',
        music : 'music/Badfella.mp3'
    },
    {
        img : 'images/Badmashi.jpg',
        name : 'Badmashi',
        artist : 'Sidhu Moosewala',
        music : 'music/Badmashi.mp3'
    }, {
        img : 'images/baibai.jpg',
        name : 'Bai Bai',
        artist : 'Gulab Sandhu,Sidhu Moosewala',
        music : 'music/Bai Bai.mp3'
    },
    {
        img : 'images/bambiha-bole.jpg',
        name : 'Bambiha Bole',
        artist : 'Amrit Maan,Sidhu Moosewala',
        music : 'music/Bambiha Bole.mp3'
    },
    {
        img : 'images/bitch-im-back.jpg',
        name : 'Bitch Im Back',
        artist : 'Sidhu Moosewala',
        music : 'music/Bitch Im Back.mp3'
    },
    {
        img : 'images/Bloodlust.jpg',
        name : 'Bloodlust',
        artist : 'Sidhu Moosewala',
        music : 'music/Bloodlust.mp3'
    },
    {
        img : 'images/brownshortie.jpg',
        name : 'Brown Shortie',
        artist : 'Sidhu Moosewala',
        music : 'music/Brown Shortie.mp3'
    },
    {
        img : 'images/Built-Different.jpg',
        name : 'Built Different',
        artist : 'Sidhu Moosewala',
        music : 'music/Built Different.mp3'
    },
    {
        img : 'images/burberry.jpg',
        name : 'Burberry',
        artist : 'Sidhu Moosewala',
        music : 'music/Burberry Original.mp3'
    },
    {
        img : 'images/calaboose.jpg',
        name : 'Calaboose',
        artist : 'Sidhu Moosewala',
        music : 'music/Calaboose.mp3'
    },
    {
        img : 'images/celebrity-killer.jpg',
        name : 'Celebrity Killer',
        artist : 'Sidhu Moosewala',
        music : 'music/Celebrity Killer.mp3'
    },
    {
        img : 'images/chosen.jpg',
        name : 'Chosen',
        artist : 'Sidhu Moosewala',
        music : 'music/Chosen.mp3'
    },
    {
        img : 'images/cutoff.jpg',
        name : 'Cut Off',
        artist : 'Sidhu Moosewala',
        music : 'music/Cut Off.mp3'
    },
    {
        img : 'images/dark-love.jpg',
        name : 'Dark Love',
        artist : 'Sidhu Moosewala',
        music : 'music/Dark Love.mp3'
    },
    {
        img : 'images/dawood.jpg',
        name : 'Dawood',
        artist : 'Sidhu Moosewala',
        music : 'music/Dawood.mp3'
    },
    {
        img : 'images/dear.jpg',
        name : 'Dear Mama',
        artist : 'Sidhu Moosewala',
        music : 'music/Dear Mama.mp3'
    },
    {
        img : 'images/death-route.jpg',
        name : 'Death Route',
        artist : 'Sidhu Moosewala',
        music : 'music/Death Route.mp3'
    },
    {
        img : 'images/devil.jpeg',
        name : 'Devil',
        artist : 'Sidhu Moosewala',
        music : 'music/Devil.mp3'
    },
    {
        img : 'images/dhakka.jpg',
        name : 'Dhakka',
        artist : 'Sidhu Moosewala',
        music : 'music/Dhakka.mp3'
    },
    {
        img : 'images/doctor.jpg',
        name : 'Doctor',
        artist : 'Sidhu Moosewala',
        music : 'music/Doctor.mp3'
    },
    {
        img : 'images/teri-meri-jodi.jpg',
        name : 'Doggar',
        artist : 'Sidhu Moosewala',
        music : 'music/Doggar.mp3'
    },
    {
        img : 'images/dollar.jpg',
        name : 'Dollar',
        artist : 'Sidhu Moosewala',
        music : 'music/Dollar.mp3'
    },
    {
        img : 'images/double-barrel.jpg',
        name : 'Double Barrel',
        artist : 'Sidhu Moosewala,Homi Pabla',
        music : 'music/Double Barrel.mp3'
    },
    {
        img : 'images/everybody-hurts.jpg',
        name : 'Everybody Hurts',
        artist : 'Sidhu Moosewala',
        music : 'music/Everybody Hurts.mp3'
    },
    {
        img : 'images/famous.jpg',
        name : 'Famous',
        artist : 'Sidhu Moosewala',
        music : 'music/Famous.mp3'
    },
    {
        img : 'images/forget-about-it.jpg',
        name : 'Forget About It',
        artist : 'Sidhu Moosewala',
        music : 'music/Forget About It.mp3'
    },
    {
        img : 'images/fuck-em-all.jpg',
        name : 'Fuck Em All',
        artist : 'Sidhu Moosewala',
        music : 'music/Fuck Em All.mp3'
    },
    {
        img : 'images/g-wagon.jpg',
        name : 'G Wagon',
        artist : 'Sidhu Moosewala,Gurlez Akhter',
        music : 'music/G Wagon.mp3'
    },
    {
        img : 'images/gaddari.jpg',
        name : 'Gaddari',
        artist : 'Sidhu Moosewala',
        music : 'music/Gaddari.mp3'
    },
    {
        img : 'images/gaddi.jpg',
        name : 'Gaddi',
        artist : 'Sidhu Moosewala',
        music : 'music/Gaddi.mp3'
    },
    {
        img : 'images/game.jpg',
        name : 'Game',
        artist : 'Sidhu Moosewala',
        music : 'music/Game.mp3'
    },
    {
        img : 'images/goat.jpg',
        name : 'Goat',
        artist : 'Sidhu Moosewala',
        music : 'music/Goat.mp3'
    },
    {
        img : 'images/g-shit.jpg',
        name : 'G-Shit',
        artist : 'Sidhu Moosewala',
        music : 'music/G-Shit.mp3'
    },
    {
        img : 'images/hathyar.jpg',
        name : 'Hathyar',
        artist : 'Sidhu Moosewala',
        music : 'music/Hathyar.mp3'
    },
    {
        img : 'images/homicide.jpg',
        name : 'Homicide',
        artist : 'Sidhu Moosewala,Big Boi Deep',
        music : 'music/Homicide.mp3'
    },
    {
        img : 'images/idgaf.jpg',
        name : 'IDGAF',
        artist : 'Sidhu Moosewala',
        music : 'music/IDGAF.mp3'
    },
    {
        img : 'images/im-better-now.jpg',
        name : 'I m Better Now',
        artist : 'Sidhu Moosewala',
        music : 'music/I m Better Now.mp3'
    },
    {
        img : 'images/invincible.jpg',
        name : 'Invincible',
        artist : 'Sidhu Moosewala',
        music : 'music/Invincible.mp3'
    },
    {
        img : 'images/issa-jatt.jpg',
        name : 'Issa Jatt',
        artist : 'Sidhu Moosewala',
        music : 'music/Issa Jatt.mp3'
    },
    {
        img : 'images/its-all-about-you.jpg',
        name : 'Its All About You',
        artist : 'Sidhu Moosewala',
        music : 'music/Its All About You.mp3'
    },
    {
        img : 'images/jaan.jpg',
        name : 'Jaan',
        artist : 'Sidhu Moosewala',
        music : 'music/Jaan.mp3'
    },
    {
        img : 'images/jandi-vaar.jpg',
        name : 'Jaandi Vaar',
        artist : 'Sidhu Moosewala',
        music : 'music/Jaandi Vaar.mp3'
    },
    {
        img : 'images/jatt-da-muqabla.jpg',
        name : 'Jatt Da Muqabla',
        artist : 'Sidhu Moosewala',
        music : 'music/Jatt Da Muqabla.mp3'
    },
    {
        img : 'images/jatti-jeone-morh-wargi.jpg',
        name : 'Jatti Jeone Morh Wargi',
        artist : 'Sidhu Moosewala',
        music : 'music/Jatti Jeone Morh Wargi.mp3'
    },
    {
        img : 'images/just-listen.jpg',
        name : 'Just Listen',
        artist : 'Sidhu Moosewala',
        music : 'music/Just Listen.mp3'
    },
    {
        img : 'images/legend.jpg',
        name : 'Legend',
        artist : 'Sidhu Moosewala',
        music : 'music/Legend.mp3'
    },
    {
        img : 'images/levels.jpg',
        name : 'Levels',
        artist : 'Sidhu Moosewala',
        music : 'music/Levels.mp3'
    },
    {
        img : 'images/life-style.jpg',
        name : 'Life Style',
        artist : 'Sidhu Moosewala,Banka',
        music : 'music/Life Style.mp3'
    },
    {
        img : 'images/love-sick.jpg',
        name : 'LOVE-SICK',
        artist : 'Sidhu Moosewala',
        music : 'music/LOVE-SICK.mp3'
    },
    {
        img : 'images/mafia-style.jpg',
        name : 'Maafia Style',
        artist : 'Sidhu Moosewala',
        music : 'music/Maafia Style.mp3'
    },
    {
        img : 'images/malwa-block.jpg',
        name : 'Malwa Block',
        artist : 'Sidhu Moosewala',
        music : 'music/Malwa Block.mp3'
    },
    {
        img : 'images/me-and-my-girlfriend.jpg',
        name : 'Me And My Girlfriend',
        artist : 'Sidhu Moosewala',
        music : 'music/Me And My Girlfriend.mp3'
    },
    {
        img : 'images/moosedrila.jpg',
        name : 'Moosedrilla',
        artist : 'Sidhu Moosewala',
        music : 'music/Moosedrilla.mp3'
    },
    {
        img : 'images/muchh.jpg',
        name : 'Muchh',
        artist : 'Sidhu Moosewala,Veer Sandhu',
        music : 'music/Muchh.mp3'
    },
    {
        img : 'images/my-block.jpg',
        name : 'My Block',
        artist : 'Sidhu Moosewala',
        music : 'music/My Block.mp3'
    },
    {
        img : 'images/never-fold.jpg',
        name : 'Never Fold',
        artist : 'Sidhu Moosewala ft Sunny Malton',
        music : 'music/Never Fold.mp3'
    },
    {
        img : 'images/no-worries.jpg',
        name : 'No Worries',
        artist : 'Sidhu Moosewala',
        music : 'music/No Worries.mp3'
    },
    {
        img : 'images/old-skool.jpg',
        name : 'Old Skool',
        artist : 'Sidhu Moosewala,Prem Dhillon,Naseeb',
        music : 'music/Old Skool.mp3'
    },
    {
        img : 'images/outlaw.jpg',
        name : 'Outlaw',
        artist : 'Sidhu Moosewala',
        music : 'music/Outlaw.mp3'
    },
    {
        img : 'images/paapi.jpg',
        name : 'Paapi',
        artist : 'Sidhu Moosewala,Rangrez',
        music : 'music/Paapi.mp3'
    },
    {
        img : 'images/panjab.jpg',
        name : 'Panjab',
        artist : 'Sidhu Moosewala',
        music : 'music/Panjab.mp3'
    },
    {
        img : 'images/pbx-1.png',
        name : 'PBX 1',
        artist : 'Sidhu Moosewala',
        music : 'music/PBX 1.mp3'
    },
    {
        img : 'images/poison.jpg',
        name : 'Poison',
        artist : 'Sidhu Moosewala',
        music : 'music/Poison.mp3'
    },
    {
        img : 'images/power.jpg',
        name : 'Power',
        artist : 'Sidhu Moosewala',
        music : 'music/Power.mp3'
    },
    {
        img : 'images/racks.jpg',
        name : 'Racks And Rounds',
        artist : 'Sidhu Moosewala,Sikander Kahlon',
        music : 'music/Racks And Rounds.mp3'
    },
    {
        img : 'images/regret.jpg',
        name : 'Regret',
        artist : 'Sidhu Moosewala',
        music : 'music/Regret.mp3'
    },
    {
        img : 'images/russian-tank.jpg',
        name : 'Russian Tank',
        artist : 'Sidhu Moosewala,Khush Romana',
        music : 'music/Russian Tank.mp3'
    },
    {
        img : 'images/saab.jpg',
        name : 'Saab',
        artist : 'Sidhu Moosewala',
        music : 'music/Saab.mp3'
    },
    {
        img : 'images/same-beef.jpg',
        name : 'Same Beef',
        artist : 'Sidhu Moosewala',
        music : 'music/Same Beef.mp3'
    },
    {
        img : 'images/sanju.jpg',
        name : 'Sanju',
        artist : 'Sidhu Moosewala',
        music : 'music/Sanju.mp3'
    },
    {
        img : 'images/Satisfy.jpg',
        name : 'Satisfy',
        artist : 'Sidhu Moosewala,Shooter Kahlon',
        music : 'music/Satisfy.mp3'
    },
    {
        img : 'images/scapgoat.jpg',
        name : 'Scapegoat',
        artist : 'Sidhu Moosewala',
        music : 'music/Scapegoat.mp3'
    },
    {
        img : 'images/selfmade.jpg',
        name : 'Selfmade',
        artist : 'Sidhu Moosewala',
        music : 'music/Selfmade.mp3'
    },
    {
        img : 'images/shelby.jpg',
        name : 'Shelby',
        artist : 'Sidhu Moosewala',
        music : 'music/Shelby.mp3'
    },
    {
        img : 'images/sidhu-son.jpg',
        name : 'Sidhu Son',
        artist : 'Sidhu Moosewala',
        music : 'music/Sidhu Son.mp3'
    },
    {
        img : 'images/signed-to-god.jpg',
        name : 'Signed To God',
        artist : 'Sidhu Moosewala',
        music : 'music/Signed To God.mp3'
    },
    {
        img : 'images/sin.jpg',
        name : 'Sin',
        artist : 'Sidhu Moosewala',
        music : 'music/Sin.mp3'
    },
    {
        img : 'images/so-high.jpg',
        name : 'So High',
        artist : 'Sidhu Moosewala',
        music : 'music/So High.mp3'
    },
    {
        img : 'images/sohne-lagde.jpg',
        name : 'Sohne Lagde',
        artist : 'Sidhu Moosewala',
        music : 'music/Sohne Lagde.mp3'
    },
    {
        img : 'images/syl.jpeg',
        name : 'syl',
        artist : 'Sidhu Moosewala',
        music : 'music/syl.mpeg'
    },
    {
        img : 'images/taare.jpg',
        name : 'Taare',
        artist : 'Sidhu Moosewala,Harlal Batth',
        music : 'music/Taare.mp3'
    },
    {
        img : 'images/tha-last-ride.jpg',
        name : 'The Last Ride',
        artist : 'Sidhu Moosewala',
        music : 'music/The Last Ride.mp3'
    },
    {
        img : 'images/these-days.jpg',
        name : 'These Days',
        artist : 'Sidhu Moosewala',
        music : 'music/These Days Full.mp3'
    },
    {
        img : 'images/tibbeyan-da-putt.jpg',
        name : 'Tibbeyan Da Putt',
        artist : 'Sidhu Moosewala',
        music : 'music/Tibbeyan Da Putt.mp3'
    },
    {
        img : 'images/tochan.jpg',
        name : 'Tochan',
        artist : 'Sidhu Moosewala',
        music : 'music/Tochan.mp3'
    },
    {
        img : 'images/trend.jpg',
        name : 'Trend Dhol Mix',
        artist : 'Sidhu Moosewala,DJ Hans',
        music : 'music/Trend Dhol Mix.mp3'
    },
    {
        img : 'images/Unfuckwithable.jpg',
        name : 'UNFUCKWITHABLE',
        artist : 'Sidhu Moosewala',
        music : 'music/UNFUCKWITHABLE.mp3'
    },
    {
        img : 'images/us.jpg',
        name : 'US',
        artist : 'Sidhu Moosewala,Raja Kumari',
        music : 'music/US.mp3'
    },
    {
        img : 'images/velly-banda.jpg',
        name : 'Velly Banda',
        artist : 'Sidhu Moosewala',
        music : 'music/Velly Banda.mp3'
    },
    {
        img : 'images/yaariyaan.jpg',
        name : 'Yaariyaan',
        artist : 'Sidhu Moosewala',
        music : 'music/Yaariyaan.mp3'
    },
    {
        img : 'images/youngest-in-charge.jpg',
        name : 'Youngest In Charge',
        artist : 'Sidhu Moosewala',
        music : 'music/Youngest In Charge.mp3'
    },
];

loadTrack(track_index);

function loadTrack(track_index)
{
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Playing music " + (track_index + 1) + " of " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
    random_bg_color();
}

function random_bg_color()
{
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let a;

    function populate(a)
    {
        for(let i=0; i<6; i++)
        {
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
    document.body.style.background = gradient;
}
function reset()
{
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack()
{
    isRandom ? pauseRandom() : playRandom();
}
function playRandom()
{
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom()
{
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack()
{
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack()
{
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack()
{
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack()
{
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack()
{
    if(track_index < music_list.length - 1 && isRandom === false)
    {
        track_index += 1;
    }
    else if(track_index < music_list.length - 1 && isRandom === true)
    {
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }
    else
    {
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack()
{
    if(track_index > 0)
    {
        track_index -= 1;
    }
    else
    {
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo()
{
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume()
{
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate()
{
    let seekPosition = 0;
    if(!isNaN(curr_track.duration))
    {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationMinutes;
    }
}