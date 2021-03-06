import React from 'react';
import { Message } from 'semantic-ui-react';
function ErrorMessage(props) {
    return (
        <Message negative content={'Sorry there was an error ' + props.reason }/>
    )
}
export default ErrorMessage