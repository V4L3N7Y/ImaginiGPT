import React from "react";
import inference from "../style/img_About/inferenceAPI.png";
import '../style/About.css';

function About() {
  return (
    <div className="container-about">
      <div className="title-about">
      <h1>Despre</h1>
      <img src={inference} />
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
    </div>
  );
}

export default About;



