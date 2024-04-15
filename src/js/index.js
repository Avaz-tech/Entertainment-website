import "../styles/global.scss";
// Example of automated import script for images from multiple directories
const imageFiles1 = require.context(
  "../assets/images",
  true,
  /\.(svg|png|jpg|jpeg|gif|webp|ico)$/
);
const imagePaths1 = imageFiles1.keys();
const imageFiles2 = require.context(
  "../assets/icons",
  true,
  /\.(svg|png|jpg|jpeg|gif|webp|ico)$/
);
const imagePaths2 = imageFiles2.keys();

const imagePaths = [...imagePaths1, ...imagePaths2];

imagePaths.forEach((path) => {
  const img = new Image();
  if (path.includes("images")) {
    img.src = imageFiles1(path).default;
  }
  if (path.includes("icons")) {
    img.src = imageFiles2(path).default;
  }
});
