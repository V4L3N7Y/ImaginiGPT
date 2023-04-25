import React, { useState } from "react";
import { BiDownload, BiShare } from "react-icons/bi";
import { Audio } from "react-loader-spinner";
import { Auth, db, storage } from "../firebase-config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { collection, addDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import "../style/Component.css";

const API_TOKEN = "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"; ///nu stiu ce sa fac cu asta dar nu e necesar sa il ascund ca nu ma taxeaza.

const ImageGenerationForm = () => {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [failLoading, setFailLoading] = useState(false)
  const [valueInput, setValueInput] = useState("")

  const [user] = useAuthState(Auth);
  const postRef = collection(db, "posts");

  const uploadImage = async () => {
    if (imageFile !== null) {
      const imageRef = ref(storage, `images/${imageFile.name + v4()}`);
      uploadBytes(imageRef, imageFile)
        .then(() => {
          getDownloadURL(imageRef).then((url) => {
            if (prompt !== "") {
              addDoc(postRef, {
                prompt: prompt,
                image: url,
                user: user.displayName,
                logo: user.photoURL,
              })
                .then((res) => alert("posted"))
                .catch((err) => console.log(err));
            }
          });
        })
        .catch((err) => console.log(err));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const input = event.target.elements.input.value;
    setValueInput(input)
    if(input !== ''){
      setLoading(true);
      
    // fetch api cu tare si pe dincolo
    const translationResponse = await fetch(
      `https://api.mymemory.translated.net/get?q=${input}&langpair=ro-RO|en-GB`
    );
    const translationData = await translationResponse.json();
    const translatedText = translationData.responseData.translatedText;
    console.log(translatedText);
    console.log(translationData.responseData);

    setPrompt(translatedText);

    // trimite valoare inputului in api-ul generator de imagini
    const response = await fetch(
      "https://api-inference.huggingface.co/models/CompVis/stable-diffusion-v1-4",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify({ inputs: translatedText }),
      }
    );

    if (!response.ok) {
      setFailLoading(true);
      setLoading(false);
      throw new Error("Failed to generate image");
    }

    const blob = await response.blob();
    setOutput(URL.createObjectURL(blob));
    setImageFile(new File([blob], "art.png", { type: "image/png" }));
    setLoading(false);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = output;
    link.download = "art.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="imageGPT-container">
      <div className="container-component-text">
        <h1>Încurajează-ți creativitatea!</h1>
        <p>
          Răsfoiți printr-o colecție de imagini imaginative și uimitoare din
          punct de vedere vizual generate de DALL-E AI
        </p>
      </div>
      <form onSubmit={handleSubmit} className="form-send-component">
        <input
          type="text"
          name="input"
          placeholder="Introduceti descrierea aici..."
        />
        <button type="submit" className="button-send-component">
          Generate
        </button>
      </form>
      {loading && (
        <div className="loading">
          <p>
            <Audio
              height="80"
              width="80"
              radius="9"
              color="gray"
              ariaLabel="loading"
              wrapperStyle
              wrapperClass
            />
          </p>
          <p>
            Asteptati...
          </p>
        </div>
      )}
      {failLoading && (
        <div className="fail-loading">
          <p>
            Imaginea nu s-a putut genera :(
          </p>
        </div>
      )}
      {valueInput == '' && (
        <div className="fail-loading">
          <p>
           Introduceti cuvinte in bara de cautare.
          </p>
        </div>
      )}
      {!loading && output && (
        <div className="result-image-component">
          <img src={output} alt="art" />
          <div className="actions-component">
            <button onClick={handleDownload}>
              <BiDownload />
            </button>
            {user && (
              <button onClick={uploadImage}>
                <BiShare />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGenerationForm;
