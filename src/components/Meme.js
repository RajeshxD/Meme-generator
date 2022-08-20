import memesData from "../memesData";
import React, { useState } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
  }

  return (
    <main>
      <div className="form">
        <input
          className="form--input"
          placeholder="Top text"
          typ="text"
        ></input>
        <input
          className="form--div"
          placeholder="Bottom text"
          type="text"
        ></input>
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image 🖼
        </button>
        <img src={meme.randomImage} className="meme--image" />
      </div>
    </main>
  );
}
