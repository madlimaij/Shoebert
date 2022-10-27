import React from "react";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import ListCard from "../components/ListCard";

const DashboardPage = () => {
  return (
    <div>
      <div>
        <ListCard />
        <ListCard />
        <ListCard />
      </div>
      <div>
        <Cart />
      </div>
      <Footer/>
    </div>
  );
};

export default DashboardPage;
