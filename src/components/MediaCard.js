import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 245,
    margin: "1rem 1rem 0 1rem"
  },
  media: {
    height: 80,
  },
});

export default function MediaCard({serie,image}) {
  
  const navigate = useNavigate();
  const classes = useStyles();
  const {title,contentTitle, id} = serie;
  

  
  const seeMoreClick = () => {
    navigate(`${id}`)

  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}

          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {contentTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Compartir
        </Button>
        <Button size="small" color="primary" onClick={seeMoreClick}>
          Ver más
        </Button>
      </CardActions>
    </Card>
  );
}
