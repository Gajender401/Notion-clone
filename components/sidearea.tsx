import React from 'react';

const Sidearea: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 p-4">
        <h2 className="text-2xl font-bold mb-4">Main Content Area</h2>
        <p className="text-gray-600">
          This is the main content area of your Notion Clone.
          Add your content here and customize it to fit your needs.
        </p>
      </div>
    </div>
  );
};

export default Sidearea;
