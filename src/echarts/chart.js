import echarts from 'echarts';

class ChartFatherFactory {
	createChart(dom,option){
		var chart = echarts.init(dom);
		console.log(option);
		chart.setOption(option);
	}
}

export default ChartFatherFactory
