import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";

import HomeLayout from "./ui/HomeLayout";
import Mainpage from "./pages/mainpage";

import Shobehpage from "./pages/Shobehpage";
import Menupage from "./pages/Menupage";
import GetShot from "./pages/GetShot";
import Aboutus from "./pages/Aboutus";
import Textus from "./pages/Textus";
import TarkinehLayout from "./ui/TarkinehLayout";
import Questions from "./pages/Questions";
import Roles from "./pages/Roles";
import Privacy from "./pages/Privacy";

import SearchPage from "./pages/SearchPage";
import Order from "./pages/Order";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster />
        {/* search */}
        <Routes>
          <Route path="/home" element={<HomeLayout />}>
            <Route index element={<Navigate to="mainpage" replace />} />
            <Route path="mainpage" element={<Mainpage />} />
            <Route path="shobeh" element={<Shobehpage />} />
            <Route path="menu" element={<Menupage />} />
            <Route path="order" element={<Order />} />
            <Route path="searchpage" element={<SearchPage />} />
            <Route path="dealership" element={<GetShot />} />
            <Route path="aboutus" element={<Aboutus />} />
            <Route path="textus" element={<Textus />} />
            <Route path="tarkineh" element={<TarkinehLayout />}>
              <Route index element={<Navigate to="questions" replace />} />
              <Route path="questions" element={<Questions />} />
              <Route path="roles" element={<Roles />} />
              <Route path="privacy" element={<Privacy />} />
            </Route>
          </Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
