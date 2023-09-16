import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { CssBaseline, Box, Container, Typography } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import "react-image-gallery/styles/css/image-gallery.css";

const WorkTemplate = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="false" className="close-header">
        <HashLink to="/#Works">
          <FontAwesomeIcon icon={faXmark} style={{ color: "#333333" }} />
        </HashLink>
      </Container>
      <Container
        maxWidth="false"
        component="article"
        className="no-padding-container"
      >
        <Box component="section">
          <Typography variant="h1" gutterBottom>
            Air REGI faq
          </Typography>
          <Typography variant="p" gutterBottom>
            ・アコーディオンなど、セマンティックカラーやアイコンを効果的に使って記事を読みやすく整理するためのパーツを追加した。
            ・チームで相談し動線の改善を行い、ユーザーの問題自己解決を向上すると共にお問い合わせの削減に取り組んだ。
            ・アプリの機能がリリースされるたびに新機能を記事に追加した。
          </Typography>
        </Box>
        <Box component="section">
          <Box component="div" className="work-imgs-container">
            <Box component="div" className="work-imgs-preview-wrap">
              <Box component="div" className="work-imgs-preview-inner">
                <img src="" />
                <img src="" />
                <img src="" />
                <img src="" />
                <img src="" />
              </Box>
            </Box>
            <img src="" className="work-imgs-preview" />
          </Box>
          <Box component="div" className="work-description">
            <Typography variant="h2" gutterBottom>
              Work in charge
            </Typography>
            <Typography variant="p" gutterBottom>
              ・アコーディオンなど、記事を読みやすく整理するためのパーツの追加
              ・チームで相談し、動線の改善、ユーザーの問題自己解決栗を向上すると共にお問い合わせの削減に取り組んだ。
              ・アプリの機能がリリースされるたびに新機能を記事に追加した
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default WorkTemplate;
