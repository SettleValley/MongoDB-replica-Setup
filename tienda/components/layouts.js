import Head from "next/head";
import Link from 'next/link';

import { useSession, signIn, signOut } from 'next-auth/client'


export default function Layout({children}){

    const [session, loading] = useSession();

    return(
        <>
        <Head>
            <title>Base de datos</title>
            <meta
                key="viewport"
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
        </Head>

        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link href="/">
                        <a className="navbar-brand">Base de datos</a>
                    </Link>
                    <div className="collapse navbar-collapse mx-auto">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                               <Link href="/dashboard">
                                    <a className="nav-link">Dashboard</a>   
                                </Link> 
                            </li>
                            {session && <>    
                                <li className="nav-item">
                                    <a className="nav-link" onClick={signIn}>Log in</a>   
                                </li>
                            </>
                            }
                            {!session && <>    
                                <li className="nav-item">
                                    <a className="nav-link" onClick={signOut}>Log out</a>   
                                </li>
                            </>}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <main>{children}</main>
        </>
    )
}

