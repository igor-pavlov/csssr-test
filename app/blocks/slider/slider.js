import noUiSlider from 'nouislider';

const slider = document.querySelector('.slider');
const inputNumber = document.querySelector('.slider__input');

function buildSliderConfiguration() {
	const windowWidth = document.documentElement.clientWidth;
	let orientation;

	if (windowWidth < 769) {
		orientation = 'vertical';
	}
	else {
		orientation = 'horizontal';
	}

	return orientation;
}

function configureSlider() {
	const config = buildSliderConfiguration();
	const startPosition = 60;
	const startPositionFloat = startPosition.toFixed(2);

	if (slider.noUiSlider) {
		slider.noUiSlider.destroy();
	}

	noUiSlider.create(slider, {
		start: [startPositionFloat],
		step: 1,
		orientation: config,
		range: {
			min: 0,
			'19.2%': 25,
			'48.6%': 50,
			max: 100
		}
	}, true);

	inputNumber.value = startPositionFloat;
}

window.addEventListener('resize', configureSlider);
configureSlider();

slider.noUiSlider.on('update', function (values, handle) {
	inputNumber.value = values[handle];
});

inputNumber.addEventListener('change', function () {
	slider.noUiSlider.set([null, this.value]);
});


slider.addEventListener('keydown', function (e) {
	const value = Number(slider.noUiSlider.get());

	if (e.which === 37) {
		slider.noUiSlider.set(value - 5);
	}

	if (e.which === 39) {
		slider.noUiSlider.set(value + 5);
	}
});

const setHandle = function (className, position) {
	const setButton = document.getElementsByClassName(className)[0];
	setButton.addEventListener('click', function () {
		slider.noUiSlider.set(position);
		inputNumber.value = this.innerText;
	});
};

setHandle('slider__item_none', 0);
setHandle('slider__item_junior', 25);
setHandle('slider__item_middle', 50);
setHandle('slider__item_senior', 100);


