import { useState } from "react"
import Container from "../Container"
import Link from "next/link"

export default function Navbar(){
    return(
      <nav className="">
        <Container>
        <div className="">
            <ul>
                <li>
                    <Link href="">
                        <a className="">User</a>
                    </Link>
                </li>
                <li>
                    <Link href="">
                        <a className="">Coach</a>
                    </Link>
                </li>
                <li>
                    <Link href="">
                        <a className="">Training room</a>
                    </Link>
                </li>
                <li>
                    <Link href="">
                        <a className="">Training program</a>
                    </Link>
                </li>
            </ul>
        </div>
        </Container>
      </nav>
    )
}