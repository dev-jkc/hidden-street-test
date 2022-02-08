import './css_init.css';
import './App.scss';
import React, { useEffect, useState } from 'react';

function App() {
  const [hamburgerisOpen, setHamburgerisOpen] = useState(false);

  const hamburgerMenu = () => {
    setHamburgerisOpen(hamburgerOpen => !hamburgerOpen);
  }

  useEffect(() => {
    if (hamburgerisOpen){
      document.body.style.cssText = `
        position: fixed; 
        top: -${window.scrollY}px;
        overflow-y: scroll;
        width: 100%;`;
    }
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, [hamburgerisOpen]);

  return (
    <div className="App">
      <div className='header'>
        <button className='header-hamburger' onClick={() => { hamburgerMenu() }}>
          <img src={hamburgerisOpen == true ? require('./img/ic/default/cancel.svg').default : require('./img/ic/default/hamburger.svg').default} alt='hamburger' />
        </button>
        <div className='container-header-logo'>
          <img className='header-logo' src={require('./img/logo_main.svg').default} alt='logo' />
        </div>
        <button className='header-btn'>login</button>
      </div>

      <div className='main-contents'>
        <div className='container-card'>
          <div className='card-top'>
            <img className='card-top-img' src={require('./img/thumbnail_market.png')} alt='thumbnail' />
            <div className='card-top-title'>
              <p>경메모장</p>
              <div className='card-top-button'>
                <span>바로가기</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4393 1.93934C13.0251 1.35355 13.9749 1.35355 14.5607 1.93934L23.5607 10.9393C24.1464 11.5251 24.1464 12.4749 23.5607 13.0607L14.5607 22.0607C13.9749 22.6464 13.0251 22.6464 12.4393 22.0607C11.8536 21.4749 11.8536 20.5251 12.4393 19.9393L20.3787 12L12.4393 4.06066C11.8536 3.47487 11.8536 2.52513 12.4393 1.93934Z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
          <div className='card-top'>
            <img className='card-top-img' src={require('./img/thumbnail_market.png')} alt='thumbnail' />
            <div className='card-top-title'>
              <p>경메모장</p>
              <div className='card-top-button'>
                <span>바로가기</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4393 1.93934C13.0251 1.35355 13.9749 1.35355 14.5607 1.93934L23.5607 10.9393C24.1464 11.5251 24.1464 12.4749 23.5607 13.0607L14.5607 22.0607C13.9749 22.6464 13.0251 22.6464 12.4393 22.0607C11.8536 21.4749 11.8536 20.5251 12.4393 19.9393L20.3787 12L12.4393 4.06066C11.8536 3.47487 11.8536 2.52513 12.4393 1.93934Z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
          <div className='card-top'>
            <img className='card-top-img' src={require('./img/thumbnail_market.png')} alt='thumbnail' />
            <div className='card-top-title'>
              <p>경메모장</p>
              <div className='card-top-button'>
                <span>바로가기</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4393 1.93934C13.0251 1.35355 13.9749 1.35355 14.5607 1.93934L23.5607 10.9393C24.1464 11.5251 24.1464 12.4749 23.5607 13.0607L14.5607 22.0607C13.9749 22.6464 13.0251 22.6464 12.4393 22.0607C11.8536 21.4749 11.8536 20.5251 12.4393 19.9393L20.3787 12L12.4393 4.06066C11.8536 3.47487 11.8536 2.52513 12.4393 1.93934Z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
          <div className='card-top'>
            <img className='card-top-img' src={require('./img/thumbnail_market.png')} alt='thumbnail' />
            <div className='card-top-title'>
              <p>경메모장</p>
              <div className='card-top-button'>
                <span>바로가기</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4393 1.93934C13.0251 1.35355 13.9749 1.35355 14.5607 1.93934L23.5607 10.9393C24.1464 11.5251 24.1464 12.4749 23.5607 13.0607L14.5607 22.0607C13.9749 22.6464 13.0251 22.6464 12.4393 22.0607C11.8536 21.4749 11.8536 20.5251 12.4393 19.9393L20.3787 12L12.4393 4.06066C11.8536 3.47487 11.8536 2.52513 12.4393 1.93934Z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
          <div className='card-top'>
            <img className='card-top-img' src={require('./img/thumbnail_market.png')} alt='thumbnail' />
            <div className='card-top-title'>
              <p>경메모장</p>
              <div className='card-top-button'>
                <span>바로가기</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4393 1.93934C13.0251 1.35355 13.9749 1.35355 14.5607 1.93934L23.5607 10.9393C24.1464 11.5251 24.1464 12.4749 23.5607 13.0607L14.5607 22.0607C13.9749 22.6464 13.0251 22.6464 12.4393 22.0607C11.8536 21.4749 11.8536 20.5251 12.4393 19.9393L20.3787 12L12.4393 4.06066C11.8536 3.47487 11.8536 2.52513 12.4393 1.93934Z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={hamburgerisOpen == true ? "menu-mobile" : "menu-mobile-hide"}>
          <div className='container-mobile-login'>
            <span className='mobile-login-text'>현재 로그인 상태가 아닙니다</span><button className='mobile-login-btn'>login</button>
          </div>
          <div className='cell-menu-mobile'>
            <span>Top</span>
            <svg className='ic-menu-mobile' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4393 1.93934C13.0251 1.35355 13.9749 1.35355 14.5607 1.93934L23.5607 10.9393C24.1464 11.5251 24.1464 12.4749 23.5607 13.0607L14.5607 22.0607C13.9749 22.6464 13.0251 22.6464 12.4393 22.0607C11.8536 21.4749 11.8536 20.5251 12.4393 19.9393L20.3787 12L12.4393 4.06066C11.8536 3.47487 11.8536 2.52513 12.4393 1.93934Z" fill="currentColor" />
            </svg>
          </div>
          <div className='cell-menu-mobile'>
            <span>경메모장</span>
            <svg className='ic-menu-mobile' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4393 1.93934C13.0251 1.35355 13.9749 1.35355 14.5607 1.93934L23.5607 10.9393C24.1464 11.5251 24.1464 12.4749 23.5607 13.0607L14.5607 22.0607C13.9749 22.6464 13.0251 22.6464 12.4393 22.0607C11.8536 21.4749 11.8536 20.5251 12.4393 19.9393L20.3787 12L12.4393 4.06066C11.8536 3.47487 11.8536 2.52513 12.4393 1.93934Z" fill="currentColor" />
            </svg>
          </div>
          <div className='cell-menu-mobile'>
            <span>코인샵 계산기</span>
            <svg className='ic-menu-mobile' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4393 1.93934C13.0251 1.35355 13.9749 1.35355 14.5607 1.93934L23.5607 10.9393C24.1464 11.5251 24.1464 12.4749 23.5607 13.0607L14.5607 22.0607C13.9749 22.6464 13.0251 22.6464 12.4393 22.0607C11.8536 21.4749 11.8536 20.5251 12.4393 19.9393L20.3787 12L12.4393 4.06066C11.8536 3.47487 11.8536 2.52513 12.4393 1.93934Z" fill="currentColor" />
            </svg>
          </div>
        </div>


      <div className='footer'>
        <p>© 2022. May2nd All rights reserved. hidden-street is not associated with NEXON Korea.</p>
      </div>
    </div>
  );
}

export default App;
