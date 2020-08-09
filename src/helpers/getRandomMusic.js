const getRandomMusic = (current, max) => {
  const newIndex = Math.floor(Math.random() * Math.floor(max));
  return newIndex !== current ? newIndex : getRandomMusic(current, max);
};

export default getRandomMusic;
