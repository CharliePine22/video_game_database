import { createContext, useState } from 'react'

export const ResultsContext = createContext()

export const ResultsProvider = (props) => {
    const [requestMethod, setRequestMethod] = useState('');

    const setRequest = (request) => {
        setRequestMethod(request)
    }

    const contextValue = {
        method: requestMethod,
        setRequest
    };

    return (
        <ResultsContext.Provider value={contextValue}>
            {props.children}
        </ResultsContext.Provider>
        )
}

export default ResultsContext;