import React from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import { Location } from "@reach/router"
import classnames from "classnames"

const NavItem = ({
  to,
  children,
  onClick,
  className,
  animate,
  initial,
  ...props
}) => {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { type: "spring", stiffness: 30 },
      },
    },
    closed: {
      y: 10,
      opacity: 0,
      transition: {
        y: { stiffness: 20 },
      },
    },
    logoOpen: {
      y: 0,
      opacity: 1,
      transition: {
        y: { type: "spring", stiffness: 20 },
        delay: 0.93,
      },
    },
    logoClosed: {
      y: 20,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  }
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.05 }}
      style={{ listStyle: "none" }}
      className={!!onClick ? className : ""}
      onClick={!!onClick ? onClick : null}
      animate={animate}
      initial={initial}
      role="link"
      tabIndex="0"
    >
      {!!onClick ? (
        children
      ) : (
        <Location>
          {({ location }) => {
            const newClassNames = classnames(className, {
              active: location.pathname.includes(
                String(children).toLowerCase()
              ),
            })
            return (
              <Link className={newClassNames} to={to}>
                {children}
              </Link>
            )
          }}
        </Location>
      )}
    </motion.li>
  )
}

export default NavItem
