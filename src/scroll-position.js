const getScrollPositionPercentage = totalHeight => {
  const position =
    document.documentElement.scrollTop || document.body.scrollTop;
  return (
    // ((position + document.documentElement.clientHeight / 2) / totalHeight) * 100
    (position / totalHeight) * 100
  );
};

export default getScrollPositionPercentage;
