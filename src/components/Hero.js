import React from 'react';
import InstagramEmbed from 'react-instagram-embed'

const Hero = () => {
  return (
    <div className="heroWrapper">
      <div className="helpTile heroTile">
        <div className="helpContent helpTitle">Need Help?</div>
        <div className="helpIntro">If possible, Join our community now</div>
        <div className="helpText">Or, Text 123-456-7890 with <br /> your Name, Address <br /> and a brief description.</div>
        <div>
        <iframe className="textVideo" width="350" height="210" src="https://www.youtube.com/embed/9WIwlljva_s?si=OHUi2ASx8DQ-GEtH" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
        </div>
      </div>

      <div className=" responseTile heroTile">
        <div className="responseContent responseTitle">Responding to an Emergency?</div>
        <div className="responseContent responseIntro">We can coordinate your response</div>
        <div className="responseData">Get the Data you need, now.</div>
        <div className="responseMap">See a live map of help requests</div>
        <div className="responseVolunteers">Maximize the help of volunteers</div>
        <div className="responseContent responseApp">Join our community now.</div>
      </div>

      <div className="aboutTile heroTile">
        <div className="aboutContent aboutTitle">About Us</div>
        <div>
        {/* <div> */}
        <iframe className="textVideo" width="350" height="210" src="https://www.youtube.com/embed/9WIwlljva_s?si=OHUi2ASx8DQ-GEtH" frameborder="0" allow="encrypted-media" allowfullscreen></iframe></div>
        {/* </div> */}
          {/* <iframe className="aboutVideo" width="350" height="245" src="https://www.youtube.com/embed/jSCpCCg_DNk" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div> */}
        <div className="aboutFounder">Our website serves as a vital hub for disaster management resources, information, and support. Navigate through a wealth of disaster-related knowledge, tools, and updates, all in one convenient location..</div>
      </div>
    </div>
  );
}

export default Hero
