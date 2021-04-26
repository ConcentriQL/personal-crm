import React from 'react'

const ViewButtons = props => {

    return (
        <div className="view-buttons">
            <button
                className="view-contacts-button"
                onClick={props.viewContacts}
            >
                Contacts
            </button>
            <button
                className="view-touches-button"
                onClick={props.viewTouchEvents}
            >
                Touches
            </button>
        </div>
    )
};

export default ViewButtons