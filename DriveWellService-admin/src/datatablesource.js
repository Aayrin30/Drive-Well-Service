export const userColumns = [
  { field: "id", headerName: "ID", width: 320 },
  {
    field: "username",
    headerName: "User",
    width: 170,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
            alt="avatar"
          />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 240,
  },

  {
    field: "isAdmin",
    headerName: "isAdmin",
    width: 100,
  },
];

export const companyColumns = [
  { field: "id", headerName: "ID", width: 320 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "description",
    headerName: "Description",
    width: 150,
  },
];

export const modelColumns = [
  { field: "id", headerName: "ID", width: 320 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "companyId",
    headerName: "Company Id",
    width: 320,
  },
];
export const serviceColumns = [
  { field: "id", headerName: "ID", width: 320 },
  {
    field: "name",
    headerName: "Name",
    width: 350,
  },
];
export const priceColumns = [
  { field: "id", headerName: "ID", width: 320 },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  { field: "modelId", headerName: "Model ID", width: 320 },
  { field: "serviceId", headerName: "Service ID", width: 320 },
];
export const appointmentColumns = [
  { field: "id", headerName: "ID", width: 320 },
  {
    field: "userId",
    headerName: "User Id",
    width: 320,
  },
  {
    field: "vehicleNumber",
    headerName: "Vehicle Number",
    width: 150,
  },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    renderCell: (params) => {
      const firstName = params.row.firstName;
      const lastName = params.row.lastName;

      return <div className="cellAction">{`${firstName} ${lastName}`}</div>;
    },
  },
  { field: "modelSelect", headerName: "Model ID", width: 320 },
  {
    field: "services",
    headerName: "Services ID",
    width: 1000,
    renderCell: (params) => {
      const services = params.row.services;

      return (
        <div className="cellAction" style={{ whiteSpace: "normal" }}>
          {services.map((service, index) => (
            <div key={index}>{service}</div>
          ))}
        </div>
      );
    },
  },
  { field: "appointmentDate", headerName: "Appointment Date", width: 220 },
  { field: "totalPrice", headerName: "Total Amount", width: 120 },
  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell: (params) => {
      const status = params.row.status;

      return (
        <div
          className="cellAction"
          style={{
            color: status ? "green" : "goldenrod",
            backgroundColor: status ? 'rgba(0, 128, 0, 0.151)': 'rgba(189, 189, 3, 0.103)',
          }}
        >
          {status ? "COMPLETED" : "IN PROGRESS"}
        </div>
      );
    },
  },
];
