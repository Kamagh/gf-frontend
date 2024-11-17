// src/components/InputForm.js
import React, { useState } from 'react';
import api from '../api';
import axios from 'axios';

function InputForm({ setAnalysis  }) {
    const [ideaInput, setIdeaInput] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!ideaInput) return;
  
      setLoading(true);
      try {
      // Send company to backend
      const response = await api.post('/api/idea-analysis', {
        idea: ideaInput,
      });

      setAnalysis(response.data.analysis);
    } catch (error) {
      console.error('Error fetching analysis:', error);
      alert('An error occurred while fetching the analysis. Please try again.');
    }finally {
        setLoading(false);
      }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
      Enter Your Idea:
      <textarea
          value={ideaInput}
          onChange={(e) => setIdeaInput(e.target.value)}
          rows={4}
          cols={50}
          placeholder="Describe your idea here..."
        />
      </label>
      <br />
      <button type="submit" disabled={loading}>
  {loading ? 'Loading...' : 'Get Competitor Analysis'}
</button>
    </form>
  );
}

export default InputForm;
