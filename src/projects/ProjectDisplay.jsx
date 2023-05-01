import './ProjectDisplay.css'

function ProjectDisplay() {
    return (
        <div className="ProjectDisplay">
            <h3>Projects are hosted on free servers, please allow some time for them to spin up</h3>
            <div className='ProjectDisplay-project'>
                <a 
                    href='https://chic-stardust-c1d1e8.netlify.app/'
                    className='logical'
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Jobly Demo
                    <img 
                        className="ProjectDisplay-project-image" 
                        src={require("../assets/Jobly-Screenshot.png")}
                        alt='Jobly demo'
                    ></img>
                </a>
                <div className='ProjectDisplay-project-description logical'>
                    <p>A job listing application built with React</p>
                </div>
            </div>
            <div className='ProjectDisplay-project'>
                <a 
                    href='https://michael-bocim-warbler.onrender.com'
                    className='logical'
                    target="_blank" 
                    rel="noopener noreferrer"
                >

                    Warbler demo
                    <img 
                        className="ProjectDisplay-project-image" 
                        src={require("../assets/Warbler-Screenshot.png")}
                        alt='Warbler demo'
                    ></img>
                </a>
                <div className='ProjectDisplay-project-description logical'>
                    <p>A social media clone using Python, Flask and PostgreSQL</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectDisplay;