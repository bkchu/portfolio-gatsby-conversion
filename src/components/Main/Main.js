import React from "react"
import Navbar from "../Navbar/Navbar"
import NavBarMobile from "../Navbar/NavbarMobile"
import ModalConductor from "../Modal/ModalConductor"
import './Main.scss';

const Main = ({ children }) => {
  return (
    <div className="Main">
      <Navbar />
      <NavBarMobile />
      {children}
      <ModalConductor />
    </div>
  )
}
export default Main
