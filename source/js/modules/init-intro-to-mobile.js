const initIntroToMobile = () => {
  const intro = document.querySelector('[data-intro]');
  const content = document.querySelector('[data-content]');

  if (intro && content) {
    intro.addEventListener('click', () => {
      content.classList.toggle('intro__col--hide');
    });
  }
};

export {initIntroToMobile};
