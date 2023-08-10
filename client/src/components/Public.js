import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Amber Kim!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in North York</p>
                <address className="public__addr">
                    Amber Kim<br />
                    5*** Yonge St<br />
                    North York, M2M ***<br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
                <br />
                <p>Owner: My parents</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public