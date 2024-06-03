import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const KiezDetails = () => {
  const { kiezId } = useParams();
  const [kiez, setKiez] = useState(null);

  useEffect(() => {
    const fetchKiez = async () => {
      try {
        const response = await fetch(`http://localhost:5005/api/kiez/${kiezId}`);
        const data = await response.json();
        setKiez(data);
      } catch (error) {
        console.error('Error fetching kiez:', error);
      }
    };

    fetchKiez();
  }, [kiezId]);

  if (!kiez) {
    return <div>Loading...</div>;
  }

  return (
    <div className="kiez-details-container">
      <img src={kiez.image} alt={kiez.kiezName} className="kiez-image" />
      <div className="kiez-details">
        <h1 className="kiez-name">{kiez.kiezName}</h1>
        <p className="kiez-description">{kiez.description}</p>
      </div>
    </div>
  );
};

export default KiezDetails;
