import { Routes, Route } from "react-router-dom"
import Index from "./pages/Index"
import HTMLPage from "./pages/HTMLPage"
import JavaScriptPage from "./pages/JavaScriptPage"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"


function App() {
  return (
    <div>
      <h1>Landing Page</h1>
      <Navigation />
      <Routes>
      <Route path="/" element={ <Index /> } />
        <Route path="HTMLPage" element={ <HTMLPage /> } />
        <Route path="JavaScriptPage" element={ <JavaScriptPage /> } />
      </Routes>
      <Footer />
    </div>
  )
}
export default App;