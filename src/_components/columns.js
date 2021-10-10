import { format } from "date-fns";

export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
  },

  {
    Header: "FirstName",
    accessor: "firstName",
  },
  {
    Header: "LastName",
    accessor: "lastName",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Date",
    accessor: "createdDate",
    Cell:({value})=>{return format(new Date(value),"dd/mm/yy")}
  },
  
];
