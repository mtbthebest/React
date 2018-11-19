import React   from 'react';
import createClass  from 'create-react-class'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

// class  AddClassForm extends React.Component{
//     constructor(props){
//         super(props)
//         this.submit = this.submit.bind(this)
//     }
//     submit(e){
//         const { _title, _color } = this.refs
//         e.preventDefault()
//         alert(`New color: ${_title.value} ${ _color.value }`)
//         _title.value =""
//         _color.value ='#000000'
//         _title.focus()
//     }
//
//     render(){
//         return( <form onSubmit={this.submit}>
//             <input ref="_title" type="text" placeholder="color title ..." required />
//             <input ref="_color" type="color" required/>
//             <button>ADD</button>
//         </form>)
//     }
//
// }
//
// ReactDOM.render(
//     <AddClassForm/>,
//     document.getElementById("react-container")
// )


const Star = ({ selected=false, onClick=f=>f })=>
    <div className={(selected) ?"star selected" : "star"}
        onClick={onClick}></div>

Star.propTypes={
    selected: PropTypes.bool,
    onClick: PropTypes.func
}

const StartRating  = createClass({
    displayName: 'StarRating',
    propTypes:{
        totalStars: PropTypes.number
    },
    getDefaultProps(){
        return{
            totalStars :5
        }
    },
    getInitialState(){
        return {
            starsSelected : 0
        }
    },
    change(starsSelected){
        this.setState({starsSelected})
    },
    render(){
        const {totalStars} = this.props
        const  {starsSelected} = this.state
        return (
            <div className='star-raing'>
                {[...Array(totalStars)].map((n,i) =>
                    <Star key ={i} selected={i<starsSelected}
                        onClick = {() => this.change(i+1)}
                                />
                    )}
                    <p>{starsSelected} of {totalStars} stars</p>
            </div>
        )
    }
})

ReactDOM.render(
    <StartRating/>,
    document.getElementById("react-container")
)
