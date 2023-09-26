import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

// Create Context
const NewsletterContext = createContext();

// Provider component
export const NewsletterProvider = ({ children }) => {
  const [newsletters, setNewsletters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch newsletters from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/newsletter');
        console.log(response.data)
        setNewsletters(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Add a new newsletter
  const addNewsletter = async (newsletter) => {
    try {
      const response = await axios.post('/api/newsletters', newsletter);
      setNewsletters([...newsletters, response.data]);
    } catch (err) {
      setError(err);
    }
  };

  // Update an existing newsletter
  const updateNewsletter = async (id, updatedNewsletter) => {
    try {
      const response = await axios.put(`/api/newsletters/${id}`, updatedNewsletter);
      setNewsletters(newsletters.map(n => (n.id === id ? response.data : n)));
    } catch (err) {
      setError(err);
    }
  };

  // Delete a newsletter
  const deleteNewsletter = async (id) => {
    try {
      await axios.delete(`/api/newsletters/${id}`);
      setNewsletters(newsletters.filter(n => n.id !== id));
    } catch (err) {
      setError(err);
    }
  };

  return (
    <NewsletterContext.Provider value={{ newsletters, loading, error, addNewsletter, updateNewsletter, deleteNewsletter }}>
      {children}
    </NewsletterContext.Provider>
  );
};

// Custom hook to use the NewsletterContext
export const useNewsletter = () => {
  const context = useContext(NewsletterContext);
  if (!context) {
    throw new Error('useNewsletter must be used within a NewsletterProvider');
  }
  return context;
};
