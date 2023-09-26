// AuthContext.js
import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { data: session } = useSession();
  const [user, setUser] = useState(session?.user);
  const [authorData, setAuthorData] = useState(null);

  const fetchAuthor = useCallback(async (email, name) => {
    try {
      const response = await axios.get(`/api/createOrFetchAuthor?email=${email}&name=${name}`);
      if (response.status === 200) {
        setAuthorData(response.data);
      }
    } catch (err) {
      console.error("Fetch error:", err);
    }
  }, []);

  const createAuthor = useCallback(async (email, name) => {
    try {
      const response = await axios.post('/api/createOrFetchAuthor', { email, name });
      setAuthorData(response.data);
    } catch (err) {
      console.error("Create error:", err);
    }
  }, []);

  useEffect(() => {
    setUser(session?.user);


    async function manageAuthor() {
      if (session?.user) {
        const { email, name } = session.user;

        const fetchedAuthor = await fetchAuthor(email, name);

        if (fetchedAuthor === null) {
          await createAuthor(email, name);
        }
      }
    }

    manageAuthor();
  }, [session, fetchAuthor, createAuthor]);

  return (
    <AuthContext.Provider value={{ user, authorData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
