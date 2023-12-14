import './App.css';

function App() {
  const url = 'https://www.falstad.com/circuit/circuitjs.html';

  return (
    <div id="root">
      <iframe
        style={{ outline: 'none', border: 'none', width: '100%', height: '100vh' }}
        src={url}
        title="No content"
      ></iframe>
      <div className="logo"></div>
    </div>
  );
}

export default App;
