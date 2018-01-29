import ChartFatherFactory from './chart.js'

class chartFactory extends ChartFatherFactory{
	// 态度比例
	createEmotionChart(dom,data){
		var option = {};
		option = {
		    tooltip: {
		        trigger: 'item',
		        formatter: "{a} <br/>{b}: {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        x: 'left',
		        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
		    },
		    series: [
		        {
		            name:'访问来源',
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
		            data:data
		        }
		    ]
		};
		this.createChart(dom,option);
	}

	// 具体评级对象
	createSpeEmotionChart(dom,data){
		var option = {
			title: {
		        text: '中国',
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
		            data: [100]
		        },
		        {
		            name: '赞成',
		            type: 'bar',
		            stack: "中国",
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
		            data: [32]
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
		                    fontSize:"12",
		                    position: 'top',
		                    formatter: "{a}"
		                },
		                emphasis:{
		                   fontSize:"17", 
		                }
		            },
		            data: [18]
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
		                    fontSize:"12",
		                    formatter: "{a}"
		                },
		                emphasis:{
		                   fontSize:"17", 
		                }
		            },
		            data: [50]
		        },
		    ]
		};
		this.createChart(dom,option);
	}

	// 态度趋势
	createTrendAttitudeChart(dom,data){
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
		        data: ['2017.6.16','2017.6.16','2017.6.16','2017.6.16','2017.6.16','2017.6.16','2017.6.16']
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
		            data:[120, 132, 101, 134, 90, 230, 210]
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
		            data:[220, 182, 191, 234, 290, 330, 310]
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
		            data:[150, 232, 201, 154, 190, 330, 410]
		        }
		    ]
		};
		this.createChart(dom,option);
	}

	// 热度趋势
	createTrendValueChart(dom,data){
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
		        data: ['2017.6.16','2017.6.16','2017.6.16','2017.6.16','2017.6.16','2017.6.16','2017.6.16']
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
		            data:[120, 132, 101, 134, 90, 230, 210]
		        }
		    ]
		};
		this.createChart(dom,option);
	}

	// 全局关键词
	createKeywordChart(dom,data){
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
		        data: data
		    }]
		};
		this.createChart(dom,option);
	}

	// 正面高频词
	createPoswordsChart(dom,data){
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
		        data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Sun'],
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
		            name:'直接访问',
		            type:'bar',
		            barWidth: '60%',
		            data:[200, 189, 173, 164, 100, 89, 40, 40]
		        }
		    ]
		};
		this.createChart(dom,option);
	}

	// 负面高频词
	createNegwordsChart(dom,data){
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
		        data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Sun'],
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
		            name:'直接访问',
		            type:'bar',
		            barWidth: '60%',
		            data:[200, 189, 173, 164, 100, 89, 40, 40]
		        }
		    ]
		};
		this.createChart(dom,option);
	}

	// 态度比例_搜索页面
	searchCreateEmotionChart(dom,data){
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
		            data: [100]
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
		            data: [32]
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
		            data: [18]
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
		            data: [50]
		        },
		    ]
		};
		this.createChart(dom,option);
	}
}

export default new chartFactory