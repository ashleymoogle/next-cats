import React from 'react'
import Menu from '../components/menu'
import ItemSingle from '../components/itemSingle'
import 'isomorphic-fetch'
import { style } from 'next/css'

const styles = {
    items: {
        width:'100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
}

class List extends React.Component {
    static async getInitialProps ({ req }) {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts')
        let json = await response.json()
        let d = [json[0], json[1], json[2], json[3], json[4]]
        return {data : d}
    }

    render () {
        console.log(this.props.data[0])
        return <div >
            <Menu />
            <div className={style(styles.items)}>
            {
                this.props.data.map((i) => {
                    return <ItemSingle key={i.id} data={i}/>
                })
            }
            </div>
        </div>
    }
}

export default List