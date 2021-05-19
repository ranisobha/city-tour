import React from 'react'
import './Tour.scss';

class Tour extends React.Component {
state={
    showInfo:false
}
handleinfo = () =>{
    this.setState({
        showInfo:!this.state.showInfo
    })
}
    render(){
    const {id,city,img,name,info} = this.props.tour
    const {removeid} = this.props
    return (
        <article className="tour">
        <div className="img-container">
            <img src={img} width="200" alt="pic"/>
            <span className="close-btn" onClick={()=>{removeid(id)}}>
                <i className="fas fa-window-close"></i>
            </span>
        </div>
        <div className="tour-info">
           <h3>{city}</h3>
           <h4>{name}</h4>
           <h5>info <span onClick={this.handleinfo}>
               <i className="fas fa-caret-square-down" /></span></h5>
               {this.state.showInfo &&
               <p>{info}</p>}
        </div>
        </article>
    )
}
}
export default Tour
