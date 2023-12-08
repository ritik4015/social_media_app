import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./stories.scss";

const Stories = () => {
  const {currentUser}=useContext(AuthContext);
  //Temporary Data 
  const stories=[
    {
      id: 1,
      name: "Ritik Kumar",
      img: "https://pbs.twimg.com/media/F91ZnHZbUAAmyUh?format=jpg&name=large",
    },
    {
      id: 2,
      name: "Ritik Kumar",
      img: "https://pbs.twimg.com/media/F91ZnHZbUAAmyUh?format=jpg&name=large",
    },
    {
      id: 3,
      name: "Ritik Kumar",
      img: "https://pbs.twimg.com/media/F91ZnHZbUAAmyUh?format=jpg&name=large",
    },
    {
      id: 4,
      name: "Ritik Kumar",
      img: "https://pbs.twimg.com/media/F91ZnHZbUAAmyUh?format=jpg&name=large",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories