import { createContext, useState } from 'react'

const ResultsContext = createContext()

export const ResultsProvider = (props) => {
    const [requestMethod, setRequestMethod] = useState()

    const setRequest = (request) => {
        setRequestMethod(request)
    }

    const contextValue = {
        requestMethod,
        setRequest
    };

    return (
        <ResultsContext.Provider value={contextValue}>
            {props.children}
        </ResultsContext.Provider>
        )
}

export default ResultsContext;