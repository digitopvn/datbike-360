window.onresize = function () {
	const sh = window.innerHeight;
	const sw = window.innerWidth;

	const ratio = sh / sw;

	const eles = document.getElementsByClassName("player-360");
	// console.log(`eles`, eles);
	if (eles.length > 0) {
		const ele = eles[0];
		if (sh < sw) {
			const size = ele.getBoundingClientRect();
			console.log(`size`, size);
			const sy = size.height / sw;
			const sx = size.width * sy;
			ele.style.transform = `scale(${sy}, ${sy}) translate(0%, -50%)`;
		} else {
			ele.style.transform = `translate(0, 0)`;
		}
	}
};

window.onload = function () {
	window.CI360.init();
	console.log(`Copyright by DIGITOP (aka TOP GROUP Vietnam)`);

	// window.onresize();
};
