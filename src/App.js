import React from 'react';
import './App.css';
import CompanySetter from './components/CompanySetter/CompanySetter';
import Form from './components/Form/Form';
import Summary from './components/Summary/Summary';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useStateContext } from './context';

function App() {
  const initState = useStateContext();
  const { setState, state } = initState;

  const resetCompany = () => {
    setState({ ...state, company: null, name: '', email: '', text: '' });
  };

  return (
    <div className={'app-wrapper'}>
      <div className={'main-container'}>
        <Router>
          <div className={'views-container'}>
            <Switch>
              <Route path="/" exact component={CompanySetter} />
              <Route path="/form" component={Form} />
              <Route path="/summary" component={Summary} />
              <Route path="/privacy-policy" component={PrivacyPolicy} />
            </Switch>
          </div>
          <div className={'button-container'}>
            {<Link to="/">{<button onClick={resetCompany}>HomePage</button>}</Link>}
            <Link to="/privacy-policy">{<button>Privacy Policy</button>}</Link>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
