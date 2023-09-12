// const elPure = document.querySelector('#pure');
// const elParent = document.querySelector('#parent');
// const elCopy = document.querySelector('#copy-btn');

// const copy = elPure.cloneNode(true);

// elCopy.addEventListener('click', () => {
//     elParent.appendChild(copy)
// })

const download = document.querySelector('#download')

const vcfTemplate = `
BEGIN:VCARD
VERSION:3.0
ORG:Адикт
TITLE:Программист
FN:Пешков Сергей НиколавечиTEST
EMAIL;CHARSET=UTF-8;type=WORK:ps@adictgroup.ru
TEL;TYPE=VOICE:89501284824
END:VCARD`;

const blobContact = new Blob([vcfTemplate], {type: 'text/x-vcard'});
download.href = URL.createObjectURL(blobContact)