const bandHtml = document.querySelector('#bandlist');
const bands = [
'Kids N Cats','Absintomuito','Beyoncé', 'Of Monsters and Men', 
'Woodkid', 'Francisco, el hombre', 'Chico Buarque de Holanda', 'Florence + The Machine',
'Liniker', 'Abba', 'Jaloo', 'Jhonny Hooker', 'Pabllo Vittar', 'Banda UÓ', 'Elza Soares',
'Marisa Monte', 'Adele', 'Miriam Makeba', 'The Black Keys', 'Rihanna','Stromae', 'Barns Courtney',
'Adele', 'Amy Winehouse', 'Birdy', 'Duran Duran', 'DNCE', 'Ellen Oléria', 'Fall Out Boy',
'Flume', 'Foster the people', 'The Freak Fandango Orchestra', 'Hozier', 'Imagine Dragons', 
'Arctic Monkeys', 'Jain', 'Kaleo', 'The Lumineers', 'Luiza Possi', 'Maiara & Maraisa',
'Marjorie Estiano', 'Mart\'nália', 'Møme', 'Pitty', 'Seafret', 'Shakira', 'Simone & Simária',
'Snoop Dogg', 'X Ambassadors', 'Yann Tiersen'];

function strip(bandName) {
    return bandName.replace(/^(a |an |the )/i, '').trim();
}

const sortedBands = bands.sort((a,b) => strip(a) > strip(b) ? 1 : -1);

bandHtml.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
