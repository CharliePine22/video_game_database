import { createContext, useState } from 'react'

const ResultsContext = createContext()

export const ResultsProvider = (props) => {
    const [results, setResults] = useState([]);

    const setResultsData = (data) => {
        setResults(data);
    };

    const contextValue = {
        data: results,
        setResultsData,
    };

    return (
        <ResultsContext.Provider value={contextValue}>
            {props.children}
        </ResultsContext.Provider>
        )
}

export default ResultsContext;