import React from 'react';
import { makeStyles } from '@material-ui/styles';
import MediaCard from '../components/MediaCard';
import img from "../media/img.png"


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "flex-start"
  }
}));

export const SeriesEscritas = (props) => {

  const classes = useStyles();

  const mediacard = 
    props.series.map(serie => {
      return (<MediaCard
        key={serie.id}
        image={img}
        title={serie.attributes.titulo}
        contentTitle={serie.attributes.sinopsis}
        contentText={serie.attributes.contenido}
        shareText="Compartir"
        seeMoreText="Ver mas"

      />)

    })
  

  return <div className={classes.root}>
    {mediacard}
    
  </div>;
};
