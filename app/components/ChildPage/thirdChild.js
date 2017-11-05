import React,{ Component } from 'react';
import { Row,Col,Tag,Tabs,Card,Timeline,Popover, Button,Icon } from 'antd';
import "./style.css";



export default class ThirdChild extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            num:[
            {
            name:"JavaScript",
            content:
             <div key="1" className="popSize">
                <p>JavaScript</p>
                <p>对于ES5的api可以达到熟练使用的程度,对于面向对象及作用域有一定理解</p>
            </div>
            },
            {
            name:"HTML",
            content:
             <div key="2" className="popSize">
                <p>HTML</p>
                <p>对于HTML5的新型api及相关标准熟悉,目前正在了解HTML5标准下的移动端开发
                    对于 W3C标准有相应的了解,以及标签语义化使用等等。
                </p>
            </div>
            },
            {
            name:"CSS",
            content:
             <div key="3" className="popSize" >
                <p>CSS</p>
                <p>对于CSS/CSS3的熟练使用的程度,可以制作常用布局,对于flex布局有很大兴趣</p>
            </div>
            },
            {
            name:"React",
            content:
             <div key="4" className="popSize">
                <p>React</p>
                <p>React可以熟练使用，结合JSX语法糖进行使用，目前正在深入研究react全家桶</p>
            </div>
            },
            {
            name:"Redux",
            content:
             <div key="5" className="popSize">
                <p>Redux</p>
                <p>对于redux/react-redux的使用比较熟练,可以掌握常见数据流动，如Event-->Action-->Reducer-->Render-->Dom</p>
            </div>
            },
            {
            name:"Git",
            content:
             <div key="6" className="popSize">
                <p>Git</p>
                <p>可以熟练使用git进行团队代码协同管理,可以使用命令行及可视化两种方式进行操作</p>
            </div>
            },
            {
            name:"文档编写",
            content:
             <div key="7" className="popSize">
                <p>文档编写</p>
                <p>具备一定的文档编写能力,在职期间曾编写过项目需求文档、软件说明等文档</p>
            </div>
            },
            {
            name:"React-Native",
            content:
             <div key="8" className="popSize">
                <p>React-Native</p>
                <p>了解并配置环境搭建一个简便的react-native app</p>
            </div>
            },
            {
            name:"Es6",
            content:
             <div key="9" className="popSize">
                <p>Es6</p>
                <p>对于Es6新兴的Api有一定研究，目前项目中也有部分使用，正在拜读Es6标准入门</p>
            </div>
            },
            {
            name:"Babel",
            content: 
             <div key="9" className="popSize">
                <p>Babel</p>
                <p>掌握Babel的基本配置方式,可以对包括Es6在内的代码进行编译</p>
            </div>
            },
            {
            name:"Webpack",
            content:
             <div key="10" className="popSize">
                <p>Webpack</p>
                <p>掌握Webpack的基本配置方式,包括日程的dev.config及build.config进行配置</p>
            </div>
            },
            {
            name:"Angular1",
            content:
             <div key="11" className="popSize">
                <p>Angular1</p>
                <p>目前正在配合设计模式学习AngularJs</p>
            </div>
            },
            {
            name:"Jquery",
            content:
             <div key="12" className="popSize">
                <p>Jquery</p>
                <p>熟练掌握Jquery Api,可以编写常见的插件</p>
            </div>
            },
            {
            name:"Jquery",
            content:
             <div key="13" className="popSize">
                <p>BootStrap</p>
                <p>可以使用Bootstrap进行响应式设计的布局</p>
            </div>
            },
             {
            name:"MarkDown",
            content:
             <div key="13" className="popSize">
                <p>Node.js</p>
                <p>可以使用Node.js启动一个小型的服务,对Node.js有一定了解</p>
            </div>
            },
             {
            name:"Jquery",
            content:
             <div key="13" className="popSize">
                <p>Chrome调试器</p>
                <p>deBug使用Chrome调试器进行调试</p>
            </div>
            },
           ]
        }
        
    }
    render(){
        var arr = [];
        var self = this; 
         this.state.num.map(function(item,index){
            arr.push(
              
                <Popover content={item.content} title="掌握知识点" key={index}>
                    <Button style={{fontSize:32,margin:"0 20 20 0"}} type="primary">{item.name}</Button>
                </Popover>
               
            )
        })

         return(
            <Row type="flex" justify="center" align = "center" style = {{marginTop:40,height:"90%",minHeight:"80%"}}>
                
                <Col span = {18}>

                     <Row>
                        <Col span = {12}>
                            <h1 className="pageTitle">工作经历</h1>
                            <Timeline pending={<a href="#" style={{fontSize:26,color:"#ffc"}}>未完待续</a>}>
                                <Timeline.Item>

                                    <h2 style={{fontSize:30,color:"#ffc"}}><Icon type="pay-circle-o" />东北财经大学毕业 </h2>
                                    <h2 style={{fontSize:26,color:"#ffc"}}>时间:2015年毕业 </h2>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <h2 style={{fontSize:30,color:"#ffc"}}><Icon type="pay-circle-o" />中国建设银行 </h2>
                                    <h2 style={{fontSize:26,color:"#ffc"}}>时间:2014.01 — 2014.11实习</h2> 
                                    <h2 style={{fontSize:26,color:"#ffc"}}>完成中国建设银行沈阳和平支行的大堂副理工作</h2>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <h2 style={{fontSize:30,color:"#ffc"}}><Icon type="idcard" />盈嘉互联(北京)科技有限公司 </h2>
                                    <h2 style={{fontSize:26,color:"#ffc"}}>时间:2015.10 — 至今</h2>
                                    <h2 style={{fontSize:26,color:"#ffc"}}>任职于技术中心，参与公司的项目前端开发工作</h2>
                                </Timeline.Item>
                             
                            </Timeline>
                        </Col>

                        <Col span = {12}>
                            <h1 className="pageTitle" >掌握知识点</h1>
                            {arr}      
                         </Col>
                    </Row>

                </Col>

            </Row>
         )
    }
}
