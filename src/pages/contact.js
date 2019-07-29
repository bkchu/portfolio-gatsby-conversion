import React from "react"

import SEO from "../components/seo"
import Main from "../components/Main/Main"
import ContactModal from "../components/Modal/ModalContent/ContactModal";

const Contact = () => (
  <Main>
    <SEO title="Contact" />
    <ContactModal />
  </Main>
)

export default Contact
