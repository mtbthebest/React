import React   from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Star = ({ selected=false, onClick=f=>f }) =>
        <div className={(selected) ? "star selected" : "star"}
             onClick={onClick}>
        </div>


Star.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
}


const  StarRating = ({ starsSelected=0, totalStars = 5, onRate = f=>f}) =>
    <div className="star-rating">
        {[...Array(totalStars)].map((n,i) =>
            <Star key ={i} selected={i<starsSelected} onCLick={() => onRate(i+1)}/>
        )}
        <p> {starsSelected} of {totalStars} </p>
    </div>
const Color =({title, color, rating=0 }) =>
    <section className='color'>
        <h1>{title}</h1>
        <div className="color" style={{ backgroundColor:color }}></div>
        <div> <StarRating starsSelected={rating}/></div>


    </section>
const ColorList = ({colors= [] }) =>
    <div className='color-list'>
        {(colors.length ===0)?
            <p>No colors listed. (Add a Color)</p>:
            colors.map(color => <Color key={color.id} {...color} />)
        }

    </div>



class AddColorForm extends React.Component {
    render() {
        return (
            <form onSubmit={e=>e.preventDefault()}>
                <input type="text"
                       placeholder="color title..." required/>
                <input type="color" required/>
                <button>ADD</button>
            </form>
        )
    }
}

class App extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            colors:[{
                "id": "0175d1f0-a8c6-41bf-8d02-df5734d829a4",
                "title": "ocean at dusk",
                "color": "#00c4e2",
                "rating": 5
            },
                {
                    "id": "83c7ba2f-7392-4d7d-9e23-35adbe186046",
                    "title": "lawn",
                    "color": "#26ac56",
                    "rating": 3
                },
                {
                    "id": "a11e3995-b0bd-4d58-8c48-5e49ae7f7f23",
                    "title": "bright red",
                    "color": "#ff0000",
                    "rating": 0
                }]
        }
    }
    render(){
        const {colors} = this.state
        return(
            <div className="app">
                <AddColorForm/>
                <ColorList colors={colors} />

            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("react-container")
)
