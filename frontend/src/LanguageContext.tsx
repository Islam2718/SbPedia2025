import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context
interface LanguageContextType {
  languageId: number;
  setLanguageId: (id: number) => void;
}

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  languageId: 1, // Default language ID
  setLanguageId: () => {},
});

// Custom hook to use the LanguageContext
export const useLanguage = () => useContext(LanguageContext);

// LanguageProvider component to wrap the app and provide the context
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [languageId, setLanguageId] = useState<number>(1); // Initialize with the default language ID
  console.log('LANGUAGE ID' + languageId);
  return (
    <LanguageContext.Provider value={{ languageId, setLanguageId }}>
      {children}
    </LanguageContext.Provider>
  );
};
