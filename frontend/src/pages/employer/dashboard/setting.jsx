import EmployerProfile from "../EmployerProfile";
import Sidebar from "./Sidebar";

export default function EmployerSetting() {
  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <EmployerProfile />
          </div>
        </main>
      </div>
    </>
  );
}
