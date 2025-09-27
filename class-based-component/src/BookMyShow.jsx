import { Component } from "react";  
class BookShow extends Component{
    constructor(){
        super()
        this.state={
            tickets:10,
            movie:"KGF"
        }
    }
    render() {
            //  this render funtion sis used in  class based compkinent 
            let increment=()=>{
                this.setState({
                    tickets:this.state.tickets+1,
                    movie:"Kgf 2 "
                })
            }
            console.log(this.state.tickets)
            return(
                <>
                <button  onClick={increment}I>ADD</button>
                <h1>Book MY show for the movie {this.state.movie}  ticket number :{this.state.tickets}</h1>
                </>
            )

    }

}
export default BookShow