import { useContext } from "react";
import { UserContext } from "../../components/Form";
import "./styles.css";

const FormInput = (props: any) => {
  const {
    label,
    type,
    required,
    placeholder,
    name,
    value,
    onChange,
    ...inputProps
  } = props;

  const { initialValues, onSubmit } = useContext(UserContext);

  const updateNestedObj = (obj: any, fields: string[], value: any) => {
    if (fields.length === 1) {
      obj[fields[0]] = value;
      return;
    }
    const [currentField, ...remainingFields] = fields;
    updateNestedObj(obj[currentField], remainingFields, value);
  };

  const handleChange = (e: any) => {
    //moramo da koristimo deep kloniranje - ovde sam se odlucio za structuredClone funkciju
    //mogao sam da koristim i cloneDeep lodashovu funkciju
    const newUserInfo = structuredClone(initialValues);
    const { name, value, type } = e.target;
    const fieldNames = name.split(".");

    if (type === "number") {
      updateNestedObj(newUserInfo, fieldNames, parseInt(value));
    } else {
      updateNestedObj(newUserInfo, fieldNames, value);
    }

    onSubmit(newUserInfo);
  };

  return (
    <>
      {type === "submit" ? (
        <button type={type}>{value}</button>
      ) : (
        <>
          <label>{label}</label>
          <input
            type={type}
            required={required}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={(e) => handleChange(e)}
            {...inputProps}
          />
        </>
      )}
    </>
  );
};

export default FormInput;
