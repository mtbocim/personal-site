import './ProjectDisplay.css'

function ProjectDisplay() {
    return (
        <div className="ProjectDisplay">
            <h3>Projects are hosted on free servers, please allow some time for them to spin up</h3>
            <div className='ProjectDisplay-project'>
                <a href='https://chic-stardust-c1d1e8.netlify.app/'>
                    Jobly Demo
                    <img className="ProjectDisplay-project" src={require("../assets/Jobly-Screenshot.png")}></img>
                </a>
            </div>
            <div className='ProjectDisplay-project'>
                <a href='https://michael-bocim-warbler.onrender.com'>
                    Warbler demo
                    <img className="ProjectDisplay-project" src={require("../assets/Warbler-Screenshot.png")}></img>
                </a>
            </div>
        </div>
    )
}

export default ProjectDisplay;