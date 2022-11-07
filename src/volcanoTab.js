import {returnPlots} from './index.js'

export default function volcanoTab() {
	console.log('This is the volcano tab')
	function appendBody() {
		const plot = document.createElement('div');
		plot.classList.add('plot');
		const plotName = document.createElement('div');
		plotName.textContent = 'Volcano plot';
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
	let allPlots = returnPlots();
	for (let i = 0; i < allPlots.length; i++) {
		console.log(i)
		if (allPlots[i].area === 'Volcano Island') {
			const plot = document.createElement('div');
			plot.classList.add('plot');
			const plotName = document.createElement('div');
			plotName.textContent = allPlots[i].title;
			const trashIcon = document.createElement('div');
			trashIcon.textContent = 'Trash Box';
			plot.appendChild(plotName);
			plot.appendChild(trashIcon);
			body.appendChild(plot);
		}
	}
}