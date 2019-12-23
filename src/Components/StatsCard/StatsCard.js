import React from "react";
import { Row, Col } from "react-bootstrap";

function StatsCard(props) {

    return (
        <div className="card card-stats" style={{border:props.color}}>
        <div className="content">
          <Row>
            <Col xs={12}>
              <div className="numbers">
                <p>{props.statsText}</p>
                <p>{props.statsValue}</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  
}

export default StatsCard;
