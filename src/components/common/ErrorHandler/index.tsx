import React, {Component} from 'react';
import ErrorPage from 'modules/web/pages/ErrorPage';

class ErrorHandler extends Component {
    state = {
        hasError: false
    };

    componentDidCatch(error, info) {
        this.setState({hasError: true});
        console.log(error, info);
    }

    render() {
        const { hasError } = this.state;
        const { children }: {children?: React.ReactNode}= this.props
        return hasError
            ? <ErrorPage/>
            : children
    }
}

export default ErrorHandler;
