import { airRegiImages } from "./workDatas/airRegi";
import { airPayImages } from "./workDatas/airPay";
import { myPortfolioImages } from "./workDatas/myPortfolio";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ImageGalleryCreater = (props) => {
  const imagesList = [
    { key: "airRegi", value: airRegiImages },
    { key: "airPay", value: airPayImages },
    { key: "myPortfolio", value: myPortfolioImages },
  ];

  // sort target images from imagesList
  const imageSet = imagesList.filter((image) => {
    return image.key === props.site;
  });
  const items = imageSet.length > 0 ? imageSet[0].value : [];

  return (
    <ImageGallery
      items={items}
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
