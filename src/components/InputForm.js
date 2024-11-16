// src/components/InputForm.js
import React, { useState } from 'react';
import axios from 'axios';

function InputForm({ setCompanies, setSuggestions }) {
  const [companyInput, setCompanyInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!companyInput) return;

    try {
      // Send company to backend
      await axios.post('/api/competitors', {
        companies: [companyInput],
      });

      // Fetch suggestions
      const response = await axios.get('/api/suggestions', {
        params: { company: companyInput },
      });

      setCompanies([companyInput]);
      setSuggestions(response.data.suggestions);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Company Name:
        <input
          type="text"
          value={companyInput}
          onChange={(e) => setCompanyInput(e.target.value)}
        />
      </label>
      <button type="submit">Find Competitors</button>
    </form>
  );
}

export default InputForm;
