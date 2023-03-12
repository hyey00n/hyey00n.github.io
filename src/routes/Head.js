
function Header(){
    return(
        <div className="dddd">
        <div>
                <div className="container">
                    <ul href="#home">About</ul>
                    <ul className="me-auto">
                        <li onClick={() => { ('/') }}>Projects</li>
                        <li onClick={() => { ('/Projects') }}>Projects</li>
                        <li onClick={() => { ('/detail') }}>detail</li>
                        <button variant="primary">Primary</button>{' '}
                    </ul>
                </div>
        </div>

        </div>
    )
}

export default Header();