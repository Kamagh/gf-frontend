// src/components/AnalysisReport.js
import React from 'react';

function AnalysisReport({ analysis }) {
  return (
    <div>
      <h2>Competitor Analysis</h2>
      <pre>{analysis}</pre>
    </div>
  );
}

export default AnalysisReport;
