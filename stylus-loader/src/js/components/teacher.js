import React from 'react'
import '../../css/teacher.styl'

function Teacher (props) {
    return (
        <li className="Teacher">
            {props.name}
        </li>
    )
}

export default Teacher