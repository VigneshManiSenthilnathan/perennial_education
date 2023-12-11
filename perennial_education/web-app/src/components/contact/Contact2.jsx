    import "./contact.scss"

    const Contact = () => {
        return(
            <div className="contact">

                <div className="textContainer">
                    <h1>Start your journey now</h1>

                    <div className="item">

                        <h2>Mail</h2>
                        <span>perennial_education@yahoo.com</span>
                    
                    </div>

                    <div className="item">

                        <h2>Address</h2>
                        <span>121 Dover Road</span>
                    
                    </div>

                    <div className="item">

                        <h2>Phone</h2>
                        <span>+65 1234 5678</span>
                    
                    </div>
                    
                </div>

                <div className="formContainer">

                    <form>
                        <input type="text" required placeholder="Name" />
                        <input type="text" required placeholder="Email" />
                        <textarea rows={8}  required placeholder="Message" />
                        <button type="submit">Submit</button>
                    </form>
                
                </div>
                
            </div>
        )
    }
    export default Contact;