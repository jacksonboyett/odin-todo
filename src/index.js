import _ from 'lodash';
import './style.css';
import jungleTab from './jungleTab.js';
import homeTab from './homeTab.js';
import createPlot from './createPlot.js';
import plotsCompiler from './PlotClass';

export function component() {
	const page = document.createElement('div');
	page.classList.add('page');
	const header = document.createElement('div');
	header.classList.add('header');
	const logo = document.createElement('h1');
	logo.classList.add('logo');
	logo.textContent = 'Eastern Opportunities';
	const sidebar = document.createElement('div');
	sidebar.classList.add('sidebar');
	const nav = document.createElement('ul');
	const home = document.createElement('li');
	home.textContent = 'Home';
	home.addEventListener('click', homeTab)
	const jungle = document.createElement('li');
	jungle.textContent = 'Jungle Beach';
	jungle.addEventListener('click', jungleTab)
	const coconuts = document.createElement('li');
	coconuts.textContent = 'Coconuts Beach';
	const volcano = document.createElement('li');
	volcano.textContent = 'Volcano Island';
	const body = document.createElement('div');
	body.classList.add('body');
	const testDiv = document.createElement('div');
	testDiv.classList.add('testDiv');
	const addButton = document.createElement('button');
	addButton.classList.add('addButton');
	addButton.textContent = 'Add Plot';
	addButton.addEventListener('click', createPlot)


	
	page.appendChild(header);
	header.append(logo);
	page.appendChild(sidebar);
	sidebar.append(nav);
	nav.append(home);
	nav.append(jungle);
	nav.append(coconuts);
	nav.append(volcano);
	page.append(body)
	body.appendChild(testDiv);
	page.appendChild(addButton);
	
	return page;
	}
document.body.appendChild(component());
homeTab();

let allPlots= [];
export function appendObject(plotObject) {
	allPlots.push(plotObject);
	console.log(allPlots)
}

