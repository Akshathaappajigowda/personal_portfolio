import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Profile pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <blockquote>
               <p>Life isn't about finding yourself, Life is about creating yourself.</p>
               <cite>George Bernard Shaw</cite>
            </blockquote>
            <p>I’m a self-thought web designer and developer, since the beginning of last year I’m firmly committed to become a full stack web developer and making my way through this commitment with the help of the uncountable resources available online, well I’m not new to tech world I have completed Bachelor of Engineering in electronics and communication. Currently I’m living in Stuttgart, Germany and looking for opportunities to code learn and grow as a developer</p>
            <div className="row">
               {/* <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div> */}
               <div className="columns download">
                  <p>
                  <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;