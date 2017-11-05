import React, { Component } from 'react';
import { Row, Col, Tag, Tabs, Card } from 'antd';
const TabPane = Tabs.TabPane;
import designPic from "../../img/designPic.png";
import constrcPic from "../../img/constrcPic.png";
import guoan from "../../img/guoan.jpg"


export default class FourthChild extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
              <Row type="flex" justify="center" align = "center" style = {{marginTop:40,height:"90%",minHeight:"80%"}}>
                
                <Col span = {18}>
                    <Row >
                        <h1 className="pageTitle">自我描述</h1>
                        <p style = {{ fontSize:24,color:"#ffc",border:"5px #ccc solid",borderRadius:10,padding:"10px" }}>
                        我遇到过的挑战很多，我觉得最近的挑战是面对前端开发的宽阔领域，该如何选择，是纵向发展，还是深入研究，可是后来我发现，踏实在一个领域钻研，
                        静下心来其实是最正确的选择，至于纵向，是你在拥有了足够踏实的技术基础支持的前提下才能进行扩展的。我觉得我虽然工作经验不多，可是我有一颗不停追逐的心，
                        火热的心，我觉得它使得我永远不会落后！
                        我这个人性格比较开朗，喜欢和同事交流工作当中遇到的一些问题，也喜欢钻研一些技术问题，平时喜欢旅游和户外运动，休息的时候也会去图书馆提升一下自己，
                        所以我还是比较热爱前端这份工作。
                        我觉得我从事前端开发能够做到创造价值，这才是最美妙的，能够学习，能够提升，这是我的初衷，所以希望您能给我一次机会，让我和贵公司一道提升，一起成长。
                        </p>
                    </Row>
                    
                    <Row  style = {{marginTop:20}}>
                    
                        <Col>
                            <div className="personInfo">
                                <ul>
                                    <li><a href="https://github.com/lydia1883"><i className="iconfont">&#xe602;</i></a></li>
                                    <li><a href="http://weibo.com/p/1005051890439057"><i className="iconfont">&#xe601;</i></a></li>
                                    <li><a href="mailto://986981086@qq.com"><i className="iconfont">&#xe603;</i></a></li>
                                    <li><a href="http://www.linkedin.com/?trk=nav_lingying_logo"><i className="iconfont">&#xe605;</i></a></li>
                                    <li><a href="tencent://message/?uin=986981086&Site=我的网站&Menu=yes "><i className="iconfont">&#xe600;</i></a></li>
                                </ul>
                            </div>

                        </Col>
                    </Row>
                </Col>
            </Row>
           
        )

    }
}