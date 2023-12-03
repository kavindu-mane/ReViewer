import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  user: {},
  setUser: () => {},
  accessToken: null,
  setAccessToken: () => {},
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  let contextData = {
    user: user,
    setUser: setUser,
    accessToken: accessToken,
    setAccessToken: setAccessToken,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

// export const useMarkdown = () => useContext(MarkdownContext);
export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
