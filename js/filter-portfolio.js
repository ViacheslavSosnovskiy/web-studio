const tagsContainer = document.querySelector('.js-tags');
let selectedTag = new Set();

tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const currentActiveBtn = document.querySelector('.filters__button--active');

  if (currentActiveBtn) {
    currentActiveBtn.classList.remove('filters__button--active');
  }

  event.target.classList.add('filters__button--active');

  // selectedTag = event.target.dataset.value;
}
