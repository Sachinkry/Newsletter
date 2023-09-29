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
      console.log("newsletterrrrrrContextPage", newsletter)
      const response = await axios.post('/api/newsletter', newsletter);
      setNewsletters([...newsletters, response.data]);
      return response.data;  // return the saved newsletter
    } catch (err) {
      setError(err);
      throw err;  // throw the error to be caught in handleSubmit
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

  // Subscribe user to a newsletter
  const subscribeToNewsletter = async (email, newsletterId) => {
    try {
      console.log(`subscribing to ${newsletterId} with email: ${email}`)
      const updatedNewsletter = await axios.post('/api/newsletter/subscribe', { email, newsletterId });
      // Update state if needed
      if(updatedNewsletter) {
        console.log("here is updated newsletter::::", updateNewsletter)
      }
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
    <NewsletterContext.Provider value={{ newsletters, loading, error, addNewsletter, updateNewsletter, subscribeToNewsletter,deleteNewsletter }}>
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
