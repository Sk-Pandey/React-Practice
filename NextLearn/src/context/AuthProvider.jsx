import { useState } from "react";
import { AuthContext } from "./AuthContext";
const AuthProvider = ({ Children }) => {
  const [user, setUser] = useState("");

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {Children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
