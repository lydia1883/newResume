import React, { Component } from 'react';
import { Row, Col, Tag, Tabs, Card } from 'antd';
import "./style.css";
const TabPane = Tabs.TabPane;
import designPic from "../../img/designPic.png";
import constrcPic from "../../img/constrcPic.png";
import guoan from "../../img/guoan.jpg"


export default class SecendChild extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Row type="flex" justify="center" align="center" style={{ marginTop: 30, height: "80%", minHeight: "80%" }}>

                <Col span={18}>
                    <h1 className="pageTitle">参与项目</h1>
                    <div className="card-container">

                        <Tabs type="card">
                            <TabPane tab="虚拟设计院项目" key="3">
                                <Card >
                                    <Row>
                                        <Col span={7} style={{ marginRight: 20 }} >
                                            <h3 style={{ fontSize: "18px" }}>虚拟设计院项目 </h3>
                                            <h3 style={{ fontSize: "16px", marginTop: "10px" }}>项目任职:开发及维护 </h3>

                                            <p style={{ fontSize: "16px", lineHeight: "20px", marginTop: "20px" }}>
                                                虚拟设计院项目主要是通过WEB端的设计院管理系统实现包括图纸报审，
                                        图纸查阅,团队管理，沟通协作等相关功能。
                                        我在项目初期负责项目初期BUG调试与维护、团队管理功能模块的开发与调试、文件归档功能模块的开发与调试，
                                        并对整体界面样式进行了设计与改进,同时还参与了需求的定版与产品手册的编写，可以说对整个项目有了一定层次的了解。

                                        </p>
                                            <h3 style={{ fontSize: "16px", marginTop: "10px" }}> 使用技术:</h3>
                                            <div style={{ fontSize: "16px", lineHeight: "30px",marginTop: "20px" }}>
                                                <Tag color="pink">JavaScript</Tag>
                                                <Tag color="red">HTML5</Tag>
                                                <Tag color="orange">CSS3</Tag>
                                                <Tag color="green">Jquery</Tag>
                                                <Tag color="cyan">Ajax</Tag>
                                                <Tag color="blue">PostMan</Tag>
                                            </div>
                                        </Col>
                                        <Col span={16} style={{ height: "80%" }}>
                                            <div className="imgBox">
                                                <img src={designPic} style={{ width: "100%", height: "90%", display: "block" }} />
                                            </div>
                                        </Col>
                                    </Row>
                                </Card>
                            </TabPane>
                            <TabPane tab="中信国安集团 大数据演示项目" key="1">
                                <Card >
                                    <Row>
                                        <Col span={7} style={{ marginRight: 20 }} >
                                            <h3 style={{ fontSize: "18px" }}>中信国安集团 大数据演示项目 </h3>
                                            <h3 style={{ fontSize: "16px", marginTop: "10px" }}>项目任职:开发及维护 </h3>

                                            <p style={{ fontSize: "16px", lineHeight: "20px", marginTop: "20px" }}>
                                                中信国安新一城大数据演示项目
                                                包括前期的用户需求文档的编写，以及前期用户需求的收集整理
                                                项目的初始搭建,三维模型的接入
                                                与设备自动化联动
                                                功能模块的开发，包括数字沙盘模块/路径规划模块/大屏展示模块/设备自动化等模块
                                                中期演示的功能模块的串联，包括前后端联调，以及BUG修复，整体样式修改
                                          </p>
                                            <h3 style={{ fontSize: "16px", marginTop: "10px" }}>使用技术:</h3>
                                            <div style={{ fontSize: "16px", lineHeight: "30px",marginTop: "20px" }}>
                                                <Tag color="pink">JavaScript</Tag>
                                                <Tag color="red">React</Tag>
                                                <Tag color="orange">Redux</Tag>
                                                <Tag color="green">Redux-Thunk</Tag>
                                                <Tag color="cyan">React-router</Tag>
                                                <Tag color="cyan">NPM</Tag>
                                                <Tag color="cyan">ArangoDB</Tag>
                                                <Tag color="cyan">CSS3</Tag>
                                                <Tag color="blue">Webpack</Tag>
                                                <Tag color="blue">GIT(gitlab)</Tag>
                                                <Tag color="blue">PostMan</Tag>
                                                <Tag color="blue">BIM</Tag>
                                                <Tag color="blue">ES6</Tag>
                                            </div>
                                        </Col>
                                        <Col span={16} style={{ height: "80%" }}>
                                            <div className="imgBox">
                                                <img src={guoan} style={{ width: "100%", height: "90%", display: "block" }} />
                                            </div>
                                        </Col>
                                    </Row>
                                </Card>
                            </TabPane>
                            <TabPane tab="中国电建集团 华东勘测设计院项目" key="2">
                                <Card >
                                    <Row>
                                        <Col span={7} style={{ marginRight: 20 }} >
                                            <h3 style={{ fontSize: "18px" }}>中国电建集团 华东勘测设计院项目 </h3>
                                            <h3 style={{ fontSize: "16px", marginTop: "10px" }}>项目任职:开发及维护 </h3>

                                            <p style={{ fontSize: "16px", lineHeight: "20px", marginTop: "20px" }}>
                                               中国电建集团华东勘测设计院的雅砻江杨房沟水电站项目，从12月至今参与开发相关功能模块
                                               包括模型的接入,数据的筛查,流程管控的改版等等。
                                               该项目主要针对水电站建筑过程中的BIM信息进行综合化、信息化的管理

                                        </p>
                                            <h3 style={{ fontSize: "16px", marginTop: "10px",marginTop: "20px" }}> 使用技术:</h3>
                                            <div style={{ fontSize: "16px", lineHeight: "30px", }}>
                                                <Tag color="pink">JavaScript</Tag>
                                                <Tag color="red">React</Tag>
                                                <Tag color="orange">Redux</Tag>
                                                <Tag color="green">Redux-Saga</Tag>
                                                <Tag color="cyan">React-router</Tag>
                                                <Tag color="cyan">NPM</Tag>
                                                <Tag color="cyan">ArangoDB</Tag>
                                                <Tag color="cyan">CSS3</Tag>
                                                <Tag color="blue">Webpack</Tag>
                                                <Tag color="blue">GIT</Tag>
                                                <Tag color="blue">PostMan</Tag>
                                                <Tag color="pink">Ant-design</Tag>
                                                <Tag color="blue">BIM</Tag>
                                                <Tag color="blue">ES6</Tag>
                                            </div>
                                        </Col>
                                        <Col span={16} style={{ height: "80%" }} >
                                            <div className="imgBox">
                                                <img src={constrcPic} style={{ width: "100%", height: "90%", display: "block" }} />
                                            </div>
                                        </Col>
                                    </Row>
                                </Card>
                            </TabPane>
                        </Tabs>
                    </div>
                </Col>
            </Row>
        )


    }


}