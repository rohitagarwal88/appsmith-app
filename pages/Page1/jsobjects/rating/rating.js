export default {
	myVar1: [],
	myVar2: {},
	mergeObj: {},
	myFun1: () => {
		const svg= `<svg class="rating-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <circle cx="256" cy="256" r="256" fill="#ffd93b"></circle>
          <path d="M512 256c0 141.44-114.64 256-256 256-80.48 0-152.32-37.12-199.28-95.28 43.92 35.52 99.84 56.72 160.72 56.72 141.36 0 256-114.56 256-256 0-60.88-21.2-116.8-56.72-160.72C474.8 103.68 512 175.52 512 256z" fill="#f4c534"></path>
          <ellipse transform="scale(-1) rotate(31.21 715.433 -595.455)" cx="166.318" cy="199.829" rx="56.146" ry="56.13" fill="#fff"></ellipse>
          <ellipse transform="rotate(-148.804 180.87 175.82)" cx="180.871" cy="175.822" rx="28.048" ry="28.08" fill="#3e4347"></ellipse>
          <ellipse transform="rotate(-113.778 194.434 165.995)" cx="194.433" cy="165.993" rx="8.016" ry="5.296" fill="#5a5f63"></ellipse>
          <ellipse transform="scale(-1) rotate(31.21 715.397 -1237.664)" cx="345.695" cy="199.819" rx="56.146" ry="56.13" fill="#fff"></ellipse>
          <ellipse transform="rotate(-148.804 360.25 175.837)" cx="360.252" cy="175.84" rx="28.048" ry="28.08" fill="#3e4347"></ellipse>
          <ellipse transform="scale(-1) rotate(66.227 254.508 -573.138)" cx="373.794" cy="165.987" rx="8.016" ry="5.296" fill="#5a5f63"></ellipse>
          <path d="M370.56 344.4c0 7.696-6.224 13.92-13.92 13.92H155.36c-7.616 0-13.92-6.224-13.92-13.92s6.304-13.92 13.92-13.92h201.296c7.696.016 13.904 6.224 13.904 13.92z" fill="#3e4347"></path>
        </svg>`
		
	},
	myFun2: async () => {
		//use a
		Rating1.iconSVG = 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-link/sta-je-link.jpg';
		console.log(Rating1)
	},
	tabChange: (rating2) => {
		// console.log(rating2)
		// console.log(`Tab ${rating2 + 1}`);
		let a = (isNaN(rating2)  ? 'Tab 1' : `Tab ${rating2 + 1}`);
		storeValue("ratingValue", a)
	},
	clickNext: (tabName, feedback) => {
		let feedbackObj =  {
    "Listens attentively ": 5,
    "Provides essential information": 5,
    "Communicates clearly": 5,
    "Inspires trust": 5,
    "Motivates others": 5,
    "Provides direction": 5,
    "Encourages innovation": 5,
    "Creates a postive environment": 5,
    "Remains available": 5,
    "Adopts a participative approach": 5,
    "Encourages development": 5,
    "Define objectives & priorities ": 5,
    "Plan tasks": 5,
    "Demonstrates flexibility": 5,
    "Delegates efficiently": 5,
    "What I am doing well": 5,
    "What should I improve": 5,
    "Any other comments": 5,
  }
		//let mergeObj = feedbackObj
		storeValue('ratingValue', 'Tab 1')
			//let	mergeObj = {};
					this.mergeObj = {...appsmith.store.feedback, ...feedback}
		console.log("mergeObj", this.mergeObj)
		storeValue('feedback', this.mergeObj);
		storeValue('layoutTab', tabName);
		console.log('layoutTab', appsmith.store.layoutTab)
		console.log(appsmith.store.feedback)
	},
	submitFeedback: (tabName, feedback) => {
		this.mergeObj = {...appsmith.store.feedback, ...feedback}
		storeValue('feedback', this.mergeObj);
		storeValue('layoutTab', tabName);
		addFeedback.run(appsmith.store.feedback)
		//.then(() => {...}) // run after the query is successful
    //.catch(() => {...}) // run if the query encounters any errors
	},
	textChange: (text) => {
		let len = text.length ? text.length : 0;
		//console.log("len", len, text);
		if (len < 10) {
			storeValue('ratingValue', 'Tab 2');
		}
		else if (len > 10 && len < 30){
			storeValue('ratingValue', 'Tab 3');
		}
		else if (len > 30 && len < 50){
			storeValue('ratingValue', 'Tab 4');
		}
		else if (len > 50 && len < 80){
			storeValue('ratingValue', 'Tab 5');
		}
		else if (len > 80){
			storeValue('ratingValue', 'Tab 6');
		}
	},
}