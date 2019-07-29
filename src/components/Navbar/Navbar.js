import { window } from "browser-monads"
import classnames from "classnames"
import { motion } from "framer-motion"
import React, { Component } from "react"
import { connect } from "react-redux"
import Logo from "../../assets/BKC_Logo.svg"
import { contactModal, setScrolled } from "../../redux/ducks/reducer"
import NavItem from "./NavItem/NavItem"

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.props.setScrolled(false)
  }

  componentDidMount() {
    document.addEventListener("scroll", this.trackScrolling)
  }

  trackScrolling = () => {
    const height = window.scrollY
    if (height >= 50) {
      this.props.setScrolled(true)
    } else {
      this.props.setScrolled(false)
    }
  }

  render() {
    const navbarClasses = classnames("Navbar__nav", {
      "Navbar__nav--scrolled": this.props.isScrolled,
    })

    const variants = {
      open: {
        transition: { staggerChildren: 0.1, delayChildren: 1 },
      },
      closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
      },
    }

    const logoVariants = {
      spinning: {
        rotate: [0, 360, 360, 360, 360, 360, 360, 360],
        scale: [1, 1, 1, 1, 1.2, 1, 1.2, 1],
        transition: {
          duration: 10,
          times: [0, 0.1, 0.2, 0.55, 0.56, 0.57, 0.58, 0.59],
          loop: Infinity,
          stiffness: 300,
          ease: "easeInOut",
        },
      },
      rest: {
        rotate: 0,
      },
    }

    const nav = [
      {
        to: "/projects",
        name: "Projects",
        onClick: null,
      },
      {
        to: "/skills",
        name: "Skills",
        onClick: null,
      },
      {
        to: "/experience",
        name: "Experience",
        onClick: null,
      },
      {
        to: "/contact",
        name: "Contact",
        onClick: null,
      },
    ]

    return (
      <div className="Navbar">
        <nav className={navbarClasses}>
          <NavItem
            animate="logoOpen"
            initial="logoClosed"
            to="/"
            className="Navbar__logo-link link"
          >
            <motion.img
              initial="rest"
              animate="spinning"
              variants={logoVariants}
              className="Navbar__logo"
              src={Logo}
              alt="brand"
            />
          </NavItem>
          <motion.div
            initial="closed"
            animate="open"
            variants={variants}
            className="Navbar__link-list"
          >
            {nav.map(({ to, name, ...props }, i) => (
              <NavItem
                key={i}
                to={to}
                className="Navbar__list-link link"
                {...props}
              >
                {name}
              </NavItem>
            ))}
          </motion.div>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isScrolled: state.isScrolled.isScrolled,
})

export default connect(
  mapStateToProps,
  { contactModal, setScrolled }
)(Navbar)
