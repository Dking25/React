import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Card.css'

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    maxWidth: 360,
    maxHeight: 250,
    minHeight: 230,
    backgroundColor: '#FE973E',
  },

 
});



export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    
    <Card className={classes.root} style={{backgroundColor:`${classes.root}` }}>
      <CardActionArea>
        <CardMedia
        image ={props.image}
        height ={props.height}
        title ={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" >
          {props.title1}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p"  height={props.height}>
         {props.body}
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