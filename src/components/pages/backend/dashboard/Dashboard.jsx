import Footer from "../partials/Footer";
import Header from "../partials/Header";
import SideNavigation from "../partials/SideNavigation";
import DashboardAccordion from "./DashboardAccordion";
import DashboardCard from "./DashboardCard";

const Dashboard = () => {
  return (
    <>
      <section className="layout-main">
        <div className="layout-div">
          <SideNavigation menu="dashboard" />
          <main>
            <Header title="Dashboard" subtitle="Welcome to Zanerobe" />
            <div className="p-8">
              <div className="grid grid-cols-[1fr_400px] gap-5">
                <div className="stats">
                  <div className="grid grid-cols-3 gap-5">
                    <DashboardCard title="T-Shirts" filterby="T-Shirts" />
                    <DashboardCard title="Jacket" filterby="Jacket" />
                    <DashboardCard title="Sweater" filterby="Sweater" />
                    <DashboardCard title="Pants" filterby="Pants" />
                  </div>
                </div>
                <div className="sidebar custom-scroll overflow-auto h-[calc(100vh-250px)]">
                  <DashboardAccordion title="T-Shirts" filterby="T-Shirts" />
                  <DashboardAccordion title="Jacket" filterby="Jacket" />
                  <DashboardAccordion title="Sweater" filterby="Sweater" />
                  <DashboardAccordion title="Pants" filterby="Pants" />
                </div>
              </div>
            </div>z

            <Footer />
          </main>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
