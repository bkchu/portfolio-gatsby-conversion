const HIDE_MODAL = 'HIDE_MODAL';
const PROJECT_MODAL = 'PROJECT_MODAL';
const CONTACT_MODAL = 'CONTACT_MODAL';
const SET_SCROLLED = 'SET_SCROLLED';

const initialState = {
  currentModal: '',
  isScrolled: false
};

export function projectModal(projectInfo) {
  return {
    type: PROJECT_MODAL,
    payload: { modalType: 'PROJECT_MODAL', modalMeta: projectInfo }
  };
}

export function contactModal() {
  return {
    type: CONTACT_MODAL,
    payload: { modalType: 'CONTACT_MODAL' }
  };
}

export function hideModal() {
  return {
    type: HIDE_MODAL,
    payload: { modalType: 'HIDE_MODAL' }
  };
}

export function setScrolled(isScrolled) {
  return {
    type: SET_SCROLLED,
    payload: { isScrolled: isScrolled }
  };
}

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case PROJECT_MODAL:
      return { ...state, currentModal: payload };

    case CONTACT_MODAL:
      return { ...state, currentModal: payload };

    case HIDE_MODAL:
      return { ...state, currentModal: payload };

    case SET_SCROLLED:
      return { ...state, isScrolled: payload };

    default:
      return state;
  }
}
