import NavBar from './components/Navbar';
import Cajon from './components/Cajon'
import React from 'react'
import DescriptionIcon from '@material-ui/icons/Description';
import SpeakerIcon from '@material-ui/icons/Speaker';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { SeriesEscritas } from './pages/SeriesEscritas';


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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const icons = [
    { listItemIcon: <SpeakerIcon />, text: "Audio Libros", to: "/audiolibros" },
    { listItemIcon: <DescriptionIcon />, text: "Series Escritas", to: "/series-escritas" }
  ]

  


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
          <Route path="/series-escritas" element={<SeriesEscritas  />} />

        </Routes>
      </div>
    </BrowserRouter>


  );
}

export default App;
