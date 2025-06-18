import React, { useEffect, useState, useRef } from 'react';
import styled, { createGlobalStyle, keyframes, css } from 'styled-components';
import './styles.css';

const flicker = keyframes`
  0% {
    opacity: 0.97;
  }
  50% {
    opacity: 0.95;
  }
  100% {
    opacity: 0.97;
  }
`;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    html, body {
      overflow: auto;
    }
  }

  body {
    background-color: #000;
    font-family: 'Press Start 2P', cursive;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: 
      radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.8) 100%),
      linear-gradient(rgba(0, 50, 0, 0.2) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 50, 0, 0.2) 1px, transparent 1px);
    background-size: 100% 100%, 20px 20px, 20px 20px;
    perspective: 1000px;
    position: relative;
    animation: ${flicker} 0.15s infinite;
  }

  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%);
    pointer-events: none;
    z-index: 1;
  }

  /* CRT screen effect */
  body::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      rgba(18, 16, 16, 0) 50%,
      rgba(0, 0, 0, 0.25) 50%
    );
    background-size: 100% 4px;
    z-index: 2;
    pointer-events: none;
    animation: scanlines 0.05s linear infinite;
  }

  /* Vignette effect */
  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(
        circle at center,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.2) 80%,
        rgba(0, 0, 0, 0.8) 100%
      );
    pointer-events: none;
    z-index: 2;
  }

  @keyframes scanlines {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(4px);
    }
  }

  /* Screen curvature effect */
  #root {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  * {
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    body {
      font-size: 12px;
    }
  }
`;

const glitchText = keyframes`
  0%, 100% { transform: translate(0, 0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(2px, -2px); }
  60% { transform: translate(-2px, -2px); }
  80% { transform: translate(2px, 2px); }
`;

const textGlow = keyframes`
  0%, 100% {
    text-shadow: 0 0 4px #fff,
                 0 0 11px #fff,
                 0 0 19px #fff,
                 0 0 40px #7B2BF9,
                 0 0 80px #7B2BF9,
                 0 0 90px #7B2BF9,
                 0 0 100px #7B2BF9,
                 0 0 150px #7B2BF9;
  }
  50% {
    text-shadow: 0 0 4px #fff,
                 0 0 8px #fff,
                 0 0 15px #fff,
                 0 0 30px #7B2BF9,
                 0 0 60px #7B2BF9,
                 0 0 70px #7B2BF9,
                 0 0 80px #7B2BF9,
                 0 0 110px #7B2BF9;
  }
`;

// Reusable styled component mixins
const neonBorderEffect = css`
  border: 1px solid #5ff;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(85, 255, 255, 0.5);
`;

const retroTextEffect = css`
  font-family: 'Press Start 2P', cursive;
  color: #fff;
  letter-spacing: 2px;
`;

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  min-height: 100vh;
  min-width: 100vw;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: clamp(0.2rem, 2vw, 0.7rem) clamp(1vw, 2vw, 2vw);
  background: rgba(0,0,0,0.85);
  font-size: clamp(10px, 2vw, 16px);
  flex-shrink: 0;
  min-height: 32px;
  @media (max-width: 500px) {
    padding: 0.22rem 0.5rem;
    min-height: 28px;
    font-size: 1em;
    margin-top: 1.2em;
  }
`;

const ScoreBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
  @media (max-width: 500px) {
    gap: 0.1em;
  }
`;

const ScoreLabel = styled.div`
  ${retroTextEffect}
  font-size: 0.8em;
  white-space: nowrap;
  @media (max-width: 500px) {
    font-size: 0.85em;
  }
`;

const ScoreValue = styled.div`
  ${retroTextEffect}
  font-size: 1em;
  white-space: nowrap;
  @media (max-width: 500px) {
    font-size: 1.1em;
  }
`;

const HealthBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 500px) {
    gap: 0.1em;
  }
`;

const HealthBarLabel = styled.div`
  color: #fff;
  font-family: 'Press Start 2P', cursive;
  font-size: 0.8em;
  letter-spacing: 2px;
  margin-bottom: 0.1em;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 0.85em;
    margin-bottom: 0.05em;
  }
`;

const HealthBar = styled.div<{ health: number }>`
  width: clamp(40px, 18vw, 120px);
  height: clamp(6px, 2vw, 14px);
  background: #1a1a2e;
  ${neonBorderEffect}
  position: relative;
  margin: 0 1vw;
  overflow: hidden;
  @media (max-width: 500px) {
    width: clamp(50px, 50vw, 110px);
    height: clamp(7px, 2vw, 14px);
    margin: 0 0.5vw;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => props.health}%;
    height: 100%;
    background: ${props => props.health > 20 ? '#5ff' : '#f55'};
    box-shadow: 0 0 5px ${props => props.health > 20 ? 'rgba(85,255,255,0.5)' : 'rgba(255,85,85,0.5)'};
    transition: all 0.3s ease;
  }
`;

const TimeBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-width: 0;
`;

const TimeLabel = styled.div`
  ${retroTextEffect}
  font-size: 0.8em;
  white-space: nowrap;
  @media (max-width: 500px) {
    font-size: 0.85em;
  }
`;

const TimeValue = styled.div`
  ${retroTextEffect}
  font-size: 1em;
  white-space: nowrap;
  @media (max-width: 500px) {
    font-size: 1.1em;
  }
`;

const MobileSpacer = styled.div`
  height: 1.1em;
  @media (min-width: 501px) {
    display: none;
  }
`;

const MobileTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  flex: 1 1 0;
  min-height: 0;
  width: 100%;
  @media (max-width: 500px) {
    justify-content: flex-end;
    padding-bottom: 1.2em;
  }
`;

const MobileBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1 1 0;
  min-height: 0;
  width: 100%;
  @media (max-width: 500px) {
    justify-content: flex-start;
    padding-top: 1.2em;
  }
`;

const CenterContent = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 0;
  min-width: 0;
  width: 100%;
  overflow: hidden;
  gap: 2.5em;
  @media (max-width: 700px) {
    gap: 2em;
    padding: 0 0.2em;
  }
  @media (max-width: 500px) {
    gap: 1.2em;
    padding: 0;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
  }
`;

const GlitchText = styled.span`
  display: inline-block;
  position: relative;
  color: #f5f;
  text-shadow: 0 0 8px #fff, 0 0 16px #a259ff;
  &.glitch {
    animation: ${glitchText} 0.12s linear infinite;
    &::before, &::after {
      content: attr(data-text);
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      opacity: 0.6;
      pointer-events: none;
    }
    &::before {
      color: #ff00ea;
      text-shadow: 0 0 6px #ff00ea;
      transform: translate(-2px, 0);
    }
    &::after {
      color: #00fff0;
      text-shadow: 0 0 6px #00fff0;
      transform: translate(2px, 0);
    }
  }
`;

const PlayerIndicator = styled.div`
  ${retroTextEffect}
  font-size: clamp(1.7rem, 8vw, 2.7rem);
  margin-bottom: 3rem;
  margin-top: 1.2em;
  text-align: center;
  width: 100%;
  @media (max-width: 700px) {
    margin-top: 0.7em;
  }
  @media (max-width: 500px) {
    margin-top: 0.2em;
    margin-bottom: 3rem;
    font-size: clamp(1.3rem, 10vw, 2.2rem);
  }
`;

const PlayerIndicatorGlitch = ({ children }: { children: React.ReactNode }) => {
  const [isGlitching, setIsGlitching] = useState(false);
  useEffect(() => {
    let glitchTimeout: NodeJS.Timeout;
    const randomGlitch = () => {
      setIsGlitching(true);
      glitchTimeout = setTimeout(() => {
        setIsGlitching(false);
        glitchTimeout = setTimeout(randomGlitch, 400 + Math.random() * 1200);
      }, 60 + Math.random() * 120);
    };
    randomGlitch();
    return () => clearTimeout(glitchTimeout);
  }, []);
  return (
    <GlitchText className={isGlitching ? 'glitch' : ''} data-text={children}>{children}</GlitchText>
  );
};

const TypingText = styled.div`
  font-family: 'Press Start 2P', cursive;
  color: #ff4444;
  font-size: inherit;
  line-height: 1.5;
  display: flex;
  align-items: center;
  position: relative;
  word-break: break-all;
  white-space: pre-wrap;
  &.glitch {
    animation: ${glitchText} 0.1s linear infinite;
    &::before, &::after {
      content: attr(data-text);
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      opacity: 0.5;
    }
    &::before {
      color: #ff0000;
      transform: translate(-2px, 0);
    }
    &::after {
      color: #00ff00;
      transform: translate(2px, 0);
    }
  }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 8px;
  height: 16px;
  background-color: #00ff00;
  margin-left: 4px;
  animation: blink 1s step-end infinite;
  vertical-align: middle;
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;

function TypingGlitchText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setIsTyping(false);
    setIsDone(false);
    let currentIndex = 0;
    const chars = text.split('');
    setIsTyping(true);
    function type() {
      if (currentIndex < chars.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(type, 45);
      } else {
        setIsTyping(false);
        setDisplayedText(text);
        setIsDone(true);
      }
    }
    type();
    // eslint-disable-next-line
  }, [text]);

  // Glitch continuo y aleatorio
  useEffect(() => {
    if (isDone) {
      let glitchTimeout: NodeJS.Timeout;
      const randomGlitch = () => {
        setIsGlitching(true);
        glitchTimeout = setTimeout(() => {
          setIsGlitching(false);
          glitchTimeout = setTimeout(randomGlitch, 200 + Math.random() * 800);
        }, 60 + Math.random() * 120);
      };
      randomGlitch();
      return () => clearTimeout(glitchTimeout);
    }
  }, [isDone]);

  return (
    <TypingText className={isGlitching ? 'glitch' : ''} data-text={displayedText}>
      {displayedText}
      <Cursor />
    </TypingText>
  );
}

const neonPulse = keyframes`
  0% {
    filter: drop-shadow(0 0 2px #a259ff) drop-shadow(0 0 6px #b100ff);
  }
  50% {
    filter: drop-shadow(0 0 8px #a259ff) drop-shadow(0 0 18px #b100ff);
  }
  100% {
    filter: drop-shadow(0 0 2px #a259ff) drop-shadow(0 0 6px #b100ff);
  }
`;

const push = keyframes`
  0% { transform: scale(1); }
  30% { transform: scale(0.88); }
  60% { transform: scale(1.08); }
  100% { transform: scale(1); }
`;

const Logo = styled.div<{ isPushed: boolean }>`
  width: 8rem;
  height: 8rem;
  margin: 1.5rem auto 0 auto;
  background: url('/logo.png') center/contain no-repeat;
  border-radius: 50%;
  box-shadow:
    0 0 8px #a259ff,
    0 0 16px #a259ff,
    0 0 32px #b100ff,
    0 0 48px #b100ff;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${neonPulse} 2s ease-in-out infinite;
  transition: transform 0.15s;
  ${({ isPushed }) => isPushed && css`animation: ${push} 0.35s cubic-bezier(.68,-0.55,.27,1.55), ${neonPulse} 2s ease-in-out infinite;`}
  @media (min-width: 1000px) {
    width: 12rem;
    height: 12rem;
  }
`;

const Terminal = styled.div`
  width: 90vw;
  max-width: 400px;
  min-width: 180px;
  min-height: 7rem;
  max-height: 9rem;
  aspect-ratio: 1/1;
  background: #0a0a1f;
  margin: 3.5rem auto 1.2em auto;
  padding: 0.7em 0.7em;
  border: 1px solid #5ff;
  border-radius: 12px;
  box-shadow: 0 0 5px rgba(85,255,255,0.5);
  color: #ff4444;
  font-size: clamp(12px, 4vw, 16px);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  @media (min-width: 1000px) {
    width: auto;
    min-width: unset;
    max-width: unset;
    min-height: 3.5rem;
    max-height: unset;
    aspect-ratio: unset;
    padding: 1.2em 2em;
    margin: 3.5rem auto 1.2em auto;
    display: inline-flex;
  }
  @media (max-width: 500px) {
    width: 90vw;
    min-width: 140px;
    min-height: 6rem;
    max-width: 98vw;
    max-height: 8rem;
    aspect-ratio: 1/1;
    padding: 0.4em 0.3em;
    margin: 2.5rem auto 0.7em auto;
    font-size: 0.95em;
  }
`;

const Footer = styled.footer`
  width: 100%;
  padding: clamp(0.2em, 1vw, 0.7em) 0;
  background: none;
  color: #888;
  font-size: clamp(7px, 1.5vw, 12px);
  text-align: center;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.3em;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    font-size: 0.9em;
    padding: 0.5em 0;
    text-align: center;
    line-height: 1.7;
  }
`;

const FooterText = styled.span`
  display: inline-block;
  @media (max-width: 500px) {
    font-size: 0.9em;
  }
`;

const WebLink = styled.a`
  color: #bbff01;
  text-decoration: none;
  &:hover { color: #5ff; }
  @media (max-width: 500px) {
    font-size: 0.9em;
  }
`;

const heartBeat = keyframes`
  0%, 100% { transform: scale(1); }
  20% { transform: scale(1.2); }
  40% { transform: scale(0.95); }
  60% { transform: scale(1.25); }
  80% { transform: scale(1); }
`;

const Heart = styled.span`
  display: inline-block;
  color: #ff0033;
  font-size: 1.25em;
  margin: 0 0.18em;
  vertical-align: middle;
  position: relative;
  top: -2px;
  animation: ${heartBeat} 1.1s infinite cubic-bezier(.68,-0.55,.27,1.55);
  font-family: 'Press Start 2P', cursive;
  line-height: 1;
`;

function App() {
  const [score, setScore] = useState(0);
  const [health, setHealth] = useState(100);
  const [time, setTime] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [messageComplete, setMessageComplete] = useState(false);
  const clickSound = useRef<HTMLAudioElement | null>(null);
  const [soundLoaded, setSoundLoaded] = useState(false);
  const [logoPushed, setLogoPushed] = useState(false);

  // Efecto para cargar el sonido
  useEffect(() => {
    const audio = new Audio('./sounds/punch.wav');
    audio.addEventListener('canplaythrough', () => {
      clickSound.current = audio;
      setSoundLoaded(true);
      console.log('Sonido cargado correctamente');
    });
    audio.addEventListener('error', (e) => {
      console.error('Error cargando el sonido:', e);
    });
  }, []);

  // Efecto para la carga inicial de la barra de vida
  useEffect(() => {
    if (isInitialLoad) {
      const loadHealth = () => {
        setHealth(0);
        const interval = setInterval(() => {
          setHealth(prev => {
            if (prev >= 100) {
              clearInterval(interval);
              setIsInitialLoad(false);
              return 100;
            }
            return prev + 5; // Aumentado de 2 a 5 para carga más rápida
          });
        }, 30); // Reducido de 50 a 30ms para carga más rápida
        return () => clearInterval(interval);
      };
      loadHealth();
    }
  }, [isInitialLoad]);

  // Efecto para la recuperación automática de vida
  useEffect(() => {
    if (!isInitialLoad && health < 100) {
      const recoveryInterval = setInterval(() => {
        setHealth(prev => Math.min(prev + 2, 100)); // Aumentado de 1 a 2 para recuperación más rápida
      }, 50); // Reducido de 100 a 50ms para recuperación más rápida
      return () => clearInterval(recoveryInterval);
    }
  }, [health, isInitialLoad]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLogoClick = () => {
    if (!isInitialLoad) {
      // Reproducir sonido
      if (clickSound.current && soundLoaded) {
        try {
          clickSound.current.currentTime = 0;
          const playPromise = clickSound.current.play();
          if (playPromise !== undefined) {
            playPromise.catch(error => {
              console.error('Error reproduciendo sonido:', error);
            });
          }
        } catch (error) {
          console.error('Error con el sonido:', error);
        }
      }
      setScore(prev => prev + 10);
      setHealth(prev => Math.max(prev - 10, 0));
    }
  };

  const handleLogoClickPush = () => {
    setLogoPushed(true);
    setTimeout(() => setLogoPushed(false), 350);
    handleLogoClick();
  };

  return (
    <>
      <GlobalStyle />
      <MainLayout>
        <Header>
          <ScoreBlock>
            <ScoreLabel>SCORE</ScoreLabel>
            <ScoreValue>{score.toString().padStart(6, '0')}</ScoreValue>
          </ScoreBlock>
          <HealthBarWrapper>
            <HealthBarLabel>LIVE</HealthBarLabel>
            <HealthBar health={health} />
          </HealthBarWrapper>
          <TimeBlock>
            <TimeLabel>TIME</TimeLabel>
            <TimeValue>{time.toString().padStart(4, '0')}</TimeValue>
          </TimeBlock>
        </Header>
        <MobileSpacer />
        <CenterContent>
          <PlayerIndicator>
            <PlayerIndicatorGlitch>1 PLAYER</PlayerIndicatorGlitch>
          </PlayerIndicator>
          <Logo isPushed={logoPushed} onClick={handleLogoClickPush} />
          <Terminal>
            <TypingGlitchText text={"VUELVE_MAS_TARDE ERROR: 404_SITE_NOT_FOUND -"} />
          </Terminal>
        </CenterContent>
        <Footer>
          <FooterText>© 2025 INSERT COIN. TODOS LOS DERECHOS RESERVADOS.</FooterText>
          <FooterText>DESARROLLADO CON <Heart>♥</Heart> POR <WebLink href="https://1985webdesing.com/" target="_blank" rel="noopener noreferrer">1985WEBDESIGN</WebLink></FooterText>
        </Footer>
      </MainLayout>
    </>
  );
}

export default App; 