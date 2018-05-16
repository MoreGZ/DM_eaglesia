import Ajax from './ajax.js'

class Api extends Ajax{

	// 事件页面
	async getEventData(parmas = {}){
		try{
			let result = await this.axios("GET","/detail/event",parmas);

			return result;
		}catch(err){
			throw(err);
		}
		
	}
	
	// 首页
	async getHomeData(parmas = {}){
		try{
			let result = await this.axios("GET","/",parmas);
			return result;
		}catch(err){
			throw(err);
		}
	}
	
	// 获取更多新闻
	async getMoreNews(parmas = {}){
		try{
			let result = await this.axios("POST","/detail/more_news",parmas);
			return result;
		}catch(err){
			throw(err);
		}
	}


	// 获取更多评论
	async getMoreComments(parmas = {}){
		try{
			let result = await this.axios("POST","/detail/more_comments",parmas);
			return result;
		}catch(err){
			throw(err);
		}
	}

	
	// 搜索事件结果
	async getResearchData(parmas = {}){
		try{
			let result = await this.axios("GET","/results/kw/rice",parmas);
			return result;
		}catch(err){
			throw(err);
		}
	}


	// 发现页面-任店事件新闻
	async getFoundHotevent(parmas = {}){
		try{
			let result = await this.axios("POST","/discover",parmas);
			return result;
		}catch(err){
			throw(err);
		}
	}
	

	// 发现更多热点事件
	async getMoreHotevent(parmas = {}){
		try{
			let result = await this.axios("POST","/discover/more",parmas);
			return result;
		}catch(err){
			throw(err);
		}
	}


	// 发现页面-年度报表
	async getYearReport(parmas = {}){
		try{
			let result = await this.axios("POST","/discover/year_report",parmas);
			return result;
		}catch(err){
			throw(err);
		}
	}


	// 发现页面-月度报表
	async getMonthReport(parmas = {}){
		try{
			let result = await this.axios("POST","/discover/month_report",parmas);
			return result;
		}catch(err){
			throw(err);
		}
	}

	// 发现页面-热门新闻
	async loadHotNews(parmas = {}){
		try{
			let result = await this.axios("POST","/discover/field",parmas);
			return result;
		}catch(err){
			throw(err);
		}
	}

	// 热点新闻页面——态度走向
	async loadNewsEmotion(parmas ={}){
		try{
			let result = await this.axios("POST","/discover/media",parmas);
			return result;
		}catch(err){
			throw(err);
		}
	}
	
	// 热点新闻页面——态度走向新闻
	async loadNewsEmotionNews(parmas ={}){
		try{
			let result = await this.axios("POST","/discover/attitude",parmas);
			return result;
		}catch(err){
			throw(err);
		}
	}
}

export default new Api()