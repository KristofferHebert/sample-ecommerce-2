(function (window, factory) {
'use strict';
var App = {};

App.m = { product : [
{"brand":"Zella","formatted_regular_price":"$68.00","image_url":"17/_8884657","name":"Zella 'Run' Stripe Half Zip Pullover","style_id":"3552410"},
{"brand":"Hinge","formatted_regular_price":"$26.00","image_url":"7/_8904187","name":"Hinge® Jersey Tank","style_id":"3223974"},
{"brand":"Trouve","formatted_regular_price":"$68.00","image_url":"7/_8547507","name":"Trouvé Side Slit Tunic Sweater","style_id":"3530925"},
{"brand":"Halogen®","formatted_regular_price":"$46.00","image_url":"18/_8592178","name":"Halogen® Three Quarter Sleeve Cardigan (Regular & Petite)","style_id":"3320328"},
{"brand":"Zella","formatted_regular_price":"$58.00","image_url":"4/_8889484","name":"Zella 'All Shirred Up' Pullover","style_id":"3460660"},
{"brand":"Zella","formatted_regular_price":"$58.00","image_url":"14/_8680834","name":"Zella 'Easy' Sweatshirt","style_id":"3493124"},
{"brand":"Hinge","formatted_regular_price":"$26.00","image_url":"7/_8904187","name":"Hinge® Jersey Tank","style_id":"3223974"},
{"brand":"Trouve","formatted_regular_price":"$38.00","image_url":"7/_8803147","name":"Trouvé 'Luxe' Tee","style_id":"3530951"},
{"brand":"Stem","formatted_regular_price":"$38.00","image_url":"2/_8736822","name":"Stem Seamed Dolman Sleeve Tee","style_id":"3530224"},
{"brand":"Zella","formatted_regular_price":"$52.00","image_url":"13/_5917973","name":"Zella 'Live In' Leggings","style_id":"3035710"},
{"brand":"Pleione","formatted_regular_price":"$58.00","image_url":"15/_8164075","name":"Pleione Mixed Media Roll Sleeve Top (Regular & Petite)","style_id":"3438286"},
{"brand":"Paige Denim","formatted_regular_price":"$158.00","image_url":"10/_7163970","name":"Paige Denim 'Skyline 12' Skinny Stretch Jeans (Twilight)","style_id":"3128824"}
]};

App.v = {
  render : function(array, containerID, page){
    console.log(array);
    var container = document.getElementById(containerID);
    var all = '{{#product}} <div class="product column left"> <a href="index.html?q={{style_id}}"> <img src="http://g.nordstromimage.com/imagegallery/store/product/medium/{{image_url}}.jpg"></a> <div class="productMeta"> <p> {{formatted_regular_price}}<br /> {{name}}<br /> {{brand}} </p> </div> </div></div> </div>{{/product}}';
    var single = '{{#product}} <section id="productLargeImageContainer" class="left column"><img src="http://g.nordstromimage.com/imagegallery/store/product/large/{{image_url}}.jpg"></section><section id="productLargeImageContainer" class="left column"><div class="productMeta"> <p> {{formatted_regular_price}}<br /> {{name}}<br /> {{brand}}<br /> {{style_id}}</p><p><a href="#" class="button">Add to cart</a></p> </div> </section>{{/product}}';
    var result;
    if(page){
    	result = Mustache.render(single, array);
    } else {
    	result = Mustache.render(all, array);
		}
		container.innerHTML = result;
	}
};

App.c = {
	search : function(obj,query){
	  for (var i = 0; i < obj.product.length; i++) {
	    if (obj.product[i].style_id == query) {
	        return { product: obj.product[i]};
	    }
	  }
},
	getUrlParam : function(value){
  	var results = new RegExp('[\\?&]' + value + '=([^&#]*)').exec(window.location.href);
	    if (results === null){
	      return null;
	    }
	    else{
	      return results[1] || 0;
	    }
  }
};
App.init = function(id){
  var param = App.c.getUrlParam(id);
  if(param){
  	App.m = App.c.search(App.m, param);
 		App.v.render(App.m, 'main-content', true);
  } else {
  	App.v.render(App.m, 'main-content');
	}
}

window.App = App;

})(window)