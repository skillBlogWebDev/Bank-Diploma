export const setCurrentPageToLocalStorage = (page) => {
  const currentPage = JSON.parse(localStorage.getItem('auth'));
  currentPage.page = page;
  localStorage.setItem('auth', JSON.stringify(currentPage));
};

export const goToCurrentPage = (page) => {
  setCurrentPageToLocalStorage(page);
  setTimeout(() => {
    location.reload();
  }, 0);
};
