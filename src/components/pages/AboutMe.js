import React from "react";
import background from "../../assets/images/butterflyBackground.png"
// import profile from "../../assets/images/profilepic.jpg"

const AboutMe = () => {
  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover'
    }} >
      <div className="container-fluid p-5 min-vh-100">
        <div className="row col-5">
          <h1 className="fw-bold pt-3">About Me</h1>
          <p>
            Talulah always saw the world in black and white. There were two choices for every situation and you had to choose one of them. It was therefore terribly uncomfortable for her to spend time with Frank. He saw the world in shades of gray with hundreds of choices to choose from in every situation.
            The trees, therefore, must be such old and primitive techniques that they thought nothing of them, deeming them so inconsequential that even savages like us would know of them and not be suspicious. At that, they probably didn't have too much time after they detected us orbiting and intending to land. And if that were true, there could be only one place where their civilization was hidden.
            {/* paragraphs taken from randomwordgenerator.com */}
          </p>
          {/* <div className="row row-cols-2">
            <div className="col-4">
              <img src={profile} class="img-thumbnail" alt="..." />
            </div>
          </div> */}

        </div>
      </div>
    </div >

  );
};




export default AboutMe;
