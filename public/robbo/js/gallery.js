lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  alwaysShowNavOnTouchDevices: true,
});

const createGallery = () => {
  let indexPhoto = 1;
  const albumDiv = document.createElement("div");
  document.body.appendChild(albumDiv);
  albumDiv.classList = "album";
  for (let j = 0; j < 6; j++) {
    const frameDiv = document.createElement("div");
    albumDiv.appendChild(frameDiv);
    frameDiv.classList = "frame";
    frameDiv.style = `--j: ${j}`;
    for (let i = 0; i < 10; i++) {
      const span = document.createElement("span");
      frameDiv.appendChild(span);
      span.style = `--i: ${i}`;
      if (j !== 0 && j !== 5) {
        const aInSpan = document.createElement("a");
        span.appendChild(aInSpan);
        aInSpan.dataset.lightbox = j;
        aInSpan.href = `img/img/${indexPhoto}.jpg`;
        const imgInA = document.createElement("img");
        aInSpan.appendChild(imgInA);
        imgInA.src = `img/thumbs/${indexPhoto}.jpg`;
        imgInA.alt = "image";
        indexPhoto++;
      }
    }
  }
};

createGallery();
