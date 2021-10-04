import React, { useState, createContext } from "react";

export const CourseContext = createContext({});

export const CourseProvider = React.memo((props) => {
  const { children } = props;
  const [course, setCourse] = useState(true);

  return (
    <CourseContext.Provider value={{ course, setCourse }}>
      {children}
    </CourseContext.Provider>
  );
});
