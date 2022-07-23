import { Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Contato from './views/Contato';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Post from "./views/Post";
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/post/:post_uid" element={<Post />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
