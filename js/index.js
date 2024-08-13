// increase/decrease product to cart
const decreaseButton = document.getElementById("decreaseButton");
const increaseButton = document.getElementById("increaseButton");
const numberBox = document.getElementById("numberBox");

decreaseButton.addEventListener("click", () => {
  const currentValue = parseInt(numberBox.value);
  if (currentValue > parseInt(numberBox.min)) {
    numberBox.value = currentValue - 1;
  }
});

increaseButton.addEventListener("click", () => {
  const currentValue = parseInt(numberBox.value);
  if (currentValue < parseInt(numberBox.max)) {
    numberBox.value = currentValue + 1;
  }
});

document.getElementById('scrollButton').addEventListener('click', function () {
  document.getElementById('product').scrollIntoView({ behavior: 'smooth' });
});

// open close details spect

function toggleSection(button) {
  const content = button.nextElementSibling;
  const allContents = document.querySelectorAll('.accordion-content');
  const allIcons = document.querySelectorAll('.accordion-header i');

  allContents.forEach(section => {
      if (section !== content) {
          section.style.display = 'none';
      }
  });

  allIcons.forEach(icon => {
      icon.classList.remove('fa-chevron-up');
      icon.classList.add('fa-chevron-down');
  });

  if (content.style.display === 'block') {
      content.style.display = 'none';
      button.querySelector('i').classList.remove('fa-chevron-up');
      button.querySelector('i').classList.add('fa-chevron-down');
  } else {
      content.style.display = 'block';
      button.querySelector('i').classList.remove('fa-chevron-down');
      button.querySelector('i').classList.add('fa-chevron-up');
  }
}
