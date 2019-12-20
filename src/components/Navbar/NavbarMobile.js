import { Location } from "@reach/router"
import { window } from "browser-monads"
import classnames from "classnames"
import { motion } from "framer-motion"
import { navigate } from "gatsby"
import React, { useState } from "react"
import { connect } from "react-redux"
import { contactModal } from "../../redux/ducks/reducer"
import NavItem from "./NavItem/NavItem"

const NavbarMobile = props => {
  const [open, toggleOpen] = useState(false)

  const route = path => {
    toggleOpen(false)
    navigate(path)
  }

  const menu = open => {
    const drawerVariants = {
      open: {
        left: 0,
        transition: {
          left: { stiffness: 1000, velocity: -50 },
        },
      },
      closed: {
        left: window.innerWidth,
        transition: {
          left: { stiffness: 1000 },
        },
      },
    }

    const linkVariants = {
      open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.3 },
      },
      closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
      },
    }

    const nav = [
      {
        to: "/projects",
        name: "Projects",
        onClick: () => route("/projects"),
      },
      {
        to: "/skills",
        name: "Skills",
        onClick: () => route("/skills"),
      },
      {
        to: "/experience",
        name: "Experience",
        onClick: () => route("/experience"),
      },
      {
        to: "/contact",
        name: "Contact",
        onClick: () => route("/contact"),
      },
    ]

    return (
      <motion.div
        initial="closed"
        animate={open ? "open" : "closed"}
        variants={drawerVariants}
        className="NavbarMobile__nav"
      >
        {open && (
          <motion.div
            initial="closed"
            animate="open"
            variants={linkVariants}
            className="NavbarMobile__links"
          >
            {nav.map(({ to, name, ...props }, i) => (
              <Location key={i}>
                {({ location }) => {
                  const newClassNames = classnames(
                    "NavbarMobile__link",
                    "link",
                    {
                      active: location.pathname.includes(to.toLowerCase()),
                    }
                  )
                  return (
                    <NavItem
                      key={i}
                      to={to}
                      className={newClassNames}
                      {...props}
                    >
                      {name}
                    </NavItem>
                  )
                }}
              </Location>
            ))}
          </motion.div>
        )}
      </motion.div>
    )
  }

  const burgerClasses = classnames("burger", {
    "is-active": open,
    "burger--scrolled": props.isScrolled,
  })

  return (
    <div className="NavbarMobile">
      {open && (
        <button
          onClick={() => toggleOpen(false)}
          className="NavbarMobile__modal"
        />
      )}
      <button onClick={() => toggleOpen(!open)} className={burgerClasses}>
        <span />
        <span />
        <span />
      </button>
      {menu(open)}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isScrolled: state.isScrolled.isScrolled,
  }
}

export default connect(mapStateToProps, { contactModal })(NavbarMobile)
