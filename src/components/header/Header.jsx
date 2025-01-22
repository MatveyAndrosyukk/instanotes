import logo from "../../images/LOGO.png"
import user_icon from "../../images/user_icon.svg"
import search_file_switch_icon from "../../images/search_file_switch_icon.svg"
import language_items_circle from "../../images/language_items_circle.png"
import color_items_switch_icon from "../../images/color_items_switch_icon.svg"
import color_items_circle from "../../images/color_items_circle.png"
import search_icon from "../../images/search_icon.svg"
import "../../styles/Header.css"

function Header() {
    return (
        <div className="header">
          <div className="container header_container">
            <div className="logo">
              <img src={logo} alt="Logo"></img>
            </div>
            <div className="rightside">
              <div className="user_icon">
                <img src={user_icon} alt="User icon"></img>
              </div>
              <div className="search_file">
                <div className="search_file_input">
                  <img src={search_icon} alt="Search file icon"></img>
                  <input type="text" placeholder="Search for files..."/>  
                </div>
                <div className="search_file_switch_icon">
                  <img src={search_file_switch_icon} alt="Switch file"></img>
                </div>
              </div>
              <div className="color_language">
                <div className="language_items">
                  <div className="language_items_circle">
                    <img src={language_items_circle} alt="Language items circle"></img>
                  </div>
                  <div className="language_items_switch_icon">
                    <img src={color_items_switch_icon} alt="Language items switch icon"></img>
                  </div>
                </div>
                <div className="color_items">
                  <div className="color_items_circle">
                    <img src={color_items_circle} alt="Color items circle"></img>
                  </div>
                  <div className="color_items_switch_icon">
                    <img src={color_items_switch_icon} alt="Color items switch icon"></img>
                  </div>
                </div>
              </div>
              <div className="logout_button">
                <a src="#">Logout</a>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Header;