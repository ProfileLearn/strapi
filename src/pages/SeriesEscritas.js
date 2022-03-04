import React from 'react';
import { makeStyles } from '@material-ui/styles';
import MediaCard from '../components/MediaCard';
import img from "../media/img.png"
import { Routes, Route, useNavigate, Navigate } from 'react-router';
import { Serie } from './Serie';




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
  const [series, setSeries] = React.useState([])
  const [capitulo, setCapitulo] = React.useState()


  React.useEffect(() => {
    fetch("http://localhost:1337/api/series", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

      .then(serie => serie.json())
      .then(serie => setSeries(serie.data))

    return () => {
      setSeries([])
    }
  }, [capitulo])

  const classes = useStyles();

  const mediacard =
    series.map(serie => {
      return (<MediaCard
        key={serie.id}
        image={img}
        title={serie.attributes.titulo}
        contentTitle={serie.attributes.sinopsis}
        contentText={serie.attributes.contenido}
        shareText="Compartir"
        seeMoreText="Ver más"
        seeMoreClick={() => {
          setCapitulo({ serie })
          return <Navigate to="serie" />
        }}
      />)
    }
    )


  return <div className={classes.root}>
    <Routes>
      <Route path="/serie" element={<Serie contenido={capitulo} />} />
    </Routes>
    {mediacard}

  </div>;
};
