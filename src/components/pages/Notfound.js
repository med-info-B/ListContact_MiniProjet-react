import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
    return (
        <Fragment>
            <h1> Error 404 :  page not found</h1>
            <Link to='/'> Revenir à la page d'aceuil </Link>
        </Fragment>
    )
}

export default Notfound
