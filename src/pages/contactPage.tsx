export default function ContactPage() {
    return(
        <>
            <h1>Contact</h1>
            <form action="">
                <label htmlFor=""> First Name
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
                <button>Submit</button>
            </form>
        </>
    )
}