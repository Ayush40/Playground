import React from "react";

const Profile = () => {
  const user = {
    name: "Ayush",
    email: "ayush@example.com",
    location: "New York, USA",
    bio: "Full Stack Developer | Tech Enthusiast",
    avatar: "https://picsum.photos/id/1/200/300",
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card text-center shadow-lg">
            <div className="card-body">
              <img src={user.avatar} alt="Profile" className="mb-3" width="120" />
              <h2>{user.name}</h2>
              <p className="text-muted">{user.bio}</p>
              <hr />
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Location:</strong> {user.location}</p>
              <a href="#" className="btn btn-primary">Edit Profile</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
