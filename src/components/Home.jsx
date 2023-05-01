import React from 'react'
import { useState, useEffect } from 'react'
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase-config';
import DisplayPost from './DisplayPost';
import { Audio } from "react-loader-spinner";
import FormField from "./FormField";
import '../style/Home.css';



const Home = () => {
  const [posts, setPost] = useState([])
  const [loading, setLoading] = useState(true);
  const postRef = collection(db, "posts")

 
  const [searchText, setSearchText] = useState('');
  const [searchedResults, setSearchedResults] = useState([])

  const handleSearchChange = (e) => {
    
    setSearchText(e.target.value);
    console.log(e.target.value); 
  

    if(searchText !== " " && searchText !== null){
           const searchResult = posts.filter((item) => 
               item.user.toLowerCase().includes(searchText.toLowerCase())
            || item.prompt.toLowerCase().includes(searchText.toLowerCase()));
            setSearchedResults(searchResult)
            console.log(searchText)
         } if(searchText == " ") {
            console.log(searchText)
         }  

}

 useEffect(() => {
  const getPost = async () => {
    try {
      const data = await getDocs(postRef);
      setPost(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (err) {
      console.log('Error ', err);
    } finally {
      setLoading(false);
      console.log("amogus")
      console.log('return of the amogus2')
    }
   };
   getPost();
  }, []);


   return (
    <section>
      <div className="home-main-description">
        <div className="home-text-logo">
         <h1>Vitrina de imagini generate</h1>
        </div>
        <div className="home-prerequisite">

        <p>
          Răsfoiți printr-o colecție de imagini imaginative și uimitoare din punct de vedere vizual generate de DALL-E AI
        </p>

        </div>
      </div>

        <FormField
          labelName="Cautare imagini generate"
          type="text"
          name="text"
          placeholder="Cauta..."
          className="form-field-input"
          value={searchText}
          onKeyDown={handleSearchChange}
        />
    

      <div className="container-home">
        {loading ? (
          <div className="loading">
            <Audio/>
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="search-text">
                Showing Resuls for <span className="search-text-color">{searchText}</span> :
              </h2>
            )}
            <div className="grid-cards">
              {searchText && searchedResults ? (
                searchedResults.map(post=>(
                <DisplayPost
                  key={post.id}
                  post={post}
                />
                ))
              ) : (posts.map(post=>(
                <DisplayPost
                  key={post.id}
                  post={post}
                />
                ))
              )}
            </div>
          </>
        )}
      </div>
    </section>
  )
              }

export default Home;