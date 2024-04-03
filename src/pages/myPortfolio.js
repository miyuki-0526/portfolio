import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { CssBaseline, Box, Container, Typography } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import ImageGalleryCreater from "../components/imageGalleryCreater";
import "react-image-gallery/styles/css/image-gallery.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTargetElement } from "../redux/slices/scrollSlise";

const MyPortfolio = () => {
  // scroll to top
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTargetElement("Top"));
  }, []);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="false" className="work-background">
        <Container maxWidth="lg" className="work-contents-wraper">
          <Box className="close-header">
            <HashLink to="/#Works">
              <FontAwesomeIcon icon={faXmark} style={{ color: "#333333" }} />
            </HashLink>
          </Box>
          <Box
            maxWidth="lg"
            component="article"
            className="no-padding-containe work-article"
          >
            <Box component="section" className="work-introduction">
              <Typography variant="h1" gutterBottom>
                Portfolio
              </Typography>
              <Typography variant="p" gutterBottom>
                爽やかな印象のポートフォリオサイト
              </Typography>
            </Box>
            <Box component="section" className="work-contents">
              <Box component="div" className="work-imgs-container">
                <ImageGalleryCreater site="myPortfolio" />
              </Box>
              <Box component="div" className="work-description">
                <Typography variant="h2" gutterBottom>
                  開発のポイント
                </Typography>
                <Typography variant="p" gutterBottom>
                  <ul className="work-list">
                    <li>
                      自分自身の勉強用に作成したReactポートフォリオサイトです。
                    </li>
                    <li>
                      異なるコンポーネント間でデータをやり取りするためにReduxを使用しています（スクロール位置、要素の取得など）。
                    </li>
                    <li>
                      ほとんどのコンポーネントは、将来的にテーマ切り替え機能を実装することを見越してMUIを使用して作成されています。
                    </li>
                    <li>
                      Vanta.jsでCGバードアニメーションを表示しており、ビジターにHPを印象付けています。
                    </li>
                    <li>
                      コンポーネントは、個人サイトで管理しやすく、作業時間とパーツの再利用性のバランスを考えて分割しています。。
                    </li>
                    <li>
                      明るい青をbase colour、グレーがprimary
                      colourで、黄色がsecondary
                      colorにしています。デザインはシンプルですが、この色のグラデーションとバードのアニメーションにより、画面の中に空間を感じられるようにしました。
                    </li>
                  </ul>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default MyPortfolio;
