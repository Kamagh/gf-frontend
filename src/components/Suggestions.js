// src/components/Suggestions.js
import React, { useState } from 'react';

function Suggestions({ suggestions, setSelectedCompetitors }) {
  const [selected, setSelected] = useState([]);

  const handleCheckboxChange = (competitor) => {
    setSelected((prevSelected) => {
      if (prevSelected.includes(competitor)) {
        return prevSelected.filter((item) => item !== competitor);
      } else {
        return [...prevSelected, competitor];
      }
    });
  };

  // Update the parent component's state
  React.useEffect(() => {
    setSelectedCompetitors(selected);
  }, [selected, setSelectedCompetitors]);

  return (
    <div>
      <h2>Suggested Competitors</h2>
      <ul>
        {suggestions.map((competitor, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                value={competitor}
                onChange={() => handleCheckboxChange(competitor)}
              />
              {competitor}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Suggestions;
