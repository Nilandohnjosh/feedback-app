import React from 'react'
import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI', // <--- default prop value
  bgColor: 'rgba(0,0,0,0.4)', // <--- default prop value
  textColor: '#ff6a95',
}

Header.propTypes = {
  text: PropTypes.string.isRequired, // <--- prop type
  bgColor: PropTypes.string.isRequired, // <--- prop type
  textColor: PropTypes.string.isRequired, // <--- prop type
}

export default Header
