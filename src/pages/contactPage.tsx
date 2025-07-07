export default function ContactPage() {
    return(
        <>
            <h1 className="contact-header">Contact</h1>
            <form action="" className="contact-form-container">
                <div className="row">
                    <div className="col">
                    <input type="text"  placeholder="First name" />
                    </div>
                    <div className="col">
                    <input type="text"  placeholder="Last name" />
                    </div>
                </div>
                <div className="row">
                    <input type="email"  placeholder="Email" />
                </div>
                <div className="row">
                    <input type="text"  placeholder="Comment" />
                </div>
                <button>Submit</button>
            </form>
        </>
    )
}