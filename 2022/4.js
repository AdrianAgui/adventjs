function fitsInOneBox(boxes) {
  return boxes
    .sort((a, b) => a.l * a.w * a.h - b.l * b.w * b.h)
    .every((box, i) => {
      const next = boxes[i + 1];
      return next ? box.l < next.l && box.w < next.w && box.h < next.h : true;
    });
}
