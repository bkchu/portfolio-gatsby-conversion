import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import React, { useEffect } from "react"

function ModalWrapper(props) {
  useEffect(() => {
    document.body.style.overflow = "hidden"

    return () => (document.body.style.overflow = "auto")
  })

  const handleBackgroundClick = e => {
    if (e.target === e.currentTarget) props.hideModal()
  }

  const onOk = () => {
    props.onOk()
    props.hideModal()
  }

  const okButton = props.showOk ? (
    <button
      className="Modal__button--ok"
      onClick={onOk}
      disabled={props.okDisabled}
    >
      {props.okText}
    </button>
  ) : null

  const modalVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { type: "spring", stiffness: 50 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  }

  return (
    <div className="Modal" onClick={handleBackgroundClick}>
      <motion.div
        initial="closed"
        animate="open"
        variants={modalVariants}
        className="Modal__content"
      >
        <header className="Modal__header">
          <button className="Modal__button--hide" onClick={props.hideModal}>
            <FontAwesomeIcon icon={faTimes} size="1x" />
          </button>
        </header>
        <div>{props.children}</div>

        {okButton}
      </motion.div>
    </div>
  )
}

ModalWrapper.defaultProps = {
  title: "",
  showOk: true,
  okText: "OK",
  okDisabled: false,
  width: 400,
  onOk: () => {},
}

export default ModalWrapper
