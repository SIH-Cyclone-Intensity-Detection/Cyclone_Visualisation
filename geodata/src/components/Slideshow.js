import SimpleImageSlider from "react-simple-image-slider";
import Container from '@mui/material/Container';

const images = [
  { url: "https://picsum.photos/id/1015/896/504/" },
  { url: "https://picsum.photos/id/1019/896/504/" },
  { url: "https://picsum.photos/id/1015/896/504/" },
  { url: "https://picsum.photos/id/1019/896/504/" },
  { url: "https://picsum.photos/id/1015/896/504/" },
  { url: "https://picsum.photos/id/1019/896/504/" },
  { url: "https://picsum.photos/id/1015/896/504/" },
];

const Slideshow = () => {
  return (
    <Container sx={{m:4,p:4,marginLeft:13}}>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showNavs={true}
        loop={true}
        navStyle={2}
      />
    </Container>
  );
}

export default Slideshow