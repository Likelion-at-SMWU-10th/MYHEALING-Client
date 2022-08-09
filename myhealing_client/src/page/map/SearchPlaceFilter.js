import React from "react";
import Keyword from "../component/Keyword";
import Inform from './Inform';
import { Carousel } from 'react-bootstrap'; 
import './SearchPlace.css';
//import './SearchPlaceByName.css';

function SearchPlaceFilter() {
  return (
      <>
        <p>
            <form>
              <input className="input-group mb-3 topsearchbox">
                
              </input>
            </form>
        </p>
        <Inform text={"검색 필터"} />
        <div className="container">
          <div className="row">
            <div className="col">
                <div className="row row-cols-1">
                  <div className="col">
                    <div className="card">
                            <p className="card-text">첫번쨰 필터</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>  
      </div>
      </>
  );
}

export default SearchPlaceFilter;

/*

*/
