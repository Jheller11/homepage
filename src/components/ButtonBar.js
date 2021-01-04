import styles from '../styles/buttonBar.module.css'

function ButtonBar () {
  let classes = 'btn btn-link ' + styles.widgetbtn
  return (
    <div className='my-2 container'>
      <p className='d-inline'>Quick Links:</p>
      <div className='btn-group' role='group' aria-label='nav buttons'>
        <a type='button' className={classes} href='#stocks'>Stocks</a>
        <a type='button' className={classes} href='#weather'>Weather</a>
        <a type='button' className={classes} href='#news'>News</a>
        <a type='button' className={classes} href='#liverpool'>Liverpool</a>
      </div>
    </div>
  )
}

export default ButtonBar
