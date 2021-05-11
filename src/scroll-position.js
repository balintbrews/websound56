const getScrollPositionPercentage = () => {
  // @see https://javascript.info/size-and-scroll-window#width-height-of-the-document
  const scrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );
  const position =
    document.documentElement.scrollTop || document.body.scrollTop;

  // eslint-disable-next-line no-console
  console.log(`Scroll height: ${scrollHeight}`);
  return (
    // ((position + document.documentElement.clientHeight / 2) / scrollHeight) * 100
    (position / scrollHeight) * 100
  );
};

export default getScrollPositionPercentage;
