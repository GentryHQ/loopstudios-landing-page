window.onload = function () {
  let menuLinks = document.getElementById('links');
  let closeBtn = document.getElementById('close');
  let openBtn = document.getElementById('ham');
  let pageBody =  document.body;

  openBtn.onclick = () => {
    menuLinks.classList.toggle("active");
    closeBtn.classList.toggle("active");
    openBtn.classList.toggle("active");
    pageBody.classList.toggle("active");
  };

  closeBtn.onclick = () => {
    menuLinks.classList.toggle("active");
    closeBtn.classList.toggle("active");
    openBtn.classList.toggle("active");
    pageBody.classList.toggle("active");
  };
};
