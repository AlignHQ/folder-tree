import React, { useContext } from 'react';
import { DataProvider, DataContext } from './DataProvider';
import FolderTree from './FolderTree'; // Import the updated FolderTree

const App: React.FC = () => {
  const data = useContext(DataContext); // Consume the data from context

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">User ID: {data.userId}</h1>
      <h2 className="text-xl">App State: {data.appState}</h2>
      <FolderTree folder={data.folders} />
    </div>
  );
};

// Wrap the App component with DataProvider
const WrappedApp: React.FC = () => (
  <DataProvider>
    <App />
  </DataProvider>
);

export default WrappedApp;
