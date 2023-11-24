let obj = {};

const handler = {
	get(obj, prop) {
		console.log(`Retrieving propery ${prop} from ${obj}`)
		return obj[prop];
	},
	set(obj, prop, value) {
		console.log(`Setting propery ${prop} from ${obj} to ${value}`)
		obj[prop] = value;
		return true;
	}
};

// let proxObj = new Proxy(obj, handler);
// 
// proxObj.rex = 4;
// console.log(proxObj.rex);
// 
// let div = new Proxy(div(), handler);
