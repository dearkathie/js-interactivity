/*Name this external file gallery.js*/

var newId = document.getElementById('image');

function upDate(previewPic) {
  newId.innerHTML = previewPic.alt;
  newId.style.background = "url('" + previewPic.src + "')";
}

function unDo() {
  newId.style.background = "#8e68ff";
  newId.innerHTML = 'Hover over an image';
}
