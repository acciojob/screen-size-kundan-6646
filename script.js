//your JS code here. If required.
const h1 = document.getElementsByTagName('h1')[0];
function updateH1Text(x, y) {
	h1.innerText = `Width: ${x} and Height: ${y}`;
}
updateH1Text(window.innerWidth, window.innerHeight);

window.onresize = () => {
	updateH1Text(window.innerWidth, window.innerHeight);
}