export function moving(id, callback) {
  const mvEle = document.getElementById(id);
  let isMoving = false;
  let x = 0;

  const handleDown = e => {
    isMoving = true;
    x = e.offsetX;
  };

  const handleUp = e => {
    if (isMoving === true) {
      isMoving = false;
      x = 0;
    }
  };

  const handleMove = e => {
    if (isMoving === true) {
      const diff = e.offsetX - x;
      callback(diff);
      x = e.offsetX;
    }
  };

  const handleWheel = e => {
    e.preventDefault();
    x = e.deltaY;
    callback(x * 2);
  };

  const handleOut = e => {
    if (isMoving === true) {
      isMoving = false;
      x = 0;
    }
  };

  const handleTouchStart = e => {
    e.preventDefault();
    isMoving = true;
    const touch = e.changedTouches[0];
    x = touch.pageX;
  };

  const handleTouchMove = e => {
    e.preventDefault();
    const touch = e.changedTouches[0];
    if (isMoving === true) {
      const diff = touch.pageX - x;
      callback(diff);
      x = touch.pageX;
    }
  };

  const handleTouchEnd = e => {
    if (isMoving === true) {
      isMoving = false;
      x = 0;
    }
  };

  mvEle.addEventListener("wheel", handleWheel, false);
  mvEle.addEventListener("mousedown", handleDown, false);
  mvEle.addEventListener("mousemove", handleMove, false);
  // mvEle.addEventListener("mouseout", handleOut, false);
  mvEle.addEventListener("touchstart", handleTouchStart, false);
  mvEle.addEventListener("touchmove", handleTouchMove, false);
  mvEle.addEventListener("touchend", handleTouchEnd, false);
  document.addEventListener("mouseup", handleUp, false);
}
