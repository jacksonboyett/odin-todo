import PlotClass from './PlotClass.js'
import {appendObject} from './index.js'

export default function plotCreator() {
	let title = document.querySelector('.nameInput').value;
	let area = document.querySelector('select').value;
	let plotObject = new PlotClass(title, area);
	appendObject(plotObject)
	document.querySelector('.nameInput').remove()
	document.querySelector('select').remove();
}