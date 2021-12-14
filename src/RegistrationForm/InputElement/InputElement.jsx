import styles from './InputElement.module.css';

const InputElement = ({ text, value, type, name, pattern, title, onChange }) => {
  return (
    <div className={styles.block}>
      <label className={styles.label} htmlFor="name">
        {text}
      </label>
      <input
        value={value}
        className={styles.input}
        type={type}
        name={name}
        pattern={pattern}
        title={title}
        required
        onChange={onChange}
      />
    </div>
  );
};

export default InputElement;
