import Chart from "../../components/Chart";
import Featured from "../../components/Featured";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Widget from "../../components/Widget";
import List from "../../components/Table";

import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last revenue for 6 month" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
