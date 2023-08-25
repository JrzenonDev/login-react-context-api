import "./App.css";
import { ProtectedLayout } from "./components/ProtectedLayout";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="profile"
            element={
              <ProtectedLayout>
                <h2>Olá, seja bem-vindo ao profile</h2>
              </ProtectedLayout>
            }
          />
          <Route path="login" />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
