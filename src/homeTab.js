export default function homeTab() {
	function appendBody() {
		const homeBody = document.createElement('div');
		const homeContainer = document.createElement('div');
		homeContainer.classList.add('homeContainer');
		homeBody.classList.add('homeBody');
		const homeName = document.createElement('h2');
		homeName.textContent = 'Eastern Opportunities Land Management';
		homeName.classList.add('homeName')
		const homeDescription = document.createElement('div');
		homeDescription.textContent = 'Please use this page to track the different plot of land you would like to sell in different areas. You can use this website to track the plot sizes, prices, location, and more information. You can add new plots of land as you purchase them, and you can view all of your plots at the same time. Please contact jackson@lowlifewebdesigns.com if you have any questions.';
		homeBody.appendChild(homeContainer);
		homeContainer.appendChild(homeName);
		homeContainer.appendChild(homeDescription);

		return homeBody
	}
	function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
	const body = document.querySelector(".body");
	removeAllChildNodes(body)
	body.appendChild(appendBody());
}