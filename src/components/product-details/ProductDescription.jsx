import React, { useState } from 'react';

export default function ProductDescription({decription}) {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="">
      {/* <div className="tabs flex space-x-4 border-b border-gray-300">
       
        <button
          className={`pb-2 ${activeTab === 'description' ? 'border-b-2 border-blue-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </button>

     
        <button
          className={`pb-2 ${activeTab === 'specifications' ? 'border-b-2 border-blue-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('specifications')}
        >
          Specifications
        </button>
      </div> */}

      {/* Tab Content */}
      <div className="bg-white p-4 rounded-sm ">
        {activeTab === 'description' && (
          <div>
            <h3 className="border-b font-semibold mb-2">Product Description</h3>
            <p className="text-gray-700">
              {decription}
            </p>
          </div>
        )}

        {activeTab === 'specifications' && (
          <div>
            <h3 className="text-xl font-semibold mb-2">Product Specifications</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Processor: Octa-core</li>
              <li>Battery: 5000mAh</li>
              <li>Screen Size: 6.5 inches</li>
              <li>Camera: 12MP</li>
              <li>Color: Black</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
