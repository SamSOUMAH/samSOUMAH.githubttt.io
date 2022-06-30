import {FaPlus, FaSignal,FaChartBar} from "react-icons/fa";
import './ProductList.css'
import { useState, useEffect, useRef } from 'react';


export const ProductCard = (props) => {
    const [movie, setMovie] = useState({ Nom: "", description: "", posterURL: "",  rating: 0, image:""});

    const handleSubmit = e => {
      e.preventDefault();
      props.add(movie);
    }

    return(
      <form className="add" onSubmit={handleSubmit} >
      <input  className="formplus" type="text" name="title" placeholder="Prod. a ajouter" onChange={(e) => setMovie(prevMovie => ({ ...prevMovie, Nom: e.target.value }))}/>
      <input className="formplus" type="text" name="description" placeholder="Decrire le prod." onChange={(e) => setMovie(prevMovie => ({ ...prevMovie, description: e.target.value }))}/>
      <input className="formplus" type="text" name="posterURL" placeholder="URL du prod." onChange={(e) => setMovie(prevMovie => ({ ...prevMovie, posterURL: e.target.value }))}/>
      <input  className="formplus" type="text" name="image" placeholder="Image du prod." onChange={(e) => setMovie(prevMovie => ({ ...prevMovie, image: e.target.value }))}/>
        <button className="socialMediaIcons"><i> <FaPlus className="Icon"/></i></button>
      <i><FaChartBar/></i>
  
       
        </form>
    )
}

export default ProductCard;