import React, {useState} from 'react';
import '../assets/css/Pastel.css';
import ProfilePicture from './ProfilePic';
import GridWrapper from './GridWrapper';
import GridItemWrapper from './GridItemWrapper';
import TypingEffect from './TypingEffect';

const App: React.FC = () => {

  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const handleTypingComplete = () => {
    setIsTypingComplete(true);
  };

  return (
    <GridWrapper>

      {/* Intro text on the left side of the profile picture */}
      <GridItemWrapper rowStart={2} columnStart={2} columnEnd={4}>
        <p style={{ textAlign: 'left', fontSize: '2em', padding: '20px', color: 'var(--white)' }}>
          Hi, I am Mayur Beldar.
          <TypingEffect text="A Sr. Software Development Engineer with a strong product mindset." onComplete = {handleTypingComplete} speed={50} initialDelay={1500} />
        </p>
      </GridItemWrapper>

      {/* Profile picture on the right side, 2/3 from the left margin */}
      <GridItemWrapper rowStart={2} columnStart={4}>
        <ProfilePicture />
      </GridItemWrapper>

      <GridItemWrapper rowStart={3} columnStart={2} columnEnd={4}>
         <p className="social" style={{ visibility: isTypingComplete ? 'visible' : 'hidden' }}>
          Connect with me on <a target="_blank" href="https://www.linkedin.com/in/mayurbeldar/">LinkedIn</a> and <a target="_blank" href="https://github.com/mbeldar">Github</a>.
        </p>
      </GridItemWrapper>
    </GridWrapper>
  );
};

export default App;
