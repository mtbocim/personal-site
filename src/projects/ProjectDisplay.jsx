import './ProjectDisplay.css'

function ProjectDisplay(){
    return(
        <div className="ProjectDisplay">
            <h3>Projects are hosted on free servers, please allow some time for the them to spin up</h3>
            <img className="ProjectDisplay-project" src={require("../assets/Jobly-Screenshot.png")}></img>
            <a href='https://chic-stardust-c1d1e8.netlify.app/'>Jobly Demo</a>
            <img className="ProjectDisplay-project" src={require("../assets/Warbler-Screenshot.png")}></img>
            <a href='https://michael-bocim-warbler.onrender.com'>Warbler demo</a>
            
        </div>
    )
}

export default ProjectDisplay;