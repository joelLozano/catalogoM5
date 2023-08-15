import Card  from "../componentes/card/Card.jsx";
import './Alojamientos.css'

const alojamientos = [
    {
        name: "Casa de fin de semana",
        portada: "https://hips.hearstapps.com/hmg-prod/images/cabana-de-madera2-1642020542.jpg",
        price: 5425,
        description: "Bonita casa de fin de semana "
    },

    {
        name: "Cabaña Romantica",
        portada: "https://hips.hearstapps.com/hmg-prod/images/cabana-de-madera2-1642020542.jpg",
        price: 1000,
        description: "Experiencia en el Bosque"
    },
    {
        name: "Cabaña Divertida",
        portada: "https://hips.hearstapps.com/hmg-prod/images/cabana-de-madera2-1642020542.jpg",
        price: 200,
        description: "Experiencia unica"
    }
]


export default function Alojamientos() {
  return (
    <>
    <div>
        <h1>Alojamientos</h1>

        <div className="container-alojamientos">
            {alojamientos.map((item, index) => (
                <Card titulo={item.name} description={item.description} price={item.price} portada={item.portada} key={index}/>
            ))}  
        </div>
    </div>
    </>
  )
}
