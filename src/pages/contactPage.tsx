export default function ContactPage() {
    return(
        <>
            <h1>Contact</h1>
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
                {/* <label htmlFor=""> First Name
                    <input type="text" />
                </label>
                <label htmlFor=""> Last Name
                    <input type="text" />
                </label>
                <label htmlFor=""> Email
                    <input type="email" />
                </label>
                <label htmlFor=""> Comment
                    <input type="text" />
                </label>
                <button>Submit</button> */}
            </form>
        </>
    )
}