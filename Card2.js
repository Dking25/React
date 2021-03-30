import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Aoi Todo"
          height="140"
          image="../Card/Pic/Anime/Aoi-Todo.jpg"
          title="Aoi Todo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Aoi Todo
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            "Best Friend" and peer-mentor to Itadori Yuji, Third year of Kyoto Jujutsu Highschool and a grad 1 sorcerer.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}