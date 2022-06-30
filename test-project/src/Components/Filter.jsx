import './ProductList.css';
import {FaSearch} from "react-icons/fa";
import { useState,useEffect } from 'react';
import './ProductList.css';

const Filter = (props) => {
    const [type,setType] = useState([]);
    useEffect(()=> {
        props.search(type)    
    }, [props.movies,type])

return(
    <div>
        <section>
                      <ul className='liste'>
                           <li className="leslinav"><img className='ImageLog' src="./images/logofoodfacts.png" alt="logofood"/></li>
                           <li>
                            <select className='leslinavp'>
                            <option><input placeholder='country'/></option>
                            <option>   </option>
                            <option>AFGANISTAN</option>
                            <option>ALLEMAGNE</option>
                            <option>ARMENI</option>
                            <option>AMERIQUE</option>
                            <option>BRAZIL</option>
                            <option>MAROC</option>
                            </select>
                            </li>

                            <li>
                                <select className='leslinavd'>
                                <option>ANGLISH</option>
                                <option>FRANCAIS</option>
                                <option>ARABE</option></select>
                            </li>
                            <li className='lisearch'> <input className='search' type="text" placeholder="Produit a chercher" onChange={(e) => setType({titleMovie:e.target.value})}/> <FaSearch className='spanicon' /></li>
                        </ul>
                         </section>

   
    </div>    
);
}

export default Filter;