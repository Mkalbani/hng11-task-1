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
  }, 3000);

  const carouselContainer = document.querySelector('.carousel'); 
  let isPaused = false; 

  carouselContainer.addEventListener('mouseover', () => {
    isPaused = true; 
    clearInterval(intervalId);
  });

  carouselContainer.addEventListener('mouseout', () => {
    if (!isPaused) { 
      return; 
    }
    isPaused = false; 
    intervalId = setInterval(() => {
      goals.forEach((goal, i) => {
        goal.style.transform = `translateX(-${index * 100}%)`;
      });
      index = (index + 1) % goals.length;
    }, 3000);
  });

  carouselContainer.addEventListener('click', () => {
    isPaused = !isPaused; 
    if (isPaused) {
      clearInterval(intervalId);
    } else {
      intervalId = setInterval(() => {
        goals.forEach((goal, i) => {
          goal.style.transform = `translateX(-${index * 100}%)`;
        });
        index = (index + 1) % goals.length;
      }, 3000);
    }
  });
});
