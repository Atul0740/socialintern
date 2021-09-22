import React from "react";
import "../App.css";
import { Row, Col } from "react-flexbox-grid";
import { FaLocationArrow } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import Button from "react-bootstrap/Button";
const Summary = () => (
  <div class="border border-dark rounded">
    <div className="paddingClass ">
      <Row>
        <Col xs={6}>
          <Row>
            <div style={{marginLeft:"20px",minWidth:"100%",fontSize:"smaller",fontWeight:"bolder"}}> Referals and Campaign Stats</div>
          </Row>
          <br />
          <br />
        </Col>
        <Col xs={6}>
          <Row>
            <Col className="arrow redcolor ">
            <div className=" redcolor" style={{color:"red",marginLeft:"40%",fontSize:"smaller",minWidth:"100%",fontWeight:"bolder"}}>
            <FaLocationArrow /> <span > 40 Campaigns sent in total</span></div>

              <Row>
                <div style={{marginLeft:"40%",fontSize:"smaller",minWidth:"100%",fontWeight:"bolder"}}>4 Campaigns sent in last month</div>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={3} style={{borderRight:"1px solid grey",minWidth:"25%",textAlign:"center"}}>
          <Row>
            <p className="textAlignCenter" style={{minWidth:"100%",fontSize:"smaller",fontWeight:"bolder"}}>User's Reached</p>
          </Row>
          <br />
          <Row className="bluecolor">
            <div style={{minWidth:"100%",fontSize:"smaller",color:"#5296ff"}}><BsArrowUpRight /> +3.59%</div>
          </Row>
          <Row>
            <h4 style={{minWidth:"100%",fontSize:"200%"}}>7956</h4>
          </Row>
        </Col>

        <Col xs={3} style={{borderRight:"1px solid grey",maxWidth:"25%",textAlign:"center"}}>
          <Row>
            <p style={{minWidth:"100%",fontSize:"smaller",fontWeight:"bolder"}}>Referals</p>
          </Row>
          <br />
          <Row className="bluecolor">
            <div style={{minWidth:"100%",fontSize:"smaller",color:"#5296ff"}}><BsArrowUpRight /> +9.09%</div>
          </Row>
          <Row>
            <h4 style={{minWidth:"100%",fontSize:"200%"}}>0662</h4>
          </Row>
        </Col>
        <Col xs={3} style={{borderRight:"1px solid grey",maxWidth:"25%",textAlign:"center"}}>
          <Row>
            <p className="fontSizeReduce" style={{minWidth:"100%",fontSize:"smaller",fontWeight:"bolder"}}>Shares</p>
          </Row>
          <br />
          <Row className="bluecolor">
            <div style={{minWidth:"100%",fontSize:"smaller",color:"#5296ff"}}> <BsArrowUpRight /> +29.18%</div>
          </Row>
          <Row>
            <h4 style={{minWidth:"100%",fontSize:"200%"}}>1478</h4>
          </Row>
        </Col>
        <Col xs={3} style={{textAlign:"center"}}>
          <Row>
            <p className="fontSizeReduce" style={{minWidth:"100%",fontSize:"smaller",fontWeight:"bolder"}}>Application</p>
          </Row>
          <br />
          <Row className="bluecolor">
            <div style={{minWidth:"100%",fontSize:"smaller",color:"#5296ff"}}><BsArrowUpRight /> +12.0%</div>
          </Row>
          <Row>
            <h4 style={{minWidth:"100%",fontSize:"200%"}}>0564</h4>
          </Row>
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={5}>
          <Row style={{marginLeft:"0%",minWidth:"100%",marginTop:"10%", minHeight:"100%"}}>
            <Button variant="primary" size="sm" block 
            style={{fontSize:"70%",fontWeight:"bolder",minWidth:"120%",color:"white",backgroundColor:"#5296ff",padding:"2%",borderRadius:"8%"}}>
              Start a New Campaign now
            </Button>
          </Row>
        </Col>
        
        <Col xs={5}>
        <Row style={{marginLeft:"25%",minWidth:"100%",marginTop:"10%", minHeight:"100%"}}>
          <Button variant="danger" className="button" size="sm" block 
          style={{fontSize:"70%",fontWeight:"bolder" ,minWidth:"125%",backgroundColor:"red",color:"white",padding:"2%",borderRadius:"8%"}}>
            Pause All Running Campaign
          </Button></Row>
        </Col>
      </Row>
    </div>
  </div>
);

export default Summary;
