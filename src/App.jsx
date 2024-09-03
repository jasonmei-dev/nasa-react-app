import { useState } from 'react';
import Main from './components/Main';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Main />
      {showModal && <Sidebar />}
      <Footer />
    </>
  );
}

export default App;
