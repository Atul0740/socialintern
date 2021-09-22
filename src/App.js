import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Card from './components/card/Card';
import ApplicationsBar from './components/applicationsbar/ApplicationsBar';
import ApplicationDetails from './components/applicationdetails/ApplicationDetails';
import Areachart from './components/Areachart'
import { useState } from 'react';
import DoughnutChart from './components/Doughnut';
import Summary from './components/Summary';


const applications1 = {
  title: "Total Applications",
  count: 7956,
  growth: +3.59,
  data: 70,
  blue: false
}

const shortlists = {
  title: "Shortlisted Candidates",
  count: 4658,
  growth: 0.6,
  data: 60,
  blue: true
}

const applications2 = {
  title: "Total Applications",
  count: 1501,
  growth: -0.4,
  data: -40,
  blue: false
}

function App() {
  // for side bar
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="App">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Header collapsed={collapsed} />
      <div className={"cards " + (!collapsed && "blur")}>
        <Card title={applications1.title} count={applications1.count} growth={applications1.growth} data={applications1.data} blue={applications1.blue} />
        <Card title={shortlists.title} count={shortlists.count} growth={shortlists.growth} data={shortlists.data} blue={shortlists.blue} />
        <Card title={applications2.title} count={applications2.count} growth={applications2.growth} data={applications2.data} blue={applications2.blue} />
      </div>
      <div className={"new-appl-bar " + (!collapsed && "blur")}>
        <ApplicationsBar />
      </div>
      <div className={"graphs-line-bar " + (!collapsed && "blur")}>
        <div className="random">
          <div className="topper">
            <div className="area">
              
              <Areachart /></div>
            <div className="content">
              <ApplicationDetails /></div>
          </div>
          <div className="bottom">
            <div className="summary">
              <Summary /></div>
            <div className="dough">
              <DoughnutChart /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
