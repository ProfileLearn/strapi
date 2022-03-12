import NavBar from './components/Navbar';
import Cajon from './components/Cajon'
import React from 'react'
import DescriptionIcon from '@material-ui/icons/Description';
import SpeakerIcon from '@material-ui/icons/Speaker';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter,
  Routes,
  Route,
  useParams
} from "react-router-dom";
import { SeriesEscritas } from './pages/SeriesEscritas';
import { Serie } from './pages/Serie';
import { useNavigate } from 'react-router';
import { Router } from 'react-router';
import { ContactSupportOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    flexWrap: "wrap",
    backgroundColor: 'rgb(30 38 41)',
    height: '100%',
    padding: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      marginLeft: 240
    },
  }
  ,
  toolbar: theme.mixins.toolbar,
}))

function App() {
  
  const classes = useStyles();
  
  const [mobileOpen, setMobileOpen] = React.useState(false);
  
  // const [serie, setSerie] = React.useState()
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  const icons = [
    { listItemIcon: <SpeakerIcon />, text: "Audio Libros", to: "/audiolibros" },
    { listItemIcon: <DescriptionIcon />, text: "Series Escritas", to: "/series" }
  ]
  
  const [series, setSeries] = React.useState([])

  const params= useParams();
  


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

    }
  }, [])





  return (
    <BrowserRouter>

      <NavBar onClick={handleDrawerToggle} />
      <Cajon
        onDrawerClick={handleDrawerToggle}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        icons={icons}
      />
      <div className={classes.toolbar} />
      <div className={classes.content}>
        <Routes>
          <Route path="/series/:id" element={<Serie />} />
          <Route path="/series" element={<SeriesEscritas series={series} />} />
        </Routes>
        <button onClick={()=> console.log(series[0])}>mostrar</button>
      </div>
    </BrowserRouter>


  );
}

export default App;
