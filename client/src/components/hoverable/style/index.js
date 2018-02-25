import Assign from 'object-assign'

const baseStyle = {
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  padding: '10px',
  margin: '10px',
  wordBreak: 'break-all',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  backgroundColor: 'white',
  cursor: 'pointer'
}

const hoveredStyle = (colour) => {
  return {
    backgroundColor: colour,
    transition: 'background-color 250ms linear',
    msTransition: 'background-color 250ms linear',
    WebkitTransition: 'background-color 250ms linear',
    MozTransition: 'background-color 250ms linear'
  }
}

export default {
  clickable: (colour, hovered = false) => {
    return Assign({}, baseStyle, hovered ? hoveredStyle(colour) : null)
  }
}