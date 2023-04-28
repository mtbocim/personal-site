import './ContactDisplay.css'

function ContactDisplay() {
    return (

        <div className="ContactDisplay logical">
                <p><strong>Phone: </strong>(303)523-4361</p>
                <p><strong>Email: </strong>mtbocim@gmail.com</p>
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
    )
}
export default ContactDisplay