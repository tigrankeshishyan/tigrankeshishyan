import { useState } from 'react';
import clsx from 'clsx';
import Dialog from '@material-ui/core/Dialog';
import * as appImages from './images/allImages';
import * as allIcons from './images/icons/allIcons';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import KomitasAudio from 'audio/Կոմիտաս Վարդապետ Հով արեք սարեր ջան.mp3';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Firework from './Firework';

import './App.css';

import useStyles from './styles';

const allIconsArray = Object.values(allIcons);

const getRandomArbitrary = (min, max) => Math.round(Math.random() * (max - min) + min);

const getRandomIcon = (() => {
  const icons = [...allIconsArray];

  return () => {
    const generatedIndex = getRandomArbitrary(0, icons.length - 1);
    return icons.splice(generatedIndex, 1)[0];
  }
})();

const extractFileName = name => name
  ?.split('/')[3]
  ?.split('.')
  ?.slice(0, -1)
  ?.join('.')
  ?.slice(2);

const imageList = Object
  .keys(appImages)
  .map((key) => ({
    url: appImages[key],
    icon: getRandomIcon(),
    name: extractFileName(appImages[key]),
  }));

imageList.push({
  audioUrl: KomitasAudio,
  icon: getRandomIcon(),
  name: extractFileName(KomitasAudio),
});

function App() {
  const classes = useStyles();
  const [openImages, setOpenImages] = useState([]);
  const [closedImages, setClosedImages] = useState([]);
  const [activeImage, setActiveImage] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const isGameFinished = closedImages.length === imageList.length;

  return (
    <>

      {isGameFinished && <Firework />}

      <div className={classes.header}>
        <img
          className={classes.logo}
          src="https://anmmedia.am/images/728b2034-b45c-4d5e-9883-65649683ca62.png" alt=""
        />
        <h1 className={classes.title}>
          Կոմիտասը արվեստի գործերում
        </h1>
      </div>

      <div className={classes.root}>
        {isGameFinished && <Firework />}

        {imageList.map((image) => (
          <Flippy
            flipOnClick={false}
            flipDirection="horizontal"
            key={image.url || image.audioUrl}
            isFlipped={openImages.includes(image.url)}
          >
            <FrontSide
              className={classes.card}
              onClick={() => setOpenImages(imgs => [...imgs, image.url])}
            >
              <img
                src={image.icon}
                alt={image.name}
                className={classes.img}
              />
            </FrontSide>

            <BackSide
              onClick={() => {
                if (closedImages.includes(image.url || image.audioUrl)) {
                  return;
                }

                if (image.audioUrl) {
                  setClosedImages([...closedImages, image.audioUrl]);
                } else {
                  setIsDialogOpen(true);
                  setActiveImage(image);
                }
              }}
              className={clsx(classes.card, { [classes.isClosedImage]: closedImages.includes((image.url || image.audioUrl)) })}
            >
              {image.audioUrl ? (
                <div className={classes.audioWrapper}>
                  <audio controls>
                    <source src={image.audioUrl} type="audio/mpeg" />
                      Your browser does not support the audio tag.
                </audio>
                </div>
              ) : (
                <img src={image.url} alt={image.name} className={classes.img} />
              )}
            </BackSide>
          </Flippy>
        ))}
      </div>

      <Dialog
        maxWidth="md"
        PaperProps={{
          className: classes.dialogPaper,
        }}
        open={isDialogOpen}
      >
        <div className={classes.dialogImageWrapper}>

          <IconButton
            color="default"
            component="span"
            className={classes.closeIcon}
            onClick={() => {
              setClosedImages([...closedImages, activeImage?.url || activeImage?.audioUrl]);
              setIsDialogOpen(false);
              setTimeout(() => setActiveImage(null), 500);
            }}
          >
            <CloseIcon />
          </IconButton>

          <img
            src={activeImage?.url}
            alt={activeImage?.name}
            className={classes.dialogImageIamge}
          />
        </div>
      </Dialog>
    </>
  );
}

export default App;
