const initIntroToMobile = () => {
  const intro = document.querySelector('[data-intro]');
  const content = document.querySelector('[data-content]');

  const handleScreenClick = () => content.classList.toggle('intro__col--hide');

  const addEvent = () => {
    if (window.innerWidth < '1024') {
      intro.addEventListener('click', handleScreenClick);
      return;
    }

    content.classList.add('intro__col--hide');
    intro.removeEventListener('click', handleScreenClick);
  };

  if (intro && content) {
    window.addEventListener('resize', addEvent);
  }

  addEvent();
};

export {initIntroToMobile};
