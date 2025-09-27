import Dashboard from './Dashboard'
function LandingPage(prop){
    console.log(prop);
    let  num=prop.data;

    return(
        <div>
            <hr />
            <h1>
                The num is landing Page is {num} 
            </h1>
            <Dashboard count={num}/>
        </div>
    )
    

}
export default LandingPage
