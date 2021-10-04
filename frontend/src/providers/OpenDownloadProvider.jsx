import React, { createContext, useState } from "react";

export const OpenDownloadContext = createContext({});

export const OpenDownloadProvider = React.memo((props) => {
  const { children } = props;
  const [openDownload, setOpenDownload] = useState(true);

  return (
    <OpenDownloadContext.Provider value={{ openDownload, setOpenDownload }}>
      {children}
    </OpenDownloadContext.Provider>
  );
});
