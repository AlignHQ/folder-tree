import React from 'react';

// Sample JSON data
const data = {
  userId: "user123",
  appState: "ready",
  folders: {
    name: "Root Folder",
    type: "folder",
    children: [
      {
        name: "Documents",
        type: "folder",
        children: [
          {
            name: "Resume.docx",
            type: "page"
          },
          {
            name: "CoverLetter.docx",
            type: "page"
          }
        ]
      },
      {
        name: "Images",
        type: "folder",
        children: [
          {
            name: "Vacation.jpg",
            type: "page"
          },
          {
            name: "Profile.png",
            type: "page"
          }
        ]
      },
      {
        name: "Notes",
        type: "page"
      }
    ]
  }
};

// Create a context to provide the data
const DataContext = React.createContext(data);

// DataProvider component
const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};

// Export the context and provider
export { DataProvider, DataContext };
