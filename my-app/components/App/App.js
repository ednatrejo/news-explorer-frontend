import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      {/* Wrap a Route component inside a Routes component
            and specify the path and element attributes as shown. */}
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
      </Routes>
      <Routes>path="/saved-news"</Routes>
    </div>
  );
}

export default App;
