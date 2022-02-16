import styles from 'AlertBox.module.css';

const AlertBox = (props) => {
  return (
    <>
      <div className={styles.window}>
        <div className={styles.text}>
          <h1>{props.title}</h1>
          <h3>{props.message}</h3>
        </div>
        <div className={styles.actions}>
          <button>Yes</button>
          <button>No</button>
        </div>
      </div>
    </>
  );
};

export default AlertBox;
