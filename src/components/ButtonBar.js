import styles from '../styles/buttonBar.module.css';

function ButtonBar() {
    let classes = 'btn btn-link ' + styles.widgetbtn
    return (
      <div className='my-2'>
          <div className="btn-group" role="group" aria-label="nav buttons">
              <button type="button" className={classes}>Stocks</button>
              <button type="button" className={classes}>Weather</button>
              <button type="button" className={classes}>News</button>
              <button type="button" className={classes}>Liverpool</button>
          </div>
      </div>
    )
}

export default ButtonBar
