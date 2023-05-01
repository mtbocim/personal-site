import './ContactDisplay.css'

function ContactDisplay() {
    return (

        <div className="ContactDisplay logical">
            <div className='ContactDisplay-title'>Contact:</div>
            <div className='ContactDisplay-contact-methods'>
            {/* <a href="tel:+3035234361">(303)523-4361</a> */}
            <a 
                href="mailto:mtbocim@gmail.com"
            >
                Email
            </a>

            <a
                href="https://www.linkedin.com/in/michaelbocim"
                target="_blank"
                rel="noopener noreferrer"
            >
                LinkedIn
            </a>

            <a
                href="https://github.com/mtbocim"
                target="_blank"
                rel="noopener noreferrer"
            >
                GitHub
            </a>
            </div>
        </div>
    )
}
export default ContactDisplay