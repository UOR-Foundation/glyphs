import React, { useState } from 'react';
import { Header, TabsContainer, Tab } from './components/layout';
import { Modal } from './components/common';
import { AboutTab, GenerateTab, DecodeTab } from './components/tabs';

type TabName = 'generate' | 'decode' | 'about';

function App() {
  const [activeTab, setActiveTab] = useState<TabName>('generate');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Test Modal Title");
  const [modalBody, setModalBody] = useState<React.ReactNode>(<p>This is test modal content.</p>);

  const openTestModal = () => {
    setModalTitle("Sample Modal");
    setModalBody(
      <div className="space-y-3">
        <p>This is a test of the reusable modal component.</p>
        <div className="flex justify-end space-x-2 pt-2">
            <button
                onClick={() => setIsModalOpen(false)}
                className="py-2 px-4 bg-gray-600 hover:bg-gray-500 text-gray-100 rounded-lg text-sm font-medium"
            >
                OK
            </button>
        </div>
      </div>
    );
    setIsModalOpen(true);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'generate':
        return <GenerateTab />;
      case 'decode':
        return <DecodeTab />;
      case 'about':
        return <AboutTab />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <Header />
      <main className="w-full max-w-5xl mx-auto mt-2 sm:mt-4 flex-grow">
        <TabsContainer className="px-2 sm:px-4 lg:px-0">
          <Tab
            label="Generate Glyph"
            isActive={activeTab === 'generate'}
            onClick={() => setActiveTab('generate')}
          />
          <Tab
            label="Decode Glyph"
            isActive={activeTab === 'decode'}
            onClick={() => setActiveTab('decode')}
          />
          <Tab
            label="About"
            isActive={activeTab === 'about'}
            onClick={() => setActiveTab('about')}
          />
        </TabsContainer>
        <div className="mt-1 p-2 sm:p-4 bg-gray-800 shadow-md rounded-b-lg">
          {renderTabContent()}
        </div>
      </main>
      <footer className="py-6 text-center text-gray-500 text-sm w-full">
        <button
          onClick={openTestModal}
          className="mb-4 py-2 px-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded-lg text-sm font-medium"
        >
          Open Test Modal
        </button>
        <p>&copy; {new Date().getFullYear()} Pattern Glyph App. Refactored Edition.</p>
      </footer>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={modalTitle}>
        {modalBody}
      </Modal>
    </div>
  );
}

export default App;
