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


export const SeriesEscritas = ({series}) => {
  const [serie, setSerie] = React.useState()

  const classes = useStyles();

  const params = useParams();
  console.log(params)

  const navigate = useNavigate();

  

  const handleSeeMoreClick = () => {

    navigate(`${serie.id}`)

  }




  const mediacard =
    series.map((serie,index) => {
      return (<MediaCard
        key={serie.id}
        image={img}
        serie={serie}
      />)
    }
    )



  return (<div className={classes.root}>
    {mediacard}

  </div>)
};
