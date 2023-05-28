const video = document.querySelector('.about__video-js');
const link = document.querySelector('.about__video-link');
const button = document.querySelector('.about__video-button');
const iframeBlock = video.querySelector('[data-video-container]');
link.removeAttribute('href');

const createIframe = (block) => {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('width', 364);
  iframe.setAttribute('height', 228);
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', block.dataset.src);

  return iframe;
};

button.addEventListener('click', () => {
  if (video && iframeBlock) {
    button.remove();
    link.remove();
    const newIframe = createIframe(iframeBlock);
    iframeBlock.append(newIframe);
  }
});
