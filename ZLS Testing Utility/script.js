import { ZaisLyricSync } from "../zls.js";

const song = new Audio();
song.loop = true;
song.volume = 0.2;
song.src = './audios_goldenhour.wav';
const zlsHolder = document.querySelector('.zls-lyric-holder');
const lyrics = {
    "lyrics": "[15.38] It was just two lovers, sittin' in the car, listening to Blonde\n[18.89] Fallin' for each other, pink and orange skies, feelin' super childish\n[23.27] No Donald Glover, missed call from my mother\n[26.70] Like, \"Where you at tonight?\" Got no alibi\n[28.83] I was all alone with the love of my life\n[33.71] She's got glitter for skin, my radiant beam in the night\n[40.81] I don't need no light to see you\n[46.08] Shine\n[50.10] It's your golden hour (oh-ooh-oh)\n[58.45] You slow down time\n[65.15] In your golden hour (oh-ooh-oh)\n[76.55] We were just two lovers, feet up on the dash, drivin' nowhere fast\n[80.26] Burnin' through the summer, radio on blast, make the moment last\n[84.28] She got solar power, minutes feel like hours\n[87.92] She knew she was the baddest, can you even imagine\n[89.92] Fallin' like I did for the love of my life?\n[94.83] She's got glow on her face, a glorious look in her eyes\n[102.08] My angel of light\n[105.13] I was all alone with the love of my life\n[110.10] She's got glitter for skin, my radiant beam in the night\n[117.22] I don't need no light to see you\n[122.33] Shine\n[126.18] It's your golden hour (oh-ooh-oh)\n[134.67] You slow down time\n[141.35] In your golden hour (oh-ooh-oh)\n[147.09]  "
}

const ZLSInstance = new ZaisLyricSync(zlsHolder, song, lyrics);
ZLSInstance.loadHandler();
ZLSInstance.logPropierties();

song.addEventListener('timeupdate', (event) => {
    let currentTime = song.currentTime;
    ZLSInstance.updateTime(currentTime);
}, false);

setTimeout(() => {song.play()}, 2500);