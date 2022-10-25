import React from "react";
import Cart from "../components/Cart";
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
    </div>
  );
};

export default DashboardPage;
