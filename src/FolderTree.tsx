import React from 'react';

const FolderTree: React.FC<{ folder: any }> = ({ folder }) => {
  return (
    <div className="ml-4">
      <div className={`flex items-center ${folder.type === 'folder' ? 'font-bold' : 'font-normal'}`}>
        <span className={`mr-2 ${folder.type === 'folder' ? 'text-blue-600' : 'text-gray-800'}`}>
          {folder.type === 'folder' ? '📁' : '📄'} {/* Icons for folder and page */}
        </span>
        <span>{folder.name}</span>
      </div>
      {folder.type === 'folder' && folder.children && (
        <div className="ml-4">
          {folder.children.map((child: any, index: number) => (
            <FolderTree key={index} folder={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FolderTree;
