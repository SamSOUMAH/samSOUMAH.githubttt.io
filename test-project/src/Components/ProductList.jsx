
import { useState, useEffect, useRef } from "react";
import Filter from "./Filter";
import ProductCard from "./ProductCard";
import React from 'react'


import "./ProductList.css";

const ProductList = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      Nom: "McDonald",
      description: "Made in Maroc",
      posterURL: "http://www.mcdonalds.ma/les-produits-mcdo/nos-menus/happy-meal",
      rating: 5,
      image: "./images/McDonald.jpg",
    },

    {
      id: 2,
      Nom: "coca cola 1/2 litre",
      description: "Made in Morocco",
      posterURL: "https://www.bing.com/images/search?q=coca+cola&form=HDRSC2&first=1&tsc=ImageHoverTitle",
      rating: 5,
      image: "./images/cocacolaB.jpg",
    },

    {
      id: 3,
      Nom: "Nescafe",
      description: "Driver Film",
      posterURL: "https://www.nescafe.com/",
      rating: 4,
      image: "./images/Nescafe.jpg",
    },
    {
      id: 4,
      Nom: "Nesquik",
      description: "Made in Suisse",
      posterURL: "https://www.bing.com/images/search?q=nesquik&qpvt=nesquik&tsc=ImageHoverTitle&form=IGRE&first=1",
      rating: 3,
      image: "./images/Nesquik.jpg",
    },
    {
      id: 5,
      Nom: "Quarker",
      description: "Made in U S A",
      posterURL: "https://quaker.fr/produits",
      rating: 5,
      image: "./images/Quaker.jpg",
    },
    {
      id: 6,
      Nom: "Nutella",
      description: "Driver Film",
      posterURL: "https://www.nutella.com/us/en/",
      rating: 1,
      image: "./images/Nutella.jpg",
    },
    {
      id: 7,
      Nom: "Eau Minirale Sidi-Ali",
      description: "Driver Film",
      posterURL: "https://www.oulmes.ma/sidi-ali/",
      rating: 1,
      image: "./images/eauMinerale.jpg",
    },
  ]);

  const [filtredMovies, setFiltredMovies] = useState([]);

  const search = (type) => {
    setFiltredMovies(
      type.length === 0
        ? movies
        : Object.entries(type)[0][0] === "rating"
        ? movies.filter((el) => el.rating === type.rating)
        : movies.filter((el) =>
            el.Nom.toLowerCase().includes(type.titleMovie.toLowerCase())
          )
    );
  };

  const add = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <>
      <div className="half">

        <div className="appHeader">
          <Filter movies={movies} search={search} />
         
          <ProductCard add={add} />
         
        </div>

        <div
          className="grid"                /* style={{display:'flex', flexDirection:'row', justifyContent: 'space-evenly'}} */
        >
          {filtredMovies.map((e) => (
            <div className="NomProduct">
              <a href={e.posterURL}>
                <img src={e.image} alt="" />
              </a>
              <label>{e.Nom}</label>
             
              {/* <label>Rating : {e.rating}</label> */}
            </div>
          ))}
        </div>
      </div>
     
    </>
  );
};

export default ProductList;