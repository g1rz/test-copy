// const elPure = document.querySelector('#pure');
// const elParent = document.querySelector('#parent');
// const elCopy = document.querySelector('#copy-btn');

// const copy = elPure.cloneNode(true);

// elCopy.addEventListener('click', () => {
//     elParent.appendChild(copy)
// })

const download = document.querySelector('#download');
const downloadText = document.querySelector('#downloadText');

const vcfTemplate = `BEGIN:VCARD
VERSION:3.0
ORG;CHARSET=UTF-8:Адикт
TITLE;CHARSET=UTF-8:Программист
FN;CHARSET=UTF-8:Пешков Сергей НиколавечиTEST
EMAIL;type=WORK:ps@adictgroup.ru
TEL;TYPE=VOICE:89501284824
END:VCARD`;

const blobContact = new Blob([vcfTemplate], {type: 'text/x-vcard;charset=UTF-8'});
download.href = URL.createObjectURL(blobContact);
download.download = 'vcard-new.vcf';

const textTemplate = `текстовый документ - test`;

const blobText = new Blob([textTemplate], {type: 'text/plain;charset=UTF-8'});
downloadText.href = URL.createObjectURL(blobText);
