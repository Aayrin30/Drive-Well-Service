import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import NewUser from "./pages/newUser/NewUser";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import { appointmentColumns, companyColumns, modelColumns, priceColumns, serviceColumns, userColumns } from "./datatablesource";
import NewModel from "./pages/newModel/NewModel";
import NewCompany from "./pages/newCompany/NewCompany";
import NewService from "./pages/newService/NewService";
import NewPrice from "./pages/newPrice/NewPrice";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navigate to="/user" replace />} />
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route path="user">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={userColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":userId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    {" "}
                    <NewUser inputs={userInputs} title="Add New User" />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="company">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={companyColumns} />
                  </ProtectedRoute>
                }
              />
              <Route path="new" element={<NewCompany />} />
            </Route>
            <Route path="model">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={modelColumns} />
                  </ProtectedRoute>
                }
              />
              <Route path="new" element={<NewModel />} />
            </Route>
            <Route path="service">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={serviceColumns} />
                  </ProtectedRoute>
                }
              />
              <Route path="new" element={<NewService />} />
            </Route>
            <Route path="price">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={priceColumns} />
                  </ProtectedRoute>
                }
              />
              <Route path="new" element={<NewPrice />} />
            </Route>
            <Route path="appointment">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={appointmentColumns} />
                  </ProtectedRoute>
                }
              />
              <Route path="new" element={<NewPrice />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
