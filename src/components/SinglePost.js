import React, { Component } from 'react';

class SinglePost extends Component {
    mostrarPost = (props) =>{
        if(!props.post) return null;
        const {title, body, id} = this.props.post;
        return(
            <React.Fragment>
                <h1>{title}</h1>
                <p>Autor: {id}</p>
                {body}
            </React.Fragment>
        )
    }
    render() { 
        
        return (  
            <div className="col-12 col-md-8">
                {this.mostrarPost(this.props)}
            </div>
        );
    }
}
 
export default SinglePost;