import React from 'react'
import Menu from '../components/menu'

class Index extends React.Component {
    static async getInitialProps ({ req }) {
        return req
            ? { userAgent: req.headers['user-agent'] }
            : { userAgent: navigator.userAgent }
    }

    render () {
        return <div>
            <Menu />
            Bienvenue sur ce super site !
        </div>
    }
}

export default Index