import React from 'react';
import worth from './images/worth.jpg'
import Card from './Card';
import Sdata from './Sdata';
import './Service.css';

const Service=()=>{
    return (<>
    <div className="serviceText">
        <h1 className="text-center">Our Services</h1>
    </div>
    <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-12 col-md-11 mx-auto">
                    <div className="row gy-4">
                         {
                             Sdata.map((val,ind)=>{
                                 return <Card
                                 key={ind}
                                 imgsrc={val.imgsrc}
                                 title={val.title}
                                 to={val.to}
                                 />
                             })
                         }
                    </div>
    
                </div>
            </div>
    </div>
    </>);
};

export default Service;