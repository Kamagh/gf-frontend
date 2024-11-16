// src/components/AnalysisReport.js
import React from 'react';

function AnalysisReport({ analysis }) {
  return (
    <div>
      <h2>Analysis Report</h2>
      <pre>{analysis}</pre>
    </div>
  );
}

export default AnalysisReport;
