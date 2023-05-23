import React from "react";
import { useState } from "react";
import '../style/About.css';

function About() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //default state
    // You can perform additional logic here, such as sending the form data to a server or displaying a success message.
    console.log(formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container-about">
      <div className="title-about">
      <h1>Despre</h1>
      <a class="inferenceText">
        Inference<span>API</span>
        </a>
    </div>

    <div className="content-about">        
        <p>Bun venit la aplicația noastră web care generează imagini utilizând un prompt text în limba română!
           Cum funcționează aplicația noastră? Este foarte simplu: introduceți un prompt text în limba română și aplicația 
           noastră va utiliza un algoritm complex de învățare automată, disponibil prin intermediul API-ului Hugging Face, 
           pentru a genera o imagine relevantă pentru textul introdus. În doar câteva secunde, veți vedea o imagine nouă și 
           fascinantă generată din prompt-ul dvs. text.
        </p>     

        <p>Suntem o echipă de dezvoltatori pasionați de inteligența artificială și de modul în 
           care poate fi utilizată pentru a crea imagini unice și interesante. 
           Am creat această aplicație pentru a permite utilizatorilor să genereze imagini bazate pe texte prompt, 
           folosind o tehnologie de ultimă generație în domeniul AI.
        </p>

        <p>Suntem mândri să oferim o gamă largă de opțiuni de personalizare pentru utilizatori. 
           Puteți alege dintr-o varietate de stiluri artistice și puteți regla parametrii 
           generatorului de imagini pentru a obține imagini cu aspect unic și personalizat.
        </p>
    </div>

    
    
    <div className="title-contactus">
      <h1>Contacteaza-ne</h1>
    </div>

  <div className="container-form">
    
    <form onSubmit={handleSubmit}>
      <div className="label-input-name">
        <label htmlFor="name">Nume:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="label-input-email">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="label-textarea">
        <label htmlFor="message">Mesaj:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button className="submit-btn" type="submit">Trimite</button>
     </form>
    </div> 

  </div>
  );
}

export default About;



