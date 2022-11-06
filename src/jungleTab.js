export default function jungleTab() {
	console.log('This is the jungle tab')
	function appendBody() {
		const plot = document.createElement('div');
		plot.classList.add('plot');
		const plotName = document.createElement('div');
		plotName.textContent = 'Plot Name';
		const trashIcon = document.createElement('div');
		trashIcon.textContent = 'Trash Box';
		plot.appendChild(plotName);
		plot.appendChild(trashIcon);

		return plot
	}
	function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
	const body = document.querySelector(".body");
	removeAllChildNodes(body)
	body.appendChild(appendBody());
	body.appendChild(appendBody());
}