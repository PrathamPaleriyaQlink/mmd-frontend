import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import RootLayout from "./layouts/RootLayout";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Begin from "./pages/Begin";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import { ping } from "./libs/api/api_utils";
import { useEffect } from "react";
import ReGenrateVision from "./pages/ReGenrateVision";

function App() {
  useEffect(() => {
    const checkPing = async () => {
      try {
        const res = await ping();
        console.log("Ping response:", res);
      } catch (err) {
        console.error("Ping failed:", err);
      }
    };
    checkPing();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="" element={<Main />} />
          </Route>
          <Route path="auth" element={<Auth />} />
          <Route path="begin" element={<Begin />} />
          <Route path="re-genrate" element={<ReGenrateVision />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="chat" element={<Chat />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
