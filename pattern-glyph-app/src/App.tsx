function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <header className="p-6 bg-gray-800 w-full max-w-4xl text-center rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold text-yellow-400">Pattern Glyph Generator</h1>
        <p className="text-xl text-gray-300 mt-2">React + TypeScript + Vite + Tailwind Edition</p>
      </header>
      <main className="p-6 mt-8 w-full max-w-4xl">
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl text-pink-400 mb-4">App Content Area</h2>
          <p>This is where the tabs and content will go.</p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all">
            Test Button
          </button>
        </div>
      </main>
      <footer className="p-6 mt-auto text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Glyph App</p>
      </footer>
    </div>
  )
}

export default App
