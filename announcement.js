(() => {
  const dialog = document.getElementById('updates');
  const formUrl = window.QSE_CONFIG?.googleFormUrl?.trim();
  document.querySelectorAll('[data-updates]').forEach(link => {
    if (formUrl && /^https:\/\//.test(formUrl)) {
      link.href = formUrl;
    } else {
      link.setAttribute('aria-haspopup', 'dialog');
      link.addEventListener('click', event => {
        event.preventDefault();
        dialog.showModal();
      });
    }
  });
  dialog.querySelectorAll('button').forEach(button => button.addEventListener('click', () => dialog.close()));
  dialog.addEventListener('click', event => {
    if (event.target === dialog) {
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    }
  });
})();
