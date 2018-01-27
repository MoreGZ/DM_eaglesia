import echarts from 'echarts';
import echartsWordcloud from 'echarts-wordcloud';

class ChartFatherFactory {
	createChart(dom,option){
		var chart = echarts.init(dom);
		chart.setOption(option);
	}
}

export default ChartFatherFactory
