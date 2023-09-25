import Stars from './Components/Stars';
import './Components/style.scss';

import Users from './Components/Users';
import { ratedArr, userObjs } from './Components/Data';
import Desc from './Components/Desc';

function App() {
  return (
    <div className="content">
      <div className="wrapper">
        <header>
          <Desc />
          <div className="rated">
            {ratedArr.map((item, index) => (
              <div
                className={`rates-item rates-item-${index + 1}`}
                key={index + 1}
              >
                <Stars /> <p>Rated 5 Stars in {item}</p>
              </div>
            ))}
          </div>
        </header>
        <footer>
          <Users userObjs={userObjs} />
        </footer>
      </div>
    </div>
  );
}

export default App;
