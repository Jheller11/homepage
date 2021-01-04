import './App.css'
import Liverpool from './widgets/Liverpool'
import Stocks from './widgets/Stocks'
import Weather from './widgets/Weather'
import News from './widgets/News'
import ButtonBar from './components/ButtonBar'
import Widget from './widgets/Widget'
import GoogleSearchBar from './components/GoogleSearchBar'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <h2 className='text-center'>Dashboard</h2>
        <ButtonBar />
        <GoogleSearchBar />
      </header>
      <main className='container'>
        <div className='row'>
          <div className='col-sm-4'>
            <Stocks />
            <br />
            <Widget />
            <br />
            <Liverpool />
            <br />
            <Weather />
            <br />
            <News />
          </div>
          <div className='col-sm-4'>
            <Widget />
            <br />
            <Widget />
          </div>
          <div className='col-sm-4'>
            <Widget />
            <br />
            <Widget />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
