import { useState } from "react"
import Container from "../Container"
import Link from "next/link"
import { useRouter } from "next/router"
import TrainingRoom from "./trainingRoom/TrainingRoom"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Navbar(){
    const router = useRouter()
    return(
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <Container>
        <div className="container-fluid">
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <button onClick={()=> router.push("./user/User")}>User</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={()=> router.push("./coach/Coach")}>Coach</button>
                    </li>
                    <li>
                        <button onClick={()=> router.push("./trainingRoom/TrainingRoom")}>Training room</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={()=> router.push("./trainingProgram/TrainingProgram")}>Traingin program</button>
                    </li>
                </ul>
            </div>
            
        </div>
        </Container>
      </nav>
    )
}