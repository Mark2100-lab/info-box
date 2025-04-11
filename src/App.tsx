import React from 'react';
import './App.css';
import InfoBox from './components/InfoBox/InfoBox';

function App() {
  return (
    <div className="App">
      <InfoBox
        title="ICPSD"
        text="The Istanbul International Centre for Private Sector in Development (ICPSD) supports the private sector and foundations to become transformative partners in development through research, advocacy for inclusive business, facilitation of public-private dialogue and multi stakeholder-partnerships."
        linkText="Visit Website"
        linkUrl="https://www.undp.org/policy-centre/istanbul"
      />
    </div>
  );
}

export default App;
