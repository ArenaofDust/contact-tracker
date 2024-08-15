import { Outlet, Link } from "react-router-dom"

export default function Root() { // ROOT ROUTE - Sidebar search and Outlet for Contact
    return (
        <>
            <div id="sidebar">
                <h1>Contacts</h1>
                <div>
                    <form id="search-form" role="search">
                        <input
                            id="q"
                            aria-label="Search Contacts"
                            placeholder="Search"
                            type="search"
                            name="q"
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={true}
                        />
                        <div className="sr-only" aria-live="polite"></div>
                    </form>
                    <form method="post">
                        <button type="submit">New</button>
                    </form>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to={`/contacts/1`}>Your Name</Link>
                        </li>
                        <li>
                            <Link to={`/contacts/2`}>Your Friend</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail"> 
                <Outlet />
            </div>
        </>
    );
};