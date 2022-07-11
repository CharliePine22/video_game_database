import React, { useState } from 'react';
import Ticker from 'react-ticker';
import PageVisibility from 'react-page-visibility';
import styles from './TickerBar.module.css';

const TickerBar = () => {
  const [pageIsVisible, setPageIsVisible] = useState(true)

  const handleVisibilityChange = (isVisible) => {
    setPageIsVisible(isVisible)
  }

  return (
    <PageVisibility onChange={handleVisibilityChange}>
      {pageIsVisible && (
        <Ticker mode='smooth' speed={parseInt('7')} className={styles.ticker}>
          {({ index }) => (
              <>
                  <h1 className={styles.text}>This is the Headline of element #{index}!</h1>
                  <img src="www.my-image-source.com/" alt=""/>
              </>
          )}
        </Ticker>
      )}
    </PageVisibility>
  )
}

export default TickerBar