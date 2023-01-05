import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useAddNewPetMutation } from "../api/apiSlice";

const AddPetForm = ({ open, toggleModalOpen }) => {
  const [values, setValues] = useState({
    name: "",
    age: "",
    job: "",
    pet: "",
    date: "",
  });

  const [addNewPet, { isLoading }] = useAddNewPetMutation();

  const canSave =
    [values.name, values.age, values.job, values.pet, values.date].every(
      Boolean
    ) && !isLoading;

  const onSavePetClicked = async () => {
    if (canSave) {
    }
  };

  return (
    <>
      <CSSTransition in={open} timeout={700} classNames="modal" unmountOnExit>
        <div className="modal">
          Modal <button onClick={toggleModalOpen}>Button</button>
        </div>
      </CSSTransition>
    </>
  );
};

export default AddPetForm;
