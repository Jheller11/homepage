import './App.css';
import Liverpool from './widgets/Liverpool';
import Stocks from './widgets/Stocks';
import Weather from './widgets/Weather';
import News from './widgets/News';
import ButtonBar from './components/ButtonBar';
import Widget from './widgets/Widget';

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <h2>JH Homepage</h2>
        <ButtonBar />
      </header>
      <main className='container'>
        <div className="row">
          <div className="col-sm-4">
            <Widget />
            <Liverpool />
            <Weather />
            <Stocks />
            <News />
          </div>
          <div className="col-sm-4">
            <Widget />
            <Widget />
          </div>
          <div className="col-sm-4">
            <Widget />
            <Widget />
          </div>
        </div>
        </main>
    </div>
  );
}

export default App;
