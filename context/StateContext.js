import { createContext, useContext, useState, useMemo } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <Context.Provider
      value={{
        isActive,
        setIsActive,
        isLoading,
        setIsLoading,
        isSubmitted,
        setSubmitted,
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
