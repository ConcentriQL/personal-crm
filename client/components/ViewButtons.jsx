import React from 'react'

const ViewButtons = props => {

    return (
        <div className="view-buttons">
            <button
                key="view-contacts-button"
                className="view-contacts-button"
                onClick={props.viewContacts}
            >
                Contacts
            </button>
            <button
                key="view-touches-button"
                className="view-touches-button"
                onClick={props.viewTouchEvents}
            >
                Touches
            </button>
        </div>
    )
};

export default ViewButtons