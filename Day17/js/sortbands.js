const bandHtml = document.querySelector('#bandlist');
const thumbnail = document.querySelector('.thumbnail');
var player;

const bands = [
'Kids N Cats','Absintomuito','Beyoncé', 'Of Monsters and Men', 
'Woodkid', 'Francisco, el hombre', 'Chico Buarque de Holanda', 'Florence and The Machine',
'Liniker', 'Abba', 'Jaloo', 'Jhonny Hooker', 'Pabllo Vittar', 'Banda UÓ', 'Elza Soares',
'Marisa Monte', 'Miriam Makeba', 'The Black Keys', 'Rihanna','Stromae', 'Barns Courtney',
'Adele', 'Amy Winehouse', 'Birdy', 'Duran Duran', 'DNCE', 'Ellen Oléria', 'Fall Out Boy',
'Flume', 'Foster the people', 'The Freak Fandango Orchestra', 'Hozier', 'Imagine Dragons', 
'Arctic Monkeys', 'Jain', 'Kaleo', 'The Lumineers', 'Luiza Possi', 'Maiara e Maraisa',
'Marjorie Estiano', 'Mart\'nália', 'Møme', 'Pitty', 'Seafret', 'Shakira', 'Simone e Simária',
'Snoop Dogg', 'X Ambassadors', 'Yann Tiersen'];

window.onYouTubeIframeAPIReady =function() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: '',
        events: {
        },
        playerVars: {
            'controls': 0,
            'showinfo': 0,
            'autoplay': 1,
            'modestbranding': 1,
            'iv_load_policy': 3,
            'rel': 0
        }
    });
}

function strip(bandName) {
    return bandName.replace(/^(a |an |the )/i, '').trim();
}

function stripToSearch(bandName) {
    return bandName.replace(/ /g, '+').trim();
}

function ytVideo(e) {
    let bandNameSearch = stripToSearch(e.target.dataset.bandName)
    let id;
    let api = {
        key: 'AIzaSyDzeBQ-QVTYcRyePQ2NxD49ZvjWMsVbSp8',
        part: 'snippet',
        maxResults: 3,
        order: 'relevance',
        type: 'video'
    }
    var apiLink = `https://www.googleapis.com/youtube/v3/search?part=${api.part}&maxResults=${api.maxResults}&order=${api.order}&type=${api.type}&q=${bandNameSearch}&key=${api.key}`;

    fetch(apiLink)
	    .then(blob => blob.json())
	    .then(data => {
            id = data.items[0].id.videoId;
            player.loadVideoById(id, 5, "large");
            player.seekTo(0);
            thumbnail.src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
            thumbnail.alt = id;
        });
}

const sortedBands = bands.sort((a,b) => strip(a) > strip(b) ? 1 : -1);

bandHtml.innerHTML = sortedBands.map(band => `<li data-band-name="${band}">${band}</li>`).join('');

bandHtml.querySelectorAll('li').forEach(item => item.addEventListener('click', ytVideo));

thumbnail.addEventListener('click', function(e){
    window.open(`https://www.youtube.com/watch?v=${e.target.alt}`);
});

bandHtml.addEventListener('mouseover', function(){
    bandHtml.classList.add('open');
    thumbnail.classList.add('open');
    document.querySelector('#player').classList.add('open');
});

bandHtml.addEventListener('mouseout', function(){
    bandHtml.classList.remove('open');
    thumbnail.classList.remove('open');
    document.querySelector('#player').classList.remove('open');
});

document.addEventListener('keydown', function(e){
    if(e.keyCode == 32 && player.getPlayerState() == 1) {
        player.pauseVideo();
    } else if(e.keyCode == 32 && player.getPlayerState() == 2){
        player.playVideo();
    }
});