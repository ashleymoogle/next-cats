import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { style } from 'next/css'

const styles = {
    menu: {
        width:'100%',
        display: 'flex'
    }
}

class Menu extends React.Component {
    static async getInitialProps ({ req }) {
        return req
            ? { userAgent: req.headers['user-agent'] }
            : { userAgent: navigator.userAgent }
    }

    render () {
        return <div className={style(styles.menu)}>
            <Head>
                <title>CATS</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div>
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/list"><a>List</a></Link></li>
                </ul>
            </div>
        </div>
    }
}

export default Menu