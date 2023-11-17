import React, { useEffect, useState } from 'react';
import { JokePost } from '../../types';

const JokesBox: React.FC = () => {
  const [joke, setJoke] = useState<JokePost[]>([]);

  const BASE_URL = 'https://api.chucknorris.io/jokes/random';

  const fetchJoke = async () => {
    try {
      const response = await fetch(BASE_URL);

      if (response.ok) {
        const newJoke: JokePost = await response.json();
        setJoke([newJoke]);
      }
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <>
      <div className="mb-3 d-flex flex-column align-items-center">
        <div className="p-3">
          {joke.map((item) => (
            <p key={item.id}>{item.value}</p>
          ))}
        </div>
        <button type="button" className="btn btn-primary ms-2" onClick={fetchJoke}>
          Show another joke
        </button>
      </div>
    </>
  );
};

export default JokesBox;

