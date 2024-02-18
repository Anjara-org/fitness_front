import { Card, CardBody, CardSubtitle, CardText, CardTitle, Button } from "reactstrap";
import PropTypes from "prop-types";
import Image from "next/image";
import Axios from "axios"; // Importer Axios
import { useEffect, useState } from "react";

export default function CoachList() {
  const [roomData, setRoomData] = useState([]);

  useEffect(() => {
    Axios.get("URL_DE_VOTRE_API_BACKEND/rooms")
      .then(response => {
        setCoachData(response.data);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des données des salles :", error);
      });
  }, []);

  return (
    <div>
      {roomData.map(coach => (
        <Card key={room.id}>
          <Image alt="Card image cap" src={room.image} className="w-100 h-100"/>
          <CardBody className="p-4">
            <CardTitle tag="h5">{room.location}</CardTitle>
            <CardSubtitle>{room.adress}</CardSubtitle>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};
