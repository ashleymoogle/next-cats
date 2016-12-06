import React from 'react'
import { style } from 'next/css'

const styles = {
    itemsingle: {
        width:'30%',
        textAlign: 'center',
        margin: '5px',
        padding:'5px',
        border: '2px solid grey',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column'
    },

    itemimage: {
        display: 'block',
        maxWidth: '100%',
        maxHeight: '200px'
    },
    itemtitle: {
        fontWeight: 'bolder',
        fontSize: 'large',
        textDecoration: 'underline',
        padding: '5px'
    },
    itembody: {
        fontStyle: 'italic',
        fontWeight: 'bolder'
    },
    itemstop: {
        display: 'flex',
        justifyContent:'space-between'
    }
}

class ItemSingle extends React.Component {
    static async getInitialProps ({ req }) {
        return req
            ? { userAgent: req.headers['user-agent'] }
            : { userAgent: navigator.userAgent }
    }

    render () {
        console.log(this.props)
        let {data} = this.props
        return <div className={style(styles.itemsingle)}>
            <div className={style(styles.itemstop)}>
                <div>
                    <img className={style(styles.itemimage)} src={`/static/img/${data.id}.jpg`} />
                </div>
                <div className={style(styles.itemtitle)}>
                    {data.title}
                </div>
            </div>
            <div className={style(styles.itembody)}>
                {data.body}
            </div>
        </div>
    }
}

export default ItemSingle