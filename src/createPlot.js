import PlotClass from './PlotClass.js'
import plotCreator from './plotCreator.js';

export default function createPlot() {
	function creatorBox() {
		const modal = document.createElement('div');
		modal.classList.add('modal');
		const creatorContainer = document.createElement('div');
		creatorContainer.classList.add('creatorContainer');
		const inputContainer = document.createElement('div');
		inputContainer.classList.add('inputContainer');
		const title = document.createElement('span');
		title.classList.add('creatorTitle');
		title.textContent = "Plot Name"
		const nameInput = document.createElement('input');
		nameInput.classList.add('nameInput');
		const dropdown = document.createElement('select');
		const jungleOption = document.createElement('option');
		jungleOption.textContent = 'Jungle Beach';
		const coconutsOption = document.createElement('option');
		coconutsOption.textContent = 'Coconuts Beach';
		const volcanoOption = document.createElement('option');
		volcanoOption.textContent = 'Volcano Island';
		const submitButton = document.createElement('button');
		submitButton.classList.add('submitButton');
		submitButton.textContent = 'Submit';
		submitButton.addEventListener('click', plotCreator)
		submitButton.addEventListener('click', closeModal)
		const closeButton = document.createElement('div');
		closeButton.classList.add('closeButton');
		closeButton.textContent = 'X';
		closeButton.addEventListener('click', closeModal);
		function closeModal() {
			modal.style.display = 'none';
		}
		inputContainer.appendChild(title);
		inputContainer.appendChild(nameInput);
		dropdown.appendChild(jungleOption);
		dropdown.appendChild(coconutsOption);
		dropdown.appendChild(volcanoOption);
		inputContainer.appendChild(dropdown)
		inputContainer.appendChild(submitButton);
		creatorContainer.appendChild(inputContainer);
		creatorContainer.appendChild(closeButton);
		modal.appendChild(creatorContainer);
		modal.style.display = 'flex';
		return modal
	}
	const body = document.querySelector("body");
	body.appendChild(creatorBox());
}