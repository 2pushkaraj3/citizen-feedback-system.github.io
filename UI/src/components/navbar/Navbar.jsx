import "./navbar.scss"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined"
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined"
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined"
import ListOutlinedIcon from "@mui/icons-material/ListOutlined"



const Navbar = () => {

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search...." />
          <SearchOutlinedIcon/>
        </div>
        <div className="items">
          <div className="item">
          <LanguageOutlinedIcon className="iconss"/>
            English
          </div>
          <div className="item">
          <DarkModeOutlinedIcon className="iconss" />
          </div>
          <div className="item">
          <FullscreenExitOutlinedIcon className="iconss"/>
          </div>
          <div className="item">
          <NotificationsNoneOutlinedIcon className="iconss"/>
          <div className="counter">1</div>
          </div>
          <div className="item">
          <ChatBubbleOutlineOutlinedIcon className="iconss"/>
          <div className="counter">2</div>
          </div>
          <div className="item">
          <ListOutlinedIcon className="iconss"/>
          </div>
          <div className="item">
          <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="" className="avatar"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar