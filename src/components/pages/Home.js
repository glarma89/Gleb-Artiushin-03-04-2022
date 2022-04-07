import React from "react";
import Info from "../Info"; 
import Data from "../Data"; 
import AddToFav from "../AddToFav";

const Home = () =>
{
    return (
        
    <div className={'wrapper'}>
      <div className={'main'}>
          <div className={'container'}>
              <div className={'row'}>
                 
                  <div className={'col-sm-5 info'}>
                      <Info/>
                  </div>
                  <div className={'col-sm-7 form'}>
                      <Data/>
                  </div>    
            <div>
            <AddToFav/>    
            </div>         
              </div>
          </div>
      </div>
    </div>
    );
};


export default Home 