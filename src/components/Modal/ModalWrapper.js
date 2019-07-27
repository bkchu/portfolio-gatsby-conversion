import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

class ModalWrapper extends Component {
  componentDidMount() {
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflow = 'auto';
  }

  render() {
    const handleBackgroundClick = e => {
      if (e.target === e.currentTarget) this.props.hideModal();
    };

    const onOk = () => {
      this.props.onOk();
      this.props.hideModal();
    };

    const okButton = this.props.showOk ? (
      <button
        className="Modal__button--ok"
        onClick={onOk}
        disabled={this.props.okDisabled}
      >
        {this.props.okText}
      </button>
    ) : null;

    const modalVariants = {
      open: {
        y: 0,
        opacity: 1,
        transition: {
          y: { type: 'spring', stiffness: 50 }
        }
      },
      closed: {
        y: 50,
        opacity: 0
      }
    };

    return (
      <div className="Modal" onClick={handleBackgroundClick}>
        <motion.div
          initial="closed"
          animate="open"
          variants={modalVariants}
          className="Modal__content"
        >
          <header className="Modal__header">
            <button
              className="Modal__button--hide"
              onClick={this.props.hideModal}
            >
              <FontAwesomeIcon icon={faTimes} size="1x" />
            </button>
          </header>
          <div>{this.props.children}</div>

          {okButton}
        </motion.div>
      </div>
    );
  }
}

ModalWrapper.defaultProps = {
  title: '',
  showOk: true,
  okText: 'OK',
  okDisabled: false,
  width: 400,
  onOk: () => {}
};

export default ModalWrapper;
