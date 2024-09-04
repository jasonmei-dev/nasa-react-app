import { useState, useEffect } from 'react';
import Main from './components/Main';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const fetchAPIData = async () => {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`;

      try {
        const res = await fetch(url);
        const apiData = await res.json();
        setData(apiData);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchAPIData();
  }, []);

  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && <Sidebar data={data} handleToggleModal={handleToggleModal} />}
      {data && <Footer data={data} handleToggleModal={handleToggleModal} />}
    </>
  );
}

export default App;
