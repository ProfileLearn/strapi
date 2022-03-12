import React from 'react'
import { useParams } from 'react-router-dom'

export const Serie = (props) => {

  const params = useParams();

  const [serie, setSerie] = React.useState()

  React.useEffect(() => {
    fetch(`http://localhost:1337/api/series/${params.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(serie => serie.json())
      .then(serie => setSerie(serie))
      

    return () => {

    }
  }, [])

  console.log(serie)

  return (
    <div style={{
      color: "white"
    }}>{serie ? serie.data.attributes.contenido : "loading"}</div>
  )
}
