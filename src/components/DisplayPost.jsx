import React from 'react';
import deflogo from "../logo.svg";
import '../style/DisplayPost.css';
import { useState, useEffect } from 'react';

const DisplayPost = (props) => {
  const {logo, image, prompt, user} = props.post;

  const [translatedText, setTranslatedText] = useState('');

  async function translate(prompt) {
    const translationResponse = await fetch(`https://api.mymemory.translated.net/get?q=${prompt}&langpair=en-GB|ro-RO`);
    const translationData = await translationResponse.json();
    const translatedText = translationData.responseData.translatedText;
    setTranslatedText(translatedText);
  }


 useEffect(() => {
    translate(prompt);
  }, [prompt]);

  return (
    <div className="card card-shadow">
      <img 
      className='img-cover' 
      src={image} 
      alt={prompt} 
      />

      <div className={"text-card"}>
          <div className="text-div">
            <img className='logo-card' src={logo? logo: deflogo} alt={prompt} />
            <div>
              <span style={{color: "#888",fontSize: "12px", textTransform: "lowercase"}}>{user}</span>
              <p style={{"fontSize": "14px"}}>{translatedText}</p>
            </div>
          </div>
      </div>

    </div>
  )
}

export default DisplayPost