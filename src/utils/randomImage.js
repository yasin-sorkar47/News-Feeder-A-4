const getImageRandomly = (newsData) => {
  const renDom = Math.floor(Math.random() * 35) + 1;
  const newArray = newsData[renDom];
  let confirmImage;
  if (!newArray?.urlToImage) {
    confirmImage = newsData[2]?.urlToImage;
  } else {
    confirmImage = newArray?.urlToImage;
  }

  return {
    newArray,
    confirmImage,
  };
};

export { getImageRandomly };
