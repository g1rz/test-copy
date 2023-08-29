const elPure = document.querySelector('#pure');
const elParent = document.querySelector('#parent');
const elCopy = document.querySelector('#copy-btn');

const copy = elPure.cloneNode(true);

elCopy.addEventListener('click', () => {
    elParent.appendChild(copy)
})
