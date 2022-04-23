const chordsBtn = document.querySelector('.chords-btn');
const chordsModal = document.querySelector('.chords');
const closeChords = document.querySelector('.chords .close');



const showChords = () => {
    chordsModal.style.display = 'initial';
}

chordsBtn.addEventListener('click', showChords);

const hideChords = () => {
    chordsModal.style.display = 'none';
}

closeChords.addEventListener('click', hideChords);