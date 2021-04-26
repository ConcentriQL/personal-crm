import React from 'react'

const CreateButtons = props => {

    return (
        <div className="create-buttons">
            <button
                className="create-contacts-button"
                onClick={() => props.viewSpecificContact('new')}
            >
                Create New Contact
            </button>
            <button
                className="create-touches-button"
                onClick={() => props.viewSpecificTouch('new')}
            >
                Create New Touch
            </button>
        </div>
    )
};

export default CreateButtons