const chordsBtn = document.querySelector('.chords-btn');
const chordsModal = document.querySelector('.chords');
const closeChords = document.querySelector('.chords .close');

const tabsBtn = document.querySelector('.tabs-btn');
const tabsModal = document.querySelector('.tabs');
const closeTabs = document.querySelector('.tabs .close');

const toggleSearch = document.querySelector('.toggle-search');
const searchSection = document.querySelector('.search-section');


const toggleSearchSection = () => {
    isSearchSectionDisplayNone() ? searchSection.style.display = 'inherit' : searchSection.style.display = '';
}

const isSearchSectionDisplayNone = () => {
    const displayProp = window.getComputedStyle(searchSection).getPropertyValue('display');
    return displayProp === 'none';
}

toggleSearch.addEventListener('click', toggleSearchSection);


const showChords = () => {
    chordsModal.style.display = 'initial';
}

chordsBtn.addEventListener('click', showChords);

const hideChords = () => {
    chordsModal.style.display = 'none';
}

closeChords.addEventListener('click', hideChords);

const showTabs = () => {
    tabsModal.style.display = 'initial';
}

tabsBtn.addEventListener('click', showTabs);

const hideTabs = () => {
    tabsModal.style.display = 'none';
}

closeTabs.addEventListener('click', hideTabs);
