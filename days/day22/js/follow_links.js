const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

const highlightLink = (event) => {
    const linkCoord = event.currentTarget.getBoundingClientRect();
    highlight.style.width = `${linkCoord.width + 7}px`;
    highlight.style.height = `${linkCoord.height}px`;
    highlight.style.top = `${linkCoord.top +  window.scrollY - 1}px`;
    highlight.style.left = `${linkCoord.left + window.scrollX - 3.5}px`;  
}

Array.from(triggers).forEach(link => link.addEventListener('mouseenter', highlightLink));