import React from 'react'
import Tour from '../Tour/Tour';
import './TourList.scss';
import {tourData} from "../tourData";

class Index extends React.Component{
    state={
        tours:tourData
    }
     removeid=(id)=>{
         const {tours} = this.state;
         const Tours=tours.filter(tour => tour.id !== id);
         this.setState({
             tours:Tours
         })

    }
    render(){
        const {tours} = this.state;
    return (
        <section className="tourlist">
           {tours.map((tour) =>{
               return <Tour key={tour.id} tour={tour}
               removeid={this.removeid} />
               
           })}
        </section>
    )
}
}

export default Index
