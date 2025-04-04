
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Debt Optimizer</h1>
      <Outlet />
    </div>
  );
}
