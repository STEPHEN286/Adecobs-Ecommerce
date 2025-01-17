import UserSetting from "./routes/UserSetting.jsx";
import CartLayout from "./routes/CartLayout";
import Home from "./routes/Home.jsx";
import ProductDetailsLayout from "./routes/ProductDetailsLayout";
import CategoryLayout from "./routes/ProductRootPage";
import RootLayout from "./routes/RootLayout";
import PersonalDetails from "./components/user-settings/PersonalDetails.jsx";

const { createBrowserRouter } = require("react-router");
console.log({
  Home,
  CartLayout,
  ProductDetailsLayout,
  CategoryLayout,
  RootLayout,
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <h2>Page Not Found</h2>,
    children: [
      { index: true, element: <Home /> },
      { path: "category/:categoryId", element: <CategoryLayout /> },
      { path: "cart", element: <CartLayout /> },
      {
        path: "product-details/:productId",
        // index: true,
        element: <ProductDetailsLayout />,
      },

      {
        path: "user-setting",
        element: <UserSetting />,
        children:[
          {index: true,
          element: <PersonalDetails />}
        ] 
      }
    ],
  },
]);

export default router;
