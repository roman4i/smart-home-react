import React, {useState} from "react";

const AddCardLink = () => {
    const [linkText, setLinkText] = useState('');
    const [isEmpty, setIsEmpty] = useState(true);
    const [showError, setShowError] = useState(false);

    const processLink = (event) => {
        setLinkText(event.target.value);
        event.target.value === '' ? setIsEmpty(true) : setIsEmpty(false)
        if(showError) setShowError(false);
    }

    const sendLink = () => {
        if (isEmpty) setShowError(true);
    }

    return(
        <div className="addCardLinkContainer">
            <div className="settingsContainerTitle">Add card</div>
            <div>Enter link here</div>
            <div>
                <input type="text" name="link" onChange={processLink}/>
                <input type="button" value="OK" onClick={sendLink}/>
            </div>
            {showError && <div>Link is empty</div>}
        </div>
    )
}

export default AddCardLink;