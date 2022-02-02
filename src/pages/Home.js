import React from 'react';
import { makeStyles } from '@material-ui/styles';
import MediaCard from '../components/MediaCard';
import img from "../media/img.png"

const useStyles = makeStyles((theme)=> ({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "flex-start"
  }
}));

export const Home = () => {

  const classes = useStyles();
  
    
  

  return <div className={classes.root}>

    {[1,2,3,4].map(e => {

   return (<MediaCard 
      image={img}
      title="Titulo"
      contentTitle="sdmlskf"
      contentText="lorem  sdimnkfsjdbnkjsdnfkjdnf sdasdadsadasdasddassasdasdads\n dfsdfsfd"
      shareText="Share"
      seeMoreText="Ver más"
    />)

    })}
  </div>;
};
