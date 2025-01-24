const getList = document.getElementById('item-list');

getList.addEventListener('click', event => {
  if (event.target.tagName === 'LI') {
    const items = getList.getElementsByTagName('li');
    for (let item of items) {
      item.classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
});

const colorPalette = document.querySelector(".color-palette");

colorPalette.addEventListener("click", selectColor);

function selectColor(event) {
 	console.log(event.target);
	const selectedColor = event.target.dataset.color;
}
