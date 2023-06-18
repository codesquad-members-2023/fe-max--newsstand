export function setTrimmedBackgroundImageUrl(
  element: HTMLElement,
  imageUrl: string
) {
  const canvas = document.createElement("canvas");
  const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

  const img = new Image();
  img.crossOrigin = "Anonymous";
  img.src = imageUrl;
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, img.width, img.height);

    const { top, bottom, left, right } = findNonWhiteArea(img, ctx);
    const width = right - left;
    const height = bottom - top;

    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(img, left, top, width, height, 0, 0, width, height);
    element.setAttribute("src", canvas.toDataURL());
  };
}

function findNonWhiteArea(
  img: HTMLImageElement,
  ctx: CanvasRenderingContext2D
) {
  const imageData = ctx.getImageData(0, 0, img.width, img.height);
  const data = imageData.data;
  let top = 0,
    bottom = img.height - 1,
    left = 0,
    right = img.width - 1;

  let flag;

  flag = true;
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      for (let k = 0; k < 3; k++) {
        if (data[(y * img.width + x) * 4 + k] < 230) {
          flag = false;
          break;
        }
      }
      if (!flag) break;
      top = y;
    }
    if (!flag) break;
  }
  flag = true;
  for (let y = img.height - 1; y >= 0; y--) {
    for (let x = 0; x < img.width; x++) {
      for (let k = 0; k < 3; k++) {
        if (data[(y * img.width + x) * 4 + k] < 230) {
          flag = false;
          break;
        }
      }
      if (!flag) break;
      bottom = y;
    }
    if (!flag) break;
  }

  flag = true;
  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      for (let k = 0; k < 3; k++) {
        if (data[(y * img.width + x) * 4 + k] < 230) {
          flag = false;
          break;
        }
      }
      if (!flag) break;
      left = x;
    }
    if (!flag) break;
  }

  flag = true;
  for (let x = img.width - 1; x >= 0; x--) {
    for (let y = 0; y < img.height; y++) {
      for (let k = 0; k < 3; k++) {
        if (data[(y * img.width + x) * 4 + k] < 230) {
          flag = false;
          break;
        }
      }
      if (!flag) break;
      right = x;
    }
    if (!flag) break;
  }

  return { top, bottom, left, right };
}
