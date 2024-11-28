import React from "react";
import { StoreContext } from "../store/storeContext";
import { setIsAdd } from "../store/storeAction";
import SideNavigation from "../partials/SideNavigation";
import Header from "../partials/Header";
import SearchBar from "../partials/SearchBar";
import { Plus } from "lucide-react";
import Footer from "../partials/Footer";
import ClothesTable from "./ClothesTable";
import ModalAddClothes from "./ModalAddClothes";

const Clothes = () => {
    const {dispatch, store} = React.useContext(StoreContext);
    const [itemEdit, setitemEdit] =  React.useState(null);
    
    const handleAdd = () => {
        dispatch(setIsAdd(true));
        setitemEdit(null);
    };
    
      return (
        <>
            <section className="layout-main">
                <div className="layout-div">
                        <SideNavigation menu="clothes"/>
                    <main>
    
                        <Header title="Clothes" subtitle="List of Available Clothes"/>
                        <div className="p-8">
                            <div className="flex justify-between items-center">
                                <SearchBar/>
                                <button className="btn btn-add" onClick={handleAdd}>
                                <Plus size={16}/>Add New    
                                </button>
                            </div>
                            <ClothesTable setitemEdit={setitemEdit}/>
                        </div>
    
                            <Footer />
                    </main>
                </div>
            </section>
    
            {store.validate && <ModalValidation/>}
            {store.error && <ModalError/>}
            {store.success && <ToastSucess/>}
            
             {store.isAdd && <ModalAddClothes itemEdit={itemEdit}/>}
            
        </>
      );
    };
    
    export default Clothes