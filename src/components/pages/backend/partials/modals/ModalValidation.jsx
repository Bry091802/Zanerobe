import { Archive, Info, X } from "lucide-react";
import ModalWrapper from "./ModalWrapper";

import React from "react";
import { StoreContext } from "../../store/storeContext";
import { setValidate } from "../../store/storeAction";

const ModalValidation = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleClose = () => {
    dispatch(setValidate(false));
  };
  return (
    <>
      <ModalWrapper>
        <div
          className="modal-main bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 
        -translate-y-1/2 max-w-[300px] w-full rounded-md border border-line"
        >
          <div className="modal-body p-2 py-4 text-center">
            <Info className="text-info mx-auto mb-4" size={40} />
            <h5>Validation Issue</h5>
            <p className="my-5 text-center">Title already exist</p>
            <button
              className="btn btn-info w-full flex justify-center"
              onClick={handleClose}
            >
              Okay
            </button>
          </div>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ModalValidation;