import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootswatch/dist/morph/bootstrap.min.css'
import '../css/Aboutus.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faLinkedinIn,faGoogle,faGithub } from '@fortawesome/free-brands-svg-icons';

function About() {
  const handlecopy=(e)=>{
    let mail=document.getElementById('gmail');
    mail.select()
    navigator.clipboard.writeText(mail.value)
    alert('Mail address copied to clipboard!');
  }

  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='About1 col-sm-6'>
              <h1>About us</h1>
              <p>
              Welcome to our word counter website, brought to you by TechCraft Ltd! At TechCraft,
              we are dedicated to crafting innovative solutions that simplify your daily tasks. 
              Our word counter is designed to empower users with a quick and efficient tool to analyze and manage text effortlessly.
              With a commitment to technological excellence, TechCraft Ltd brings you a reliable and user-friendly word counter. 
              Whether you're a student working on an essay, a professional drafting a document, or 
              anyone in need of precise word count statistics, our platform ensures accuracy and convenience. 
              As we continue to innovate and refine our offerings, we invite you to explore the possibilities with TechCraft.Ltd where 
              technology meets craftsmanship.
              </p>
            </div>
            <div className='col-sm-1'></div>
            <div className='About2 col-sm-5'>
            <h1>Contact us</h1>
            <a href='https://www.instagram.com/___techcraft___/' target='_blank' >
              <FontAwesomeIcon id='icon' icon={faInstagram} fade size="xl" style={{color: "#125182",}} />
              TechCraft
            </a>
            <br/>
            <a href='https://www.linkedin.com/company/techcraft-ltd/' target='_blank'>
            <FontAwesomeIcon id='icon' icon={faLinkedinIn} fade size="xl" />
            TechCraft.Ltd
            </a>
            <br/>
            <a id='gmail' href='https://mail.google.com/mail' target='_blank' onClick={handlecopy}>
            <FontAwesomeIcon id='icon' icon={faGoogle} fade size="xl" />
            umairishtiaq606@gmail.com
            </a>
            <br/>
            <a href='https://github.com/Umair-Ishtiaq' target='_blank'>
            <FontAwesomeIcon id='icon' icon={faGithub} fade size="lg" />
            GitHub
            </a>
            <br/>
          <a href='https://umair-ishtiaq.github.io/techcraft/' target='_blank'>
          <img id='Aboutimg2' src={require('../assets/techcraft.png')} alt='logo'/>
          </a>
            </div>
        </div>
    </div>
    </>
  );
}

export default About;
