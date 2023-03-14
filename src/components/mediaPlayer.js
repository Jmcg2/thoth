import media1 from "../media/conjure4.jpeg";
import media2 from "../media/conjure1.jpeg";

const MediaPlayer = () => {
  const mediaArray = [media1, media2];
  mediaArray.forEach((element) => {
    return element.src;
  });
};

export default MediaPlayer;
