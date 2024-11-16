// src/App.js
import React, { useState } from 'react';
import InputForm from './components/InputForm';
import Suggestions from './components/Suggestions';
import AnalysisReport from './components/AnalysisReport';
import axios from 'axios';

function App() {
  const [companies, setCompanies] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCompetitors, setSelectedCompetitors] = useState([]);
  const [analysis, setAnalysis] = useState(null);

  return (
    <div className="App">
      <h1>Competitor Analysis Tool</h1>
      <InputForm setCompanies={setCompanies} setSuggestions={setSuggestions} />
      {suggestions.length > 0 && (
        <Suggestions
          suggestions={suggestions}
          setSelectedCompetitors={setSelectedCompetitors}
        />
      )}
      {selectedCompetitors.length > 0 && (
        <button
          onClick={() =>
            fetchAnalysis(selectedCompetitors, setAnalysis)
          }
        >
          Get Analysis
        </button>
      )}
      {analysis && <AnalysisReport analysis={analysis} />}
    </div>
  );
}

async function fetchAnalysis(selectedCompetitors, setAnalysis) {
  try {
    const response = await axios.post('/api/analysis', {
      competitors: selectedCompetitors,
    });
    setAnalysis(response.data.analysis);
  } catch (error) {
    console.error('Error fetching analysis:', error);
  }
}

export default App;
