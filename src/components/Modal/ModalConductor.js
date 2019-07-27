import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/ducks/reducer';
import ProjectModal from './ModalContent/ProjectModal';
import ContactModal from './ModalContent/ContactModal';
import ReactGA from 'react-ga';

const ModalConductor = props => {
  switch (props.currentModal.modalType) {
    case 'PROJECT_MODAL':
      return <ProjectModal {...props} />;
    case 'CONTACT_MODAL':
      ReactGA.modalview('/contact');
      return <ContactModal {...props} />;
    // case "HIDE_MODAL":
    //   return <div />;
    default:
      return null;
  }
};

export default connect(
  state => state,
  { ...actions }
)(ModalConductor);
