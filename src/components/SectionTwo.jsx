import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";
import "ag-grid-community/styles/ag-grid.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-theme-material.css";

function SectionTwo() {
  const [rowData, setRowData] = useState(
    JSON.parse(localStorage.getItem("rowData")) || []
  );
  const [edit, setEdit] = useState(false);

  //docs AG_GRID
  const gridRef = useRef();

  useEffect(() => {
    const updateRowData = () => {
      const formData = JSON.parse(localStorage.getItem("formData"));
      const phone = JSON.parse(localStorage.getItem("phone"));
      if (formData && phone) {
        const newData = {
          id: formData.id,
          name: formData.name,
          phone: phone,
          email: formData.email,
          quality: formData.quality,
          clean: formData.clean,
          dining: formData.dining,
          beverage: formData.beverage,
        };

        let existingData = JSON.parse(localStorage.getItem("rowData")) || [];
        // if there is any duplicate entry it will not be added
        let isDuplicate = existingData.some((item) => item.id === newData.id);

        //if not duplicated push into new array and store in Local Storage and retrieve the data to store in rowData AG_GRID
        if (!isDuplicate) {
          existingData.push(newData);
          localStorage.setItem("rowData", JSON.stringify(existingData));
          setRowData(existingData);
        }

        localStorage.removeItem("formData");
        localStorage.removeItem("phone");
      }
    };

    updateRowData();
  }, [rowData]);

  // to delete items you can select the rows directly or click the checkbox and press delete
  const deleteItem = useCallback(() => {
    const selectedNodes = gridRef.current.api.getSelectedRows();
    const selectedIds = selectedNodes.map((row) => row.id);

    const updatedData = rowData.filter(
      (item) => !selectedIds.includes(item.id)
    );
    localStorage.setItem("rowData", JSON.stringify(updatedData));
    setRowData(updatedData);
  }, [rowData]);

  const colDefs = useMemo(
    () => [
      { field: "name", headerName: "Name", checkboxSelection: edit },
      { field: "phone", headerName: "Phone Number" },
      { field: "email", headerName: "Email" },
      {
        field: "quality",
        headerName:
          "Please rate the quality of the service you received from your host",
      },
      { field: "clean", headerName: "Was the restaurant clean" },
      {
        field: "dining",
        headerName: "Please rate the overall dining experience",
      },
      {
        field: "beverage",
        headerName: "Please rate the quality of your beverage",
      },
    ],
    [edit]
  );

  const defaultColDef = useMemo(
    () => ({
      filter: true,
    }),
    []
  );

  return (
    <div className="pr-10 pl-10 mt-2 w-full">
      <div className="flex justify-between">
        <span className="text-2xl mb-2">Aromatic Bar</span>
        <div className="flex">
          <input
            type="search"
            className="p-2 border-2 border-slate-200"
            name=""
            id=""
            placeholder="Search"
          />
          <button type="reset" className="ml-2 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2618/2618245.png"
              className="border-2 border-slate-200 w-10 h-10"
              alt=""
            />
          </button>
          <button className=" px-4 bg-green-400 ml-2">Add</button>
        </div>
      </div>
      <p className="mb-2">{rowData.length} records found . Filters applied 0</p>

      <div
        className="ag-theme-material-dark"
        style={{ height: "500px", maxWidth: "100%" }}
      >
        {/* AG GRID WORKING REFERENCE FROM DOCS AND TUTORIALS  */}
        <AgGridReact
          gridOptions={{
            onGridReady: (params) => {
              gridRef.current = params;
            },
          }}
          rowData={rowData}
          columnDefs={colDefs}
          rowSelection={"multiple"}
          defaultColDef={defaultColDef}
        />
      </div>

      <button
        onClick={() => setEdit(!edit)}
        className="float-right p-2 bg-purple-500 m-4 px-4 text-white"
      >
        Edit Fields
      </button>
      <button
        onClick={deleteItem}
        className="float-right p-2 bg-purple-500 m-4 px-4 text-white"
      >
        Delete
      </button>
    </div>
  );
}

export default SectionTwo;
