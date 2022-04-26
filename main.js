const chordsBtn = document.querySelector('.chords-btn');
const chordsModal = document.querySelector('.chords');
const closeChords = document.querySelector('.chords .close');

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh' `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh' `${vh}px`);
});


const showChords = () => {
    chordsModal.style.display = 'initial';
}

chordsBtn.addEventListener('click', showChords);

const hideChords = () => {
    chordsModal.style.display = 'none';
}

closeChords.addEventListener('click', hideChords);