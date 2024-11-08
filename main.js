function toggleShare() {
  const displayWidth = window.innerWidth;

  if (displayWidth < 1024) {
    const footer = document.getElementById("footer");
    footer.classList.toggle("share-active");

    const author = document.getElementById("author");
    author.classList.toggle("display-none");

    const links = document.getElementById("links");
    links.classList.toggle("display-none");

    const share = document.getElementById("share");
    share.src = !footer.classList.contains("share-active")
      ? "./images/icon-share-white.svg"
      : "./images/icon-share.svg";

    const shareButton = document.getElementById("share-button");
    shareButton.classList.toggle("share-button-inactive");
  } else {
    const bubble = document.getElementById("bubble");
    bubble.classList.toggle("display-none");
  }
}
