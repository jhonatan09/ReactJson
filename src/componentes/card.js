import React from "react"


class Card extends React.Component{
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={this.props.img} alt={this.props.alt}/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            {this.props.text}
                            
                            <br/>
                            <time dateTime="2019-10-15">11:50 AM - 17 Oct 2019</time>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card