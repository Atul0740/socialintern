
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Row, Col } from "react-flexbox-grid";
import { BiDotsHorizontalRounded } from "react-icons/bi";
const data = {
  datasets: [
    {
      data: [45, 24, 30],
      backgroundColor: ["purple ", "#5296ff", "red"],
      borderColor: ["purple", "#5296ff", "red"],
      borderWidth: 1,
    },
  ],
};

const DoughnutChart = () => (
    
  <div class="border border-dark rounded" style = {{borderStyle:"ridge",borderColor:"#888888",marginLeft:"50px",
                                                    minWidth:"25%",borderRadius:"10px",boxShadow:"0.1px 0.1px 0.1px 0.1px #888888"}}>
    <Row className="paddingClass" >
      <Col xs={9}>
        <p className="fontSizeReduce" 
        style={{color:"White" , fontFamily:"'Poppins', sans-serif",fontSize:"smaller",padding:"5%",minWidth:"100%",fontWeight:"bolder"}}> 
        Open positions by Department </p>
      </Col>
      <Col xs={2}>
        {" "}
        <BiDotsHorizontalRounded style={{color:"white" , marginLeft:"50%",marginTop:"15%", fontSize:"200%"}}/>{" "}
      </Col>
    </Row>

    <div
      className="paddingRow_2"
      style={{
        position: "relative",
        margin: "auto",
        width: "17vw",
        padding:"5%",
        height:"17vw"
      }}
    >
      {" "}
      <Doughnut data={data} />
    </div>
  </div>
);

export default DoughnutChart;