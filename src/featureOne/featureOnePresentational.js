import featureOneStyles as styles from "./featureOne";

export const FeatureOnePresentational = ({
    onChange,
    name,
    statePropertyOne,
    statePropertyTwo,
    addFunction,
    editFunction,
    removeFunction
}) => {
    return (
        <div>
            <h1 className={styles.red}>{name}</h1>
            <h2 className={styles.blue}>{statePropertyOne}</h2>
            <h2 className={styles.red}>{statePropertyTwo}</h2>
            <button className={styles.blue} name="addFunction" onClick={addFunction}>
                Add
            </button>
            <button className={styles.red} name="editFunction" onClick={editFunction}>
                Edit
            </button>
            <button className={styles.blue} name="removeFunction" onClick={removeFunction}>
                Remove
            </button>
            <input onChange={onChange} />
        </div>
    );
};

export default FeatureOnePresentational;
