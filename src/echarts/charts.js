import ChartFatherFactory from './chart.js'

class chartFactory extends ChartFatherFactory{
	// 态度比例
	createEmotionChart(dom,data){
		let data1=[
            {value:data[0], name:'赞成'},
            {value:data[1], name:'中立'},
            {value:data[2], name:'反对'}
        ];
        console.log(data1);
		let option = {
			color:['#a0b9e5','#b0b0b0', '#d68592'],
		    tooltip: {
		        trigger: 'item',
		        formatter: "{a} <br/>{b}: {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        x: 'left',
		        data:['赞成','中立','反对']
		    },
		    series: [
		        {
		            type:'pie',
		            radius: ['50%', '70%'],
		            avoidLabelOverlap: false,
		            label: {
		                normal: {
		                    show: false,
		                    position: 'center'
		                },
		                emphasis: {
		                    show: true,
		                    textStyle: {
		                        fontSize: '30',
		                        fontWeight: 'bold'
		                    }
		                }
		            },
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            data:data1
		        }
		    ]
		};
		this.createChart(dom,option);
	}

	// 具体评级对象
	createSpeEmotionChart(dom,data){
		var option = {
			title: {
		        text: data.word,
		        color:"#626b7a",
		        textStyle:{
		            fontSize:21,
		            fontFamily:'宋体',
		            fontWeight:"500"
		        }
		    },
		    tooltip : {
	        trigger: 'item',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        },
		        textStyle:{
		          color:"#626b7a",
		          fontSize:13,
		        },
		        backgroundColor:"none",
		        formatter:"{c}",
		        position:  ['4%', '50%'],
		        enterable:true
		    },
		    grid: {
		        left: '10%',
		        right: '4%',
		        top:"90%",
		        containLabel: true
		    },
		    xAxis:  {
		        axisLine: {show:false},
		        axisTick: {show:false},
		        axisLabel: {show:false},
		        splitArea: {show:false},
		        splitLine: {show:false},
		        type: 'value'
		    },
		    yAxis: {
		        type: 'category',
		        axisLine: {show:false},
		        axisTick: {show:false},
		        axisLabel: {show:false},
		        splitArea: {show:false},
		        splitLine: {show:false},
		        data: ['中国']
		    },
		    color:['#a0b9e5','#b0b0b0', '#d68592'],
		    series: [
		        {
		            type: 'bar',
		            barWidth: 14,
		            barGap:"-100%",
		            itemStyle:{
		                normal: {
		                    color:"#fff",
		                    show: true,
		                    barBorderRadius: [30, 30, 30, 30],
		                    shadowColor: 'rgba(0, 0, 0, 0.3)',
		                    shadowOffsetY:5,
		                    shadowBlur: 30,
		                },
		                emphasis:{
		                }
		                
		            },
		            data: [data.pos+data.neg+data.neu]
		        },
		        {
		            name: '赞成',
		            type: 'bar',
		            stack: data.word,
		            barWidth: 14,
		            itemStyle:{
		                normal: {
		                    show: true,
		                    barBorderRadius: [190, 0, 0, 190],
		                },
		                emphasis:{
		                    color:'#a0b9e5',
		                    borderWidth:"5", 
		                    borderColor:'#a0b9e5',
		                }
		            },
		            label: {      
		                normal: {
		                    show: true,
		                    fontSize:"12",
		                    position: 'top',
		                    formatter: "{a}"
		                },
		                emphasis:{
		                   fontSize:"17", 
		                }
		            },
		            data: [data.pos]
		        },
		        {
		            name: '中立',
		            type: 'bar',
		            stack: data.word,
		            itemStyle:{
		                normal: {
		                    show: true,
		                },
		                emphasis:{
		                    color:'#b0b0b0',
		                    borderWidth:"5", 
		                    borderColor:'#b0b0b0',
		                }
		                
		            },
		            label: {
		                normal: {
		                    show: true,
		                    fontSize:"12",
		                    position: 'top',
		                    formatter: "{a}"
		                },
		                emphasis:{
		                   fontSize:"17", 
		                }
		            },
		            data: [data.neu]
		        },
		        {
		            name: '反对',
		            type: 'bar',
		            stack: data.word,
		            itemStyle:{
		                normal: {
		                    show: true,
		                    barBorderRadius: [0, 30, 30, 0],
		                },
		                emphasis:{
		                    color:'#d68592',
		                    borderWidth:"5", 
		                    borderColor:'#d68592',
		                }
		                
		            },
		            label: {
		                normal: {
		                    show: true,
		                    position: 'top',
		                    fontSize:"12",
		                    formatter: "{a}"
		                },
		                emphasis:{
		                   fontSize:"17", 
		                }
		            },
		            data: [data.neg]
		        },
		    ]
		};
		this.createChart(dom,option);
	}

	// 态度趋势
	createTrendAttitudeChart(dom,data){
		let date=[],pos=[],neu=[],neg=[];
		data.forEach((d)=>{
			date.push(d.date);
			pos.push(d.pos);
			neu.push(d.neu);
			neg.push(d.neg);
		})
		var option = {
		    tooltip: {
		        trigger: 'item'
		    },
		    color:['#a0b9e5','#b0b0b0', '#d68592'],
		    legend: {
		        data:['赞成','中立','反对'],
		        bottom:0
		    },
		    grid: {
		    	top:"8%",
		        left: '8%',
		        right: '10%',
		        bottom: '8%',
		        containLabel: true
		    },
	        xAxis: {
		        type: 'category',
		        name:"时间",
		        nameGap:15,
		    	nameTextStyle:{
					fontSize:20,
					color:"#626b7a"
		    	},
		        boundaryGap: false,
		        axisLine: {
		            show:true,
		            lineStyle:{
		                color:"#e8e8e8"
		            }
		        },
		        axisTick: {show:true},
		        axisLabel: {show:true},
		        splitArea: {show:false},
		        splitLine: {
		            show:true,
		            lineStyle:{
		                color:"#f5f5f5"
		            }
		        },
		        data: date
		    },
		    yAxis: {
		    	name:"态度占比",
		    	nameGap:15,
		    	nameTextStyle:{
					fontSize:20,
					color:"#626b7a"
		    	},
		    	axisLine: {
		            show:true,
		            lineStyle:{
		                color:"#e8e8e8"
		            }
		        },
		        splitLine: {
		            show:true,
		            lineStyle:{
		                color:"#f5f5f5"
		            }
		        },
		        type: 'value'
		    },
		    dataZoom: [
		        {
		            type: 'inside',
		            xAxisIndex: 0,
		            filterMode: 'empty'
		        },
		    ],
		    series: [
		        {
		            name:'赞成',
		            type:'line',
		            symbolSize: 12,
		      	    symbol: 'circle',
		            itemStyle:{
		                emphasis:{
		                   shadowColor: 'rgba(0, 0, 0, 0.5)',
		                    shadowBlur: 12  
		                }
		            },
		            lineStyle:{
		                normal:{
		                    width:3,
		                }
		            },
		            data:pos
		        },
		        {
		            name:'中立',
		            type:'line',
		            symbolSize: 12,
		      	    symbol: 'circle',
		            itemStyle:{
		                emphasis:{
		                   shadowColor: 'rgba(0, 0, 0, 0.5)',
		                    shadowBlur: 12  
		                }
		            },
		            lineStyle:{
		                normal:{
		                    width:3,
		                }
		            },
		            data:neu
		        },
		        {
		            name:'反对',
		            type:'line',
		            symbolSize: 12,
		      	    symbol: 'circle',
		            itemStyle:{
		                emphasis:{
		                   shadowColor: 'rgba(0, 0, 0, 0.5)',
		                    shadowBlur: 12  
		                }
		            },
		            lineStyle:{
		                normal:{
		                    width:3,
		                }
		            },
		            data:neg
		        }
		    ]
		};
		this.createChart(dom,option);
	}

	// 热度趋势
	createTrendValueChart(dom,data){
		let date=[],
			value=[],
			title=[],
			id=[];
		data.forEach((d)=>{
			date.push(d.date);
			value.push(d.value);
			title.push(d.title);
			id.push(d.id);
		})
		var option = {
		    tooltip: {
		        trigger: 'item'
		    },
		    color:['#d68592'],
		    grid: {
		    	top:"19%",
		        left: '8%',
		        right: '10%',
		        bottom: '8%',
		        containLabel: true
		    },
	        xAxis: {
		        type: 'category',
		        name:"时间",
		        nameGap:15,
		    	nameTextStyle:{
					fontSize:20,
					color:"#626b7a"
		    	},
		        boundaryGap: false,
		        axisLine: {
		            show:true,
		            lineStyle:{
		                color:"#e8e8e8"
		            }
		        },
		        axisTick: {show:true},
		        axisLabel: {show:true},
		        splitArea: {show:false},
		        splitLine: {
		            show:true,
		            lineStyle:{
		                color:"#f5f5f5"
		            }
		        },
		        data: date
		    },
		    yAxis: {
		    	name:"热度值",
		    	nameGap:15,
		    	nameTextStyle:{
					fontSize:20,
					color:"#626b7a"
		    	},
		    	axisLine: {
		            show:true,
		            lineStyle:{
		                color:"#e8e8e8"
		            }
		        },
		        splitLine: {
		            show:true,
		            lineStyle:{
		                color:"#f5f5f5"
		            }
		        },
		        type: 'value'
		    },
		    dataZoom: [
		        {
		            type: 'inside',
		            xAxisIndex: 0,
		            filterMode: 'empty'
		        },
		    ],
		    series: [
		        {
		            name:'赞成',
		            type:'line',
		            symbolSize: 12,
		      	    symbol: 'circle',
		            itemStyle:{
		                emphasis:{
		                   shadowColor: 'rgba(0, 0, 0, 0.5)',
		                    shadowBlur: 12  
		                }
		            },
		            lineStyle:{
		                normal:{
		                    width:3,
		                }
		            },
		            data:value
		        }
		    ]
		};
		this.createChart(dom,option);
	}

	// 全局关键词
	createKeywordChart(dom,data){
		let keywords = [];
		data.forEach((d)=>{
			let x = {};
			x.name = d.word;
			x.value = d.value;
			keywords.push(x);
		})
		var option = {
		    backgroundColor: '#F7F7F7',
		    series: [{
		        name: '搜索指数',
		        type: 'wordCloud',
		        size: ['9%', '99%'],
		        sizeRange: [12, 80],
		        textRotation: [0, 45, 90, -45],
		        rotationRange: [-45, 90],
		        shape: 'circle',
		        textPadding: 0,
		        autoSize: {
		            enable: true,
		            minSize: 6
		        },
		        textStyle: {
		            normal: {
		                color: function() {
		                    return 'rgb(' + [
		                        Math.round(Math.random() * 160),
		                        Math.round(Math.random() * 160),
		                        Math.round(Math.random() * 160)
		                    ].join(',') + ')';
		                }
		            },
		            emphasis: {
		                shadowBlur: 10,
		                shadowColor: '#333'
		            }
		        },
		        data: keywords
		    }]
		};
		this.createChart(dom,option);
	}

	// 正面高频词
	createPoswordsChart(dom,data){
		let word = [],
			value = [];

		data.forEach((d)=>{
			word.push(d.word);
			value.push(d.value);
		})
		var option = {
		    color: ['#d68592'],
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis: {
		        axisLine: {show:false},
		        axisTick: {show:false},
		        axisLabel: {show:true},
		        splitArea: {show:false},
		        splitLine: {show:false},
		        type : 'category',
		        data : word,
		        axisTick: {
		            alignWithLabel: true
		        }
		    },
		    yAxis: {
		        axisLine: {show:false},
		        axisTick: {show:false},
		        axisLabel: {show:false},
		        splitArea: {show:false},
		        splitLine: {show:false},
		        type : 'value'
		    },
		    series : [
		        {
		            name:'词频度',
		            type:'bar',
		            barWidth: '60%',
		            data:value
		        }
		    ]
		};
		this.createChart(dom,option);
	}

	// 负面高频词
	createNegwordsChart(dom,data){
		let word = [],
			value = [];

		data.forEach((d)=>{
			word.push(d.word);
			value.push(d.value);
		})
		var option = {
		    color: ['#a0b9e5'],
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis: {
		        axisLine: {show:false},
		        axisTick: {show:false},
		        axisLabel: {
		        	show:true,
		        	textStyle:{
		        		color:"#626b7a"
		        	}
		        },
		        splitArea: {show:false},
		        splitLine: {show:false},
		        type : 'category',
		        data : word,
		        axisTick: {
		            alignWithLabel: true
		        }
		    },
		    yAxis: {
		        axisLine: {show:false},
		        axisTick: {show:false},
		        axisLabel: {show:false},
		        splitArea: {show:false},
		        splitLine: {show:false},
		        type : 'value'
		    },
		    series : [
		        {
		            name:'词频度',
		            type:'bar',
		            barWidth: '60%',
		            data:value
		        }
		    ]
		};
		this.createChart(dom,option);
	}

	// 态度比例_搜索页面
	searchCreateEmotionChart(dom,data){
		// console.log(data["pos"]);
		var option = {
		    tooltip : {
	        trigger: 'item',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        },
		        textStyle:{
		          color:"#626b7a",
		          fontSize:21,
		        },
		        backgroundColor:"none",
		        formatter:"{c}",
		        position:  ['4%', '26%'],
		        enterable:true
		    },
		    grid: {
		        left: '10%',
		        right: '4%',
		        top:"10%",
		        containLabel: true
		    },
		    xAxis:  {
		        axisLine: {show:false},
		        axisTick: {show:false},
		        axisLabel: {show:false},
		        splitArea: {show:false},
		        splitLine: {show:false},
		        type: 'value'
		    },
		    yAxis: {
		        type: 'category',
		        axisLine: {show:false},
		        axisTick: {show:false},
		        axisLabel: {show:false},
		        splitArea: {show:false},
		        splitLine: {show:false},
		        data: ['中国']
		    },
		    color:['#a0b9e5','#b0b0b0', '#d68592'],
		    series: [
		        {
		            type: 'bar',
		            barWidth: 32,
		            barGap:"-100%",
		            itemStyle:{
		                normal: {
		                    color:"#fff",
		                    show: true,
		                    barBorderRadius: [30, 30, 30, 30],
		                    shadowColor: 'rgba(0, 0, 0, 0.3)',
		                    shadowOffsetY:5,
		                    shadowBlur: 30,
		                },
		                emphasis:{
		                }
		                
		            },
		            data: [1]
		        },
		        {
		            name: '赞成',
		            type: 'bar',
		            stack: "中国",
		            barWidth: 32,
		            itemStyle:{
		                normal: {
		                    show: true,
		                    barBorderRadius: [190, 0, 0, 190],
		                },
		                emphasis:{
		                    color:'#a0b9e5',
		                    borderWidth:"5", 
		                    borderColor:'#a0b9e5',
		                }
		            },
		            label: {      
		                normal: {
		                    show: true,
		                    fontSize:"16",
		                    position: 'top',
		                    formatter: "{a}"
		                },
		                emphasis:{
		                   fontSize:"20", 
		                }
		            },
		            data: [data["pos"]]
		        },
		        {
		            name: '中立',
		            type: 'bar',
		            stack: '中国',
		            itemStyle:{
		                normal: {
		                    show: true,
		                },
		                emphasis:{
		                    color:'#b0b0b0',
		                    borderWidth:"5", 
		                    borderColor:'#b0b0b0',
		                }
		                
		            },
		            label: {
		                normal: {
		                    show: true,
		                    fontSize:"16",
		                    position: 'top',
		                    formatter: "{a}"
		                },
		                emphasis:{
		                   fontSize:"20", 
		                }
		            },
		            data:[data["neu"]]
		        },
		        {
		            name: '反对',
		            type: 'bar',
		            stack: '中国',
		            itemStyle:{
		                normal: {
		                    show: true,
		                    barBorderRadius: [0, 30, 30, 0],
		                },
		                emphasis:{
		                    color:'#d68592',
		                    borderWidth:"5", 
		                    borderColor:'#d68592',
		                }
		                
		            },
		            label: {
		                normal: {
		                    show: true,
		                    position: 'top',
		                    fontSize:"16",
		                    formatter: "{a}"
		                },
		                emphasis:{
		                   fontSize:"20", 
		                }
		            },
		            data: [data["neg"]]
		        },
		    ]
		};
		this.createChart(dom,option);
	}

	// 图谱
	keywordGraph(dom,data){
		var option = {
		    animationDurationUpdate: 1500,
		    animationEasingUpdate: 'quinticInOut',
		    series : [
		        {
		            type: 'graph',
		            layout: 'none',
		            roam: true,
		            label: {
		                normal: {
		                    show: true
		                }
		            },
		            edgeSymbol: ['circle'],
		            edgeSymbolSize: [4, 10],
		            edgeLabel: {
		                normal: {
		                    textStyle: {
		                        fontSize: 20
		                    }
		                }
		            },
		            data: [{
		                name: data.keywords[0].word,
		                x: 250,
		                y: 250,
		                symbolSize: [70,70],
		                itemStyle:{
			            	color:"#aca0c4",
			            },
		                color:"#aca0c4"
		            }, {
		                name: data.keywords[1].word,
		                x: 450,
		                y: 250,
		                symbolSize: [100,100],
		                itemStyle:{
			            	color:"#bbcdec",
			            },
		                color:"#bbcdec"
		            }, {
		                name: data.keywords[2].word,
		                x: 350,
		                y: 150,
		                symbolSize: [70,70],
		                itemStyle:{
			            	color:"#a0b9e5",
			            },
		                color:"#a0b9e5"
		            }, {
		                name: data.keywords[3].word,
		                x: 350,
		                y: 350,
		                symbolSize: [70,70],
		                itemStyle:{
			            	color:"#7999d2",
			            },
		                color:"#7999d2"
		            }, {
		                name: data.title,
		                x: 350,
		                y: 250,
		                symbolSize: [146,146],
		                itemStyle:{
			            	color:"#a0b9e5",
			            },
		                color:"#a0b9e5"
		            }],
		            // links: [],
		            links: [{
		                source: data.keywords[0].word,
		                target: data.title
		            }, {
		                source: data.keywords[1].word,
		                target: data.title
		            }, {
		                source: data.keywords[2].word,
		                target: data.title
		            }, {
		                source: data.keywords[3].word,
		                target: data.title
		            }],
		            lineStyle: {
		                normal: {
		                    opacity: 0.9,
		                    width: 2,
		                    curveness: 0
		                }
		            }
		        }
		    ]
		};
		this.createChart(dom,option);
	}
}

export default new chartFactory