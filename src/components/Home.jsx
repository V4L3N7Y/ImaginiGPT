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
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = posts.filter((item) => item.user.toLowerCase().includes(searchText.toLowerCase()) || item.prompt.toLowerCase().includes(searchText.toLowerCase()));
        setSearchedResults(searchResult);
      }, 500),
    );
  };

  useEffect(() => {
    setLoading(true)
    const getPost = () => {
      getDocs(postRef)
        .then(data => {
          setPost(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })));
          setLoading(false)
        })
    }
    getPost()
  }, [])
  return (
    <section>
      <div>
        <h1>Vitrina de imagini generate</h1>
        <p>Răsfoiți printr-o colecție de imagini imaginative și uimitoare din punct de vedere vizual generate de DALL-E AI</p>
      </div>

      <div className="form-field">
        <FormField
          labelName="Cautare imagini generate"
          type="text"
          name="text"
          placeholder="Cauta..."
          className="form-field-input"
          value={searchText}
          handleChange={handleSearchChange}
        />
      </div>

      <div className="container">
        {loading ? (
          <div className="loading">
            <Audio/>
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="search-text">
                Showing Resuls for <span className="search-text-color">{searchText}</span>:
              </h2>
            )}
            <div className="grid-cards">
              {searchText && searchedResults ? (
                searchedResults.map(post=>(
                <DisplayPost
                  post={post}
                />
                ))
              ) : (posts.map(post=>(
                <DisplayPost
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

export default Home