// context/AuthContext.tsx
import React, { createContext, useState } from 'react';

export type UserRole = 'salesman' | 'supervisor' | 'manager';

type AuthContextType = {
  isLoggedIn: boolean;
  role: UserRole | null;
  login: (role: UserRole) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState<UserRole | null>(null);


  const login = (userRole: UserRole) => {
    console.log("userRole", userRole);
    setRole(userRole);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setRole(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
