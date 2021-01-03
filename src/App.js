import './App.css';
import Liverpool from './widgets/Liverpool';
import Stocks from './widgets/Stocks';
import Weather from './widgets/Weather';
import News from './widgets/News';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>JH Homepage</h2>
        <div className="row">
          <div className="col-sm-4">
            <Liverpool />
            <Weather />
            <Stocks />
            <News />
          </div>
          <div className="col-sm-4">1</div>
          <div className="col-sm-4">2</div>
        </div>
      </header>
    </div>
  );
}

export default App;
