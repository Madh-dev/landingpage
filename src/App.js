import React,{useEffect,useState} from 'react';
import './App.css';

function App() {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setShowButton(screenWidth <= 1024);
    };

    // Call the handleResize function initially to set the initial state based on the current screen size
    handleResize();

    // Add a resize event listener to update the state when the screen size changes
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      <div className='container'>
        <div className='imagePart'><img src='/image.svg' alt='herobanner' /></div>
        <div className='textPart'>
          <h4>Imagine if <br />
            <span className='snap'>Snapchat</span><br />
            had events.</h4>
          <p>Easily host and share events with your friends across any social media</p>
          {!showButton &&<button>🎉Create my event</button>}
        </div>
        {showButton &&<button>🎉Create my event</button>}
      </div>
    </div>
  );
}

export default App;
