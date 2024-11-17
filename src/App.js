// src/App.js
import React, { useState } from 'react';
import InputForm from './components/InputForm';
import AnalysisReport from './components/AnalysisReport';

function App() {
  const [analysis, setAnalysis] = useState(null);

  return (
    <div className="App">
      <h1>Competitor Analysis Tool</h1>
      <InputForm setAnalysis={setAnalysis} />
      {analysis && <AnalysisReport analysis={analysis} />}
    </div>
  );
}

export default App;
