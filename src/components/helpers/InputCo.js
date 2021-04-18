import React, {Fragment} from 'react'
import classnames from 'classnames'

const InputCo = ( {label, name, type, value, onChange, error}) => {
    return (
        <Fragment>
            <div className="form-group">
                <label htmlFor= {name}> { label } : </label>
                <input type = {type} 
                    className = {classnames('form-control', {
                        'is-invalid' : error
                    })}
                    value = { value }
                    name = { name }
                    onChange = {onChange}
                />
                <div className="invalid-feedback"> { error }</div>
            </div>
        </Fragment>
    )
}

export default InputCo
