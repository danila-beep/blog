import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { User } from "firebase/auth";
import { auth } from "../firebaseConfig";

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      console.log(firebaseUser);
      setUser(firebaseUser);
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
