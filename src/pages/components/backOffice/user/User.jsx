import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import Axios from "axios";
import Navbar from "../navbar";

export default function AllUsers(){

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Effectuer une requête HTTP GET pour récupérer les données des utilisateurs depuis votre API
    Axios.get("URL_DE_VOTRE_API_BACKEND/users")
      .then(response => {
        // Mettre à jour l'état userData avec les données récupérées
        setUserData(response.data);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des données des utilisateurs :", error);
      });
  }, []);

  // Fonction pour calculer l'IMC
  const calculateBMI = (weight, height) => {
    const bmi = weight / Math.pow(height / 100, 2);
    return bmi;
  };

  // Fonction pour déterminer la couleur de fond en fonction de l'IMC
  const getBackgroundColor = bmi => {
    if (bmi < 18.5) {
      return "bg-danger"; // Underweight
    } else if (bmi >= 18.5 && bmi < 25) {
      return "bg-success"; // Normal weight
    } else if (bmi >= 25 && bmi < 30) {
      return "bg-warning"; // Overweight
    } else {
      return "bg-danger"; // Obese
    }
  };

  return (
    <div>
      <Card>
      <CardBody>
        <CardTitle tag="h5">User tracking</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Overview of all users
        </CardSubtitle>
        <div className="table-responsive">
          <Table className="text-nowrap mt-3 align-middle" borderless>
            <thead>
              <tr>
                <th>User</th>
                <th>Gender</th>
                <th>Status</th>
                <th>Length</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={user.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{user.name}</h6>
                        <span className="text-muted">{user.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>{user.gender}</td>
                  <td>
                    <span
                      className={`p-2 rounded-circle d-inline-block ms-3 ${
                        getBackgroundColor(calculateBMI(user.weight, user.height))
                      }`}
                    />
                  </td>
                  <td>{user.height}</td>
                  <td>{user.weight}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
    </div>
  )
};

