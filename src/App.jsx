import { Route, BrowserRouter, Routes } from "react-router-dom";
import AuthLayout from "./components/layout/AuthLayout.jsx";
import AddPost from "../pages/AddPost.jsx";
import AllPost from "../pages/AllPost.jsx";
import HomePage from "./components/root/HomePage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import SignupPage from "../pages/SignupPage.jsx";
import Layout from "./components/layout/Layout.jsx";
import Postlayout from "./components/layout/Postlayout.jsx";
import ReadPost from "./components/post/ReadPost.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
        </Route>
        <Route element={<AuthLayout />}>
          // authenticated route
          <Route path="/" element={<HomePage />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/all-post" element={<AllPost />} />

          <Route element={<Postlayout />}>
            <Route path="/posts/:postId" element={<ReadPost />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
