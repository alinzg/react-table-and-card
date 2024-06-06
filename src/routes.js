import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/main-layout";
import TableAndCardsPage from "./pages/table-and-cards-page";
import NewPage from "./pages/new-page";
import EditPage from "./pages/edit-page";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <TableAndCardsPage />,
      },
      {
        path: "cards",
        element: <TableAndCardsPage />,
      },
      {
        path: "new",
        element: <NewPage />,
      },
      {
        path: "edit/:id",
        element: <EditPage />,
      },
    ],
  },
]);
