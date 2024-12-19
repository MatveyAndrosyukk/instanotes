import logo from "../../img/logo.png"
import "../../styles/Main.css"

function Main() {
    return (
      <div className="wrapper">
        <div className="header">
            <div className="container">
                <div className="header__content">
                    <div className="logo">
                        <div className="logo__image">
                            <img src={logo} alt="Logo"/>
                            </div>
                        <div className="logo__text">
                            Insta<span>Notes</span>
                        </div>
                    </div>
                    <div className="header__buttons">
                        <div className="orange_button">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="goo">
                                <defs>
                                    <filter id="goo">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                                    <feComposite in="SourceGraphic" in2="goo"/>
                                    </filter>
                                </defs>
                            </svg>

                            <span className="button--bubble__container">
                                <a href="#campaign" className="button button--bubble">
                                    Выйти
                                </a>
                                <span className="button--bubble__effect-container">
                                    <span className="circle top-left"></span>
                                    <span className="circle top-left"></span>
                                    <span className="circle top-left"></span>

                                    <span className="button effect-button"></span>

                                    <span className="circle bottom-right"></span>
                                    <span className="circle bottom-right"></span>
                                    <span className="circle bottom-right"></span>
                                </span>
                            </span> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <div className="main">

        </div>
        <div className="footer">

        </div>
      </div>
    );
  }
  
  export default Main;