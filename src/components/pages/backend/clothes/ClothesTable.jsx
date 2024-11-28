import React from "react";
import { StoreContext } from "../store/storeContext";
import {
  setIsAdd,
  setIsConfirm,
  setIsDelete,
  setIsView,
} from "../store/storeAction";
import { clothes } from "../clothes-data";
import { Archive, ArchiveRestore, FilePenLine, FileVideo } from "lucide-react";
import LoadMore from "../partials/LoadMore";
import ModalDelete from "../partials/modals/ModalDelete";
import ModalConfirm from "../partials/modals/ModalConfirm";
import Pills from "../partials/Pills";

const ClothesTable = ({ setitemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  let counter = 1;

  const handleArchive = () => {
    dispatch(setIsConfirm(true));
  };

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setitemEdit(item);
  };

  const handleDelete = () => {
    dispatch(setIsDelete(true));
  };
  const handleRestore = () => {
    dispatch(setIsConfirm(true));
  };

  return (
    <>
      <div className="p-4 bg-secondary rounded-md mt-10 border border-line relative">
        {/* <SpinnerTable/> */}
        <div className="table-wrapper custom-scroll">
          {/* <TableLoader count={1} cols={4}/> */}
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Status</th>
                <th className="w-[30%]">Title</th>
                <th>Year</th>
                <th>Duration</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <td colSpan={100}>
                 <IconNoData/>
                                             
                </td>
                </tr> */}
              {/* <tr>
                <td colSpan={100}>
                <IconServerError/>
                 </td>
                 </tr> */}
              {clothes.map((item, key) => (
                <tr key={key}>
                  <td>{counter++}.</td>
                  <td>
                    <Pills />
                  </td>
                  <td>{item.clothes_title}</td>
                  <td>{item.clothes_price}</td>
                  <td>{item.clothes_category}</td>
                  <td>
                    <ul className="table-action">
                      {true ? (
                        <>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Edit"
                              onClick={() => handleEdit(item)}
                            >
                              <FilePenLine />
                            </button>
                          </li>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Archive"
                              onClick={() => handleArchive()}
                            >
                              <Archive />
                            </button>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Restore"
                              onClick={() => handleRestore()}
                            >
                              <ArchiveRestore />
                            </button>
                          </li>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Delete"
                              onClick={handleDelete}
                            >
                              <Trash2 />
                            </button>
                          </li>
                        </>
                      )}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <LoadMore />
        </div>
      </div>

      {store.isDelete && <ModalDelete />}
      {store.isConfirm && <ModalConfirm />}
    </>
  );
};

export default ClothesTable;
