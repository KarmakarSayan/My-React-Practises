function Events(){
    function print(){
        console.log("Hello Events")
    }
    function add(a,b)
    {
        console.log(`this is parameter function and addtion of a,b is ${a+b}`);
    }
    return(
        <>
        <div>
            <h1>Events</h1>
            <button onClick={print}> Add</button>
            <button onClick={()=>{print(10,20)}}>Add a+b </button>
        </div>
        
        </>
    )
}
export default Events;