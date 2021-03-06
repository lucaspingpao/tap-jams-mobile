import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

import Drake from '../../assets/images/Drake.jpg';
import Olivia from '../../assets/images/Olivia.jpg';
import Taylor from '../../assets/images/Taylor.jpg';
import Weeknd from '../../assets/images/Weeknd.jpg';

import '../../styles/Explore.css';

const songData = [
    {
        title: 'Cool Jams',
        composer: 'Drake',
        image: Drake
    },
    {
        title: 'Fun Parties',
        composer: 'Olivia Rodrigo',
        image: Olivia
    },
    {
        title: 'Happy Days',
        composer: 'Taylor Swift',
        image: Taylor
    },
    {
        title: 'Exciting Times',
        composer: 'The Weeknd',
        image: Weeknd
    }
]


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function Explore(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
        <Typography variant='h2' className='title'>Explore</Typography>
        <div className='cards'>
        {songData.map((song, i) => (
            <Card key={i} className={classes.root}>
                <CardMedia
                    className={classes.cover}
                    image={song.image}
                    title="Live from space album cover"
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {song.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {song.composer}
                    </Typography>
                    </CardContent>
                    <div className={classes.controls}>
                    <IconButton aria-label="previous">
                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon className={classes.playIcon} />
                    </IconButton>
                    <IconButton aria-label="next">
                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton>
                    </div>
                </div>
            </Card>
        ))}
        </div>
    </div>
  );
}
