import { airRegiImages } from "./workDatas/airRegiImages";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ImageGalleryCreater = () => {
  return (
    <ImageGallery
      items={airRegiImages}
      showNav={false}
      autoPlay={false}
      showFullscreenButton={false}
      useBrowserFullscreen={false}
      showPlayButton={false}
      thumbnailPosition="left"
    />
  );
};
export default ImageGalleryCreater;
