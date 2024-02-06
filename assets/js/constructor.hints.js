// Instance the tour
const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (
    /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};
let device = getDeviceType();

let steps = [
  {
    backdrop: true,
    element: "[data-target=\"block1\"]",
    title: "Title of my step 1 7",
	reflex:true,
    content: "Content of my step",
    onNext: function (tour) {
    	if(!$('.constructor__taste-list').hasClass('visible')){
        	$('.constructor__taste-list').addClass('visible');
        }
		
    },
  },
  {
    backdrop: true,
    element: ".constructor__taste-item:nth-child(2)",//.constructor__list-container,
    title: "Title of my step 2",
	reflex:true,
    content: "Content of my step",
    onNext: function (tour) {
    	if($('.constructor__taste-list').hasClass('visible')){
        	$('.constructor__taste-list').removeClass('visible');
        }
		
    },
  },
    {
    backdrop: true,
    element: ".constructor__button--auto",
    title: "Title of my step 3",
	reflex:true,
    content: "Content of my step"
  }
];
steps[0]["title"] += " " + device;
if(device == "mobile"){
	
	steps[0]["placement"] = "bottom";
  	steps[1]["placement"] = "bottom";
  	steps[2]["placement"] = "top";
} else if( device == "tablet") {
  steps[2]["placement"] = "top";
}
var tour = new Tour({
    storage:false,
    delay: {
      show: 1200,
      hide:400
    },
    steps: steps,
  	template: `<div class='popover tour'>
  <div class='arrow'></div>
  <h3 class='popover-title'></h3>
  <div class='popover-content'></div>
  <div class='popover-navigation'>
    <button class='btn btn-default' data-role='next'>Вперед</button>
    <button class='btn btn-default' data-role='end'>Завершить</button>
  </div>
</div>`
});

// Initialize the tour
//tour.init();

// Start the tour
//tour.start();

$(document).on('click','[data-target="block1"]', () => {
  	
	//setTimeout(() => {tour.goTo(2);},2300);
});
