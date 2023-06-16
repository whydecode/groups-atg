import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import "../css/Home.css";
import down from "../images/Vector.png";
import join from "../images/join.png";
import Dropdown from "react-bootstrap/Dropdown";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import profile1 from "../images/profile1.png";
import profile2 from "../images/profile2.png";
import profile3 from "../images/profile3.png";
import profile4 from "../images/profile4.png";
import editImg from "../images/edit.png";
import thumbsup from "../images/thumbsup.png";
import recommendation1 from "../images/recommendation1.png";
import recommendation2 from "../images/recommendation2.png";
import recommendation3 from "../images/recommendation3.png";
import recommendation4 from "../images/recommendation4.png";
const data = {
  posts: [
    {
      image: image1,
      type: "✍️ Article",
      title: "What if famous brands had regular fonts? Meet RegulaBrands!",
      description:
        "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      author: "Sarthak Kamra",
      profile: profile1,
      view: "1.4k views",
    },
    {
      image: image2,
      type: "🔬️ Education",
      title:
        "Tax Benefits for Investment under National Pension Scheme launched by Government",
      description:
        "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      author: "Sarah West",
      profile: profile2,
      view: "1.4k views",
    },
    {
      image: image3,
      type: "🗓️ Meetup",
      title: "Finance & Investment Elite Social Mixer @Lujiazui",
      author: "Ronal Jones",
      profile: profile3,
      view: "1.4k views",
      button: "Visit Website",
      buttonColor: "#E56135",
      time: "Fri, 12 Oct, 2018",
      location: "Ahmedabad, India",
    },
    {
      image: null,
      type: "💼️ Job",
      title: "Software Developer",
      author: "Joseph Gray",
      profile: profile4,
      view: "1.4k views",
      button: "Apply on Timesjobs",
      buttonColor: "#02B875",
      company: "Innovaccer Analytics Private Ltd.",
      location: "Noida, India",
    },
  ],
};

const HomeScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [location, setLocation] = useState("Noida, India");
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleChange = (event) => {
    setLocation(event.target.value);
  };
  return (
    <div className="home">
      <div className="homeTop">
        <div className="smallJoin">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
          <button className="topJoinButton">Join Group</button>
        </div>
        <div className="topContent">
          <h1>Computer Engineering</h1>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </div>
      <Container>
        <div className="homeContent">
          <div className="homeMenu">
            <div>
              <ul className="menuList">
                <li>
                  <a href="" className="dark">
                    All Posts
                  </a>
                </li>
                <li>
                  <a href="">Article</a>
                </li>
                <li>
                  <a href="">Event</a>
                </li>
                <li>
                  <a href="">Education</a>
                </li>
                <li>
                  <a href="">Job</a>
                </li>
              </ul>
            </div>
            <div>
              <button className="postButton">
                Write a Post <img src={down} alt="down" />
              </button>
              <button className="joinButton">
                <img src={join} alt="join" /> Join Group
              </button>
            </div>
          </div>
          <div className="smallMenu">
            <a href="" className="posts">
              Posts(360)
            </a>
            <Dropdown className="filterMenu">
              <Dropdown.Toggle id="dropdown-basic">Filter: All</Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="">All Posts</Dropdown.Item>
                <Dropdown.Item href="">Article</Dropdown.Item>
                <Dropdown.Item href="">Event</Dropdown.Item>
                <Dropdown.Item href="">Education</Dropdown.Item>
                <Dropdown.Item href="">Job</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="postsDiv">
            {data.posts.map((post, index) => (
              <div key={index} className="post">
                {post.image && (
                  <img src={post.image} alt="Post" className="postImage" />
                )}
                <p className="postType">{post.type}</p>
                <div className="postTitle">
                  <p>{post.title} </p>
                  <Dropdown className="editMenu">
                    <Dropdown.Toggle id="dropdown-basic">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-three-dots"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                      </svg>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="">Edit</Dropdown.Item>
                      <Dropdown.Item href="">Report</Dropdown.Item>
                      <Dropdown.Item href="">Option 3</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                {post.description ? (
                  <p className="postDesc">{post.description}</p>
                ) : null}

                {post.time ? (
                  <div className="postDetail">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        fill="currentColor"
                        className="bi bi-calendar-event"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                      </svg>{" "}
                      {post.time}
                    </span>{" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        fill="currentColor"
                        className="bi bi-geo-alt"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>{" "}
                      {post.location}
                    </span>
                  </div>
                ) : null}
                {post.company ? (
                  <div className="postDetail">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        fill="currentColor"
                        className="bi bi-briefcase"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
                      </svg>{" "}
                      {post.company}
                    </span>{" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        fill="currentColor"
                        className="bi bi-geo-alt"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>{" "}
                      {post.location}
                    </span>
                  </div>
                ) : null}

                {post.button ? (
                  <button
                    style={{ color: post.buttonColor }}
                    className="visitButton"
                  >
                    {post.button}
                  </button>
                ) : null}

                <p className="postAuthor">
                  <span>
                    <img src={post.profile} alt={post.author} /> {post.author}
                  </span>
                  <span>
                    {post.view}
                    <button className="shareButton">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        className="bi bi-share"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                      </svg>
                    </button>
                  </span>
                </p>
              </div>
            ))}
          </div>
          <div className="sideDiv">
            <div className="locationDiv">
              <div className="locationEdit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="20"
                  fill="currentColor"
                  className="bi bi-geo-alt"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
                <form action="">
                  <input
                    type="text"
                    value={location}
                    onChange={handleChange}
                    className="location"
                    disabled={!isEditing}
                    ref={inputRef}
                    required
                  />
                </form>

                {isEditing ? (
                  <button onClick={handleSaveClick} className="editButton">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </button>
                ) : (
                  <button onClick={handleEditClick} className="editButton">
                    <img src={editImg} alt="" />
                  </button>
                )}
              </div>
              <div className="aboutLocation">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    className="bi bi-exclamation-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                  </svg>
                </div>
                <div>
                  <span>
                    Your location will help us serve better and extend a
                    personalised experience.
                  </span>
                </div>
              </div>
              <div className="recommendationGroups">
                <h5>
                  <img src={thumbsup} alt="thumbsUp" className="thumbsup" />{" "}
                  RECOMMENDED GROUPS
                </h5>
                <div className="recommendation">
                  <span>
                    <img src={recommendation1} alt="Leisure" /> Leisure
                  </span>
                  <button className="followButton">Follow</button>
                </div>
                <div className="recommendation">
                  <span>
                    <img src={recommendation2} alt="Activism" /> Activism
                  </span>
                  <button className="followButton">Follow</button>
                </div>
                <div className="recommendation">
                  <span>
                    <img src={recommendation3} alt="MBA" /> MBA
                  </span>
                  <button className="followButton">Follow</button>
                </div>
                <div className="recommendation">
                  <span>
                    <img src={recommendation4} alt="Philosophy" /> Philosophy
                  </span>
                  <button className="followButton">Follow</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeScreen;
