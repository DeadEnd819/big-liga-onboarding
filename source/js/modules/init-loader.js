const initLoader = () => {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const loader = document.querySelector('[data-loader]');
      const loaderText = loader.querySelector('[data-loader-text]');
      const logo = loader.querySelector('[data-logo]');

      loaderText.classList.add('loader__message--active');
      logo.classList.add('logo-svg--loading');

      loader.addEventListener('click', () => {
        loader.classList.add('loader--hide');
      });

      document.addEventListener('keydown', (evt) => {
        if (evt.key === 'Enter') {
          loader.classList.add('loader--hide');
        }
      });
    }, 3000);
  });
};

export {initLoader};
