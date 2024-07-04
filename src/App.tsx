import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import HomeContext from "./contexts/HomeContext"

export type Pokemon = {
  name: string,
  weight?: number,
  sprites?: {
    front_default?: string,
    back_default?: string
  }
}

function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<HomeContext />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  </Router>
}

export default App
