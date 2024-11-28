import React from "react";
import { StoreContext } from "../store/storeContext";
import { setIsAdd } from "../store/storeAction";
import SideNavigation from "../partials/SideNavigation";
import Header from "../partials/Header";
import SearchBar from "../partials/SearchBar";
import { Plus } from "lucide-react";
import Footer from "../partials/Footer";
import CategoryTable from "./CategoryTable";
import ModalAddCategory from "./ModalAddCategory";

const Category = () => {
  const { dispatch, store } = React.useContext(StoreContext);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
  };
  return (
    <>
      <section className="layout-main">
        <div className="layout-div">
          <SideNavigation menu="category" />
          <main>
            <Header title="Category" subtitle="Manage Category" />
            <div className="p-8">
              <div className="flex justify-between items-center">
                <SearchBar />
                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} />
                  Add New
                </button>
              </div>
              <CategoryTable />
            </div>

            <Footer />
          </main>
        </div>
      </section>
      {store.validate && <ModalValidation />}
      {store.error && <ModalError />}
      {store.success && <ToastSucess />}

      {store.isAdd && <ModalAddCategory />}
    </>
  );
};

export default Category;
