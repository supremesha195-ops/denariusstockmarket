import React, { createContext, useState, ReactNode } from "react";

type SettingsContextType = {
  soundEnabled: boolean;
  toggleSound: () => void;
};

export const SettingsContext = createContext<SettingsContextType>({
  soundEnabled: true,
  toggleSound: () => {},
});

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [soundEnabled, setSoundEnabled] = useState(true);

  const toggleSound = () => {
    setSoundEnabled((prev) => !prev);
  };

  return (
    <SettingsContext.Provider value={{ soundEnabled, toggleSound }}>
      {children}
    </SettingsContext.Provider>
  );
}
