import PropTypes from 'prop-types';

export const GifItem = ({ title, url }) => {
  
  
  return (
    <div 
      className="card"
      onClick={() => {navigator.clipboard.writeText( url )}}
    >
      <img id="imagen" src={ url } alt={ title } />
      <p>{ title }</p>
    </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
