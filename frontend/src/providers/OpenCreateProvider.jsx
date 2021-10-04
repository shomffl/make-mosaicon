import React, { createContext, useState } from "react";

export const OpenCreateContext = createContext({});

export const OpenCreateProvider = React.memo((props) => {
  const { children } = props;
  const [openCreate, setOpenCreate] = useState(true);

  return (
    <OpenCreateContext.Provider value={{ openCreate, setOpenCreate }}>
      {children}
    </OpenCreateContext.Provider>
  );
});
