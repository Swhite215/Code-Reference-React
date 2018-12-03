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
            <h1>{name}</h1>
            <h2>{statePropertyOne}</h2>
            <h2>{statePropertyTwo}</h2>
            <button name="addFunction" onClick={addFunction}>
                Add
            </button>
            <button name="editFunction" onClick={editFunction}>
                Edit
            </button>
            <button name="removeFunction" onClick={removeFunction}>
                Remove
            </button>
            <input onChange={onChange} />
        </div>
    );
};
