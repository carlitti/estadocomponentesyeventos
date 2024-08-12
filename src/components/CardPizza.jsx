import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { convertToCLPCurrency } from "../components/utils"; 
import '../App.css';


const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <>
      <Card style={{ width: "25rem" }} className="card-custom">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <hr />
          <div className="d-flex justify-content-center fs-6">
            <Card.Text>Ingredientes</Card.Text>
          </div>
          <Card.Text>
            <div className="d-flex justify-content-center gap-1 fs-6">
              🍕
              <p>{ingredients.join(', ')}</p>
            </div>
          </Card.Text>
          <hr />
          <div className="d-flex justify-content-center">
            <strong>Precio: ${convertToCLPCurrency(price)}</strong>
          </div>
          <div className="d-flex justify-content-between p-3">
            <Button className="border" variant="light">
              Ver más 👀
            </Button>
            <Button variant="dark">Añadir 🛒</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardPizza;
