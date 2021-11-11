const initLoader = () => {
  const handleContentLoad = () => {
    const loader = document.querySelector('[data-loader]');
    const loaderText = loader.querySelector('[data-loader-text]');
    const logo = loader.querySelector('[data-logo]');

    const title = document.querySelector('[data-title]');
    const description = document.querySelector('[data-description]');
    const lizard = document.querySelector('[data-lizard]');
    const header = document.querySelector('[data-header]');

    const handleLoaderHide = (evt) => {
      switch (true) {
        case (evt.key === 'Enter' && evt.type === 'keydown'):
        case evt.type === 'click':
          loader.classList.add('loader--hide');
          title.classList.remove('intro__title--no-visible');
          description.classList.remove('intro__text--no-visible');
          lizard.classList.remove('lizard--no-visible');
          header.classList.remove('header--no-visible');

          loader.removeEventListener('click', handleLoaderHide);
          document.removeEventListener('keydown', handleLoaderHide);
          break;
        default:
          return;
      }
    };

    loaderText.classList.add('loader__message--active');
    logo.classList.add('logo-svg--loading');

    loader.addEventListener('click', handleLoaderHide);
    document.addEventListener('keydown', handleLoaderHide);
  };

  window.addEventListener('load', () => {
    setTimeout(handleContentLoad, 3000);
  });
};

export {initLoader};
