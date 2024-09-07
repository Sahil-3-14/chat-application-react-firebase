import "./detail.css";

function Detail() {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Sahil</h2>
        <p>Lorem ipsum dolor sit amet elit. </p>
      </div>

      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="photos">
            <div className="photoItems">
              <div className="photoDetail">
                <img
                  src="https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg"
                  alt=""
                />
                <span>photo_2024.jpg</span>
              </div>
              <img src="./download.png" className="icon" alt="" />
            </div>
          </div>

          <div className="photos">
            <div className="photoItems">
              <div className="photoDetail">
                <img
                  src="https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg"
                  alt=""
                />
                <span>photo_2024.jpg</span>
              </div>
              <img src="./download.png" className="icon" alt="" />
            </div>
          </div>

          <div className="photos">
            <div className="photoItems">
              <div className="photoDetail">
                <img
                  src="https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg"
                  alt=""
                />
                <span>photo_2024.jpg</span>
              </div>
              <img src="./download.png" className="icon" alt="" />
            </div>
          </div>

          <div className="photos">
            <div className="photoItems">
              <div className="photoDetail">
                <img
                  src="https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg"
                  alt=""
                />
                <span>photo_2024.jpg</span>
              </div>
              <img src="./download.png" className="icon" alt="" />
            </div>
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" className="icon" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className="logout">Logout</button>
      </div>
    </div>
  );
}

export default Detail;
