const downloadBtn = document.getElementById('download-btn');
const image = document.querySelector('img');

downloadBtn.addEventListener('click', () => {
	const link = document.createElement('a');
	link.href = image.src;
	link.download = 'images/background.png';
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
});

//cv 