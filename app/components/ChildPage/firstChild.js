import React,{ Component } from 'react';
import { Row,Col,Tag } from 'antd';
import "./style.css";
import head from "../../img/head.jpg";

class FirstChild extends Component{

    constructor(props){
        super(props);  
    }

    render(){

        return(

            <Row type="flex" justify="center" align="middle" style = {{height:"100%"}}>
                <Col>
                    <div className = "circleHead">
                        <img src={ head } alt=""/>
                    </div>
                    <h3 className = "mainTitle">
                        刘雨
                    </h3>
                     <h4 className = "smallTitle">
                     一枚前端开发工程师
                    </h4>
                    <h4 className = "smallTitle">
                       阳光,自信,坚毅,执着
                    </h4>
                    <div>
                    <div style = {{ marginTop:10 }}>
                        <Tag color="pink">JavaScript</Tag>
                        <Tag color="red">HTML5</Tag>
                        <Tag color="orange">CSS3</Tag>
                        <Tag color="red">BOOTSTRAP</Tag>
                        <Tag color="orange">REACT</Tag>
                        
                        <Tag color="cyan">REDUX</Tag>
                        <Tag color="blue">REDUX-SAGA</Tag>
                        <Tag color="purple">REACT-ROUTER</Tag>
                        <Tag color="green">JQUERY</Tag>
                    </div>
                    <div style = {{ marginTop:10 }}>
                       <h4 className = "smallTitle">
                          <a>联系方式:</a>
                         
                        </h4>
                        <h4 className = "smallTitle">
                          
                           TEL:13252848760
                          
                        </h4>
                        <h4 className = "smallTitle">
                         
                           <p>EMAIL: 986981086@qq.com </p>
                           <p>liuyu19930831@live.com</p>
                         
                        </h4>
                    </div>
                   
                </div>
                </Col>
           </Row>

        )

    }

}


export default FirstChild