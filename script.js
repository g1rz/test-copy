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
ORG;CHARSET=UTF-8:=D0=90=D0=B4=D0=B8=D0=BA=D1=82
TITLE;CHARSET=UTF-8:=D0=9F=D1=80=D0=BE=D0=B3=D1=80=D0=B0=D0=BC=D0=BC=D0=B8=D1=81=D1=82
FN;CHARSET=UTF-8:=D0=9F=D0=B5=D1=88=D0=BA=D0=BE=D0=B2 =D0=A1=D0=B5=D1=80=D0=B3=D0=B5=D0=B9 =
=D0=9D=D0=B8=D0=BA=D0=BE=D0=BB=D0=B0=D0=B2=D0=B5=D1=87=D0=B8TEST
EMAIL;type=WORK:ps@adictgroup.ru
TEL;TYPE=VOICE:89501284824
END:VCARD`;

const blobContact = new Blob([vcfTemplate], {type: 'text/x-vcard'});
download.href = URL.createObjectURL(blobContact);
download.download = 'vcard.vcf';

const textTemplate = `текстовый документ - test`;

const blobText = new Blob([textTemplate], {type: 'text/plain;charset=UTF-8'});
downloadText.href = URL.createObjectURL(blobText);
