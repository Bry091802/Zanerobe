import { Plus } from "lucide-react";
import React from "react";
import SideNavigation from "../partials/SideNavigation";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import SearchBar from "../partials/SearchBar";
import { StoreContext } from "@/components/store/storeContext";
import { setIsAdd } from "@/components/store/storeAction";
import ToastSucess from "../partials/ToastSucess";
import ModalError from "../partials/modals/ModalError";
import ModalValidation from "../partials/modals/ModalValidation";
import ClothesTable from "./ClothesTable";
import ModalAddClothes from "./ModalAddClothes";


const Clothes = () => {
  const { dispatch, store } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };
  return (
    <>
      <section className="layout-main">
        <div className="layout-div">
          <SideNavigation menu="clothes" />
          <main>
            <Header title="Clothes" subtitle="Manage List of Clothes" />
            <div className="px-8 pt-8">
              <div className="flex justify-between items-center">
                <div></div>
                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} />
                  Add New
                </button>
              </div>
              <ClothesTable setItemEdit={setItemEdit} />
            </div>

            <Footer />
          </main>
        </div>
      </section>
      {store.validate && <ModalValidation />}
      {store.error && <ModalError />}
      {store.success && <ToastSucess />}

      {store.isAdd && (
        <ModalAddClothes
          setIsAdd={setIsAdd}
          setItemEdit={setItemEdit}
          itemEdit={itemEdit}
        />
      )}
    </>
  );
};

export default Clothes;
