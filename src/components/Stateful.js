import { useState, useEffect } from "react";
const statefulStorage = [];

const manageStatefulObject = ({
  storedObject = {},
  reference,
  action,
  myUseState,
}) => {
  const difObject = {};
  Object.keys(reference).forEach((objkey) => {
    const objKeyValue = reference[objkey];
    if (typeof objKeyValue === "object") {
      difObject[objkey] = manageStatefulObject({
        storedObject: storedObject[objkey],
        objKeyValue,
        action,
      });
    } else {
      if (!storedObject[objkey]) {
        const [stateValue, updateStateValue] = useState(objKeyValue);
        storedObject[objkey] = {
          state: stateValue,
          updateState: updateStateValue,
        };
      } //made some changes here
      switch (action) {
        case "update":
          if (storedObject[objkey].state !== objKeyValue) {
            storedObject[objkey].updateState(objKeyValue);
            console.log(storedObject);
          }
          break;

        case "values":
          difObject[objkey] = storedObject[objkey].state;
          break;

        default:
          difObject[objkey] = storedObject[objkey];
          break;
      }
    }
  });
  return difObject;
};

export const useStatefulObject = (reference) => {
  const statefulObject = manageStatefulObject({
    reference,
  });

  const statefulObjectValues = manageStatefulObject({
    statefulObject,
    reference,
    action: "values",
  });

  const updateStatefulObject = (reference, customFunction) => {
    // var reference = updateValue;
    if (customFunction) {
      reference = customFunction(
        manageStatefulObject({
          storedObject: statefulObject,
          reference,
          action: "values",
        })
      );
    }
    manageStatefulObject({
      storedObject: statefulObject,
      reference,
      action: "update",
    });
  };
  return [statefulObjectValues, updateStatefulObject];
};
// const myObject = {prop1:"test",prop2:"another test"}
// const [valueObject,updateStates] = useStatefulObject(myObject)

// const handleUpdate = ()=>{
//   updateObj = {prop1:"changed"}
//   updateStates(updateObj)
// }

// return (
//   <div onClick={handleUpdate}>{valueObject.prop1}</div>
// )
