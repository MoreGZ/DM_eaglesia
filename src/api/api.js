import Ajax from './ajax.js'

class Api extends Ajax{
	async getEventData(parmas = {}){
		try{
			let result = await this.axios("GET","/event",parmas);
			return result;
		}catch(err){
			throw(err);
		}
		
	}
}

export default new Api()