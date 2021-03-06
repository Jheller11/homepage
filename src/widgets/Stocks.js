function Stocks () {
  return (
    <div className='card' id='stocks'>
      <div className='card-body'>
        <h5 className='card-title'>Stocks</h5>
        <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>Cras justo odio</li>
        <li className='list-group-item'>Dapibus ac facilisis in</li>
        <li className='list-group-item'>Vestibulum at eros</li>
      </ul>
      <div className='card-body'>
        <a href='https://us.etrade.com/home/welcome-back' className='card-link' target='_blank' rel='noreferrer'>Etrade</a>
        <a href='https://www.google.com' className='card-link'>Another link</a>
      </div>
    </div>
  )
}

export default Stocks
