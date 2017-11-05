import React,{ Component } from 'react';
import { Carousel,Row,Col } from 'antd';
import './style.css';
import FirstChild from '../ChildPage/firstChild';
import SecendChild from '../ChildPage/secendChild';
import ThirdChild from "../ChildPage/thirdChild";
import FourthChild from "../ChildPage/fourthChild"


class HomePage extends Component{

  constructor(props){
        super(props);
        this.state = {
           
        }
       
  }
 
  render() {
      return (
         <Carousel >
            <div className = "firstChild" >
                <Row> 
                    <Col span = {24} >
                    <FirstChild />
                    </Col>
                </Row>
            </div>
            <div className = "secondChild">
                 <Row> 
                    <Col span = {24}>
                    <SecendChild/>
                    </Col>
                </Row>
            </div>
            <div className = "thirdChild">
                 <Row> 
                   <Col span = {24}>
                    <ThirdChild/>
                    </Col>
                </Row>
            </div>
            <div className = "fourthChild">
                 <Row> 
                    <Col span = {24}>
                    <FourthChild />
                    </Col>
                </Row>
            </div>
        </Carousel>
      )
  }


}
  
export default HomePage;