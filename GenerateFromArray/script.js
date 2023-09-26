const array = [
    {
        name: 'CSS',
        src: './Assets/css.svg',
    },
    {
        name: 'JavaScript',
        src: './Assets/js.svg',
    },
    {
        name: 'Tailwind',
        src: './Assets/tailwind.svg',
    },
    {
        name: 'Vue JS',
        src: './Assets/vuejs.svg',
    },
    {
        name: 'React JS',
        src: './Assets/reactjs.svg',
    }
]
const DOM = document.querySelector('.header')
function Generate() {
    //console.log(DOM);
    for(let item of array) {
        const biggercards = document.createElement('div');
        biggercards.className = 'biggercards';

        const cards = document.createElement('div');
        cards.className = 'cards';
        
        const images = document.createElement('div');
        images.className = 'images';

        const svgs = document.createElement('img');
        svgs.src = item.src;
        svgs.className = 'svgs';

        const names = document.createElement('div');
        names.innerText = item.name;
        names.className = 'names';

        images.appendChild(svgs);
        cards.appendChild(images);
        cards.appendChild(names);
        biggercards.appendChild(cards);

        DOM.appendChild(biggercards);
        console.log(DOM);
    }
}