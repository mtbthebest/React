import React   from 'react';
import createClass  from 'create-react-class'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'




const Star = ({ selected=false, onClick=f=>f })=>
    <div className={(selected) ?"star selected" : "star"}
        onClick={onClick}></div>

Star.propTypes={
    selected: PropTypes.bool,
    onClick: PropTypes.func
}

class StartRating  extends React.Component{

    constructor(props){
        super(props)
        this.state={
            starsSelected : props.starsSelected || 0
        }
        this.change = this.change.bind(this)
    }

    change(starsSelected){
        this.setState({starsSelected})
    }
    render(){
        const {totalStars} = this.props
        const  {starsSelected} = this.state
        return (
            <div className='star-rating'>
                {[...Array(totalStars)].map((n,i) =>
                    <Star key ={i} selected={i<starsSelected}
                        onClick = {() => this.change(i+1)}
                                />
                    )}
                    <p>{starsSelected} of {totalStars} stars</p>
            </div>
        )
    }
}

StartRating.propTypes = {
    totalStars: PropTypes.number
}
StartRating.defaultProps = {
    totalStars: 5
}

ReactDOM.render(
    <StartRating totalStars={7} starsSelected={3}/>,
    document.getElementById("react-container")
)
