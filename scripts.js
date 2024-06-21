window.onload = () => {
  const canvas = document.getElementById("canvas");
  const image = document.getElementById("image");

  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  ctx.filter = "blur(25px)";

  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
};
