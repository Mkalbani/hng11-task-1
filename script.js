document.addEventListener('DOMContentLoaded', () => {
  const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
  currentTimeUTC.textContent += new Date().toUTCString();

  const currentDay = document.querySelector('[data-testid="currentDay"]');
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  currentDay.textContent += days[new Date().getUTCDay()];

  let index = 0;
  const goals = document.querySelectorAll('.goal');
  let intervalId = setInterval(() => {
    goals.forEach((goal, i) => {
      goal.style.transform = `translateX(-${index * 100}%)`;
    });
    index = (index + 1) % goals.length;
  }, 2000);

  const carouselContainer = document.querySelector('.carousel'); // Select the carousel container

  carouselContainer.addEventListener('mouseover', () => {
    clearInterval(intervalId); // Stop interval on mouseover
  });

  carouselContainer.addEventListener('mouseout', () => {
    intervalId = setInterval(() => { // Restart interval on mouseout
      goals.forEach((goal, i) => {
        goal.style.transform = `translateX(-${index * 100}%)`;
      });
      index = (index + 1) % goals.length;
    }, 2000);
  });

});
