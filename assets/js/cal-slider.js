// range slider code =========================
// range slider code =========================
// range slider code =========================
const sliders = document.querySelectorAll('.slider');
const sliderValues = document.querySelectorAll('.sliderValue');

sliders.forEach((slider, index) => {
  // Set initial value
  sliderValues[index].value = slider.value;
  updateGradient(slider);

  // Update input field value when slider value changes
  slider.addEventListener('input', function() {
    sliderValues[index].value = this.value;
    updateGradient(this);
  });

  // Update slider value when input field value changes
  sliderValues[index].addEventListener('input', function() {
    const val = Math.min(parseInt(this.value), parseInt(slider.getAttribute('max')));
    slider.value = val;
    updateGradient(slider);
  });
});

function updateGradient(slider) {
  const percent = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  slider.style.setProperty('--val', percent);
}
// range slider code =========================
// range slider code =========================
// range slider code =========================