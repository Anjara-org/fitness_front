import { Card, CardBody, CardSubtitle, CardText, CardTitle, Button } from "reactstrap";
import PropTypes from "prop-types";
import Image from "next/image";
import Axios from "axios"; // Importer Axios
import { useEffect, useState } from "react";
import Navbar from "../navbar";

export default function CoachList() {
  const [coachData, setCoachData] = useState([]);

  useEffect(() => {
    Axios.get("URL_DE_VOTRE_API_BACKEND/users")
      .then(response => {
        setCoachData(response.data);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des données des coachs :", error);
      });
  }, []);

  return (
    <div>
      {coachData.map(coach => (
        <Card key={coach.id}>
          <Image alt="Card image cap" src={coach.image} className="w-100 h-100"/>
          <CardBody className="p-4">
            <CardTitle tag="h5">{coach.name}</CardTitle>
            <CardSubtitle>{coach.age}</CardSubtitle>
            <CardText className="mt-3">{coach.adress}</CardText>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};
