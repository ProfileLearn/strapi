import React from 'react';
import { makeStyles } from '@material-ui/styles';
import MediaCard from '../components/MediaCard';
import img from "../media/img.png"
import { Route, Routes } from 'react-router';
import { Serie } from './Serie'
import { useParams, useNavigate } from 'react-router-dom';

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
  const [serie, setSerie] = React.useState()


  const classes = useStyles();

  const params = useParams();
  console.log(params)

  const navigate = useNavigate();


  const handleSeeMoreClick = () => {


    fetch(`http://localhost:1337/api/series/1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(s => s.json())
      .then(s => {
        console.log(s)
        setSerie(s)
      })
      // .then(s => navigate("/1"))

  }




  const mediacard =
    props.series.map(s => {
      return (<MediaCard
        key={s.id}
        image={img}
        title={s.attributes.titulo}
        contentTitle={s.attributes.sinopsis}
        contentText={s.attributes.contenido}
        seeMoreClick={handleSeeMoreClick}
      />)
    }
    )



  return (<div className={classes.root}>
      {!serie ? mediacard : <Serie contenido={serie.data.attributes.contenido} /> }

  </div>)
};
