let Vheader = {

	props: {
		cartitemscount: {
			type: Number,
			default() {
				return 0
			}
		},
	},

	template: `<header class="navbar navbar-expand-md navbar-dark bg-primary text-light">
			<div class="navbar-header">
				<a href="#" class="navbar-brand mr-5">
				<strong class="text-warning">BestShop</strong>
				</a>
				<button class="navbar-toggler" data-toggle="collapse" data-target="#header">
					<span class="navbar-toggler-icon"></span>
				</button>
			</div>
			<div class="navbar-collapse collapse" id="header">
				<ul class="navbar-nav bd-navbar-nav">
					<li class="nav-item">
						<a class="nav-link text-warning rounded-pill" href="#" >
							<b>Home</b>
						</a>
					</li>
					<li class="navbar-item">
						<router-link :to="{name: 'catalog'}">
							<a href="#" class="nav-link active text-warning bg-info rounded-pill border border-info">
								<b>Shop</b>
							</a>
						</router-link>	
					</li>
					<li class="nav-item">
						<a class="nav-link text-warning rounded-pill" href="#" >
							<b>About Us</b>
						</a>
					</li>
				</ul>
			</div>
			<ul class="nav navbar-nav nav-flex-icons">
				<li class="nav-item">
					<router-link :to="{name: 'cart'}">
						<a href="#" class="nav-link ">
							<i class="fa fa-shopping-cart">	
								<span class="badge bg-danger text-white z-depth-1 mr-1">
									{{cartitemscount}}
								</span>
							</i>
							<span class="d-sm-inline-block text-warning">
								<strong>Cart</strong>
							</span>
						</a>
					</router-link>		
				</li>
				<li class="nav-item">
					<a href="#" class="nav-link">
						<i class="fa fa-user"></i>
						<span class="d-sm-inline-block text-warning">
						<strong>User.name</strong>
					</span>
					</a>
				</li>
			</ul>
		</header>`,

 	data: function () {
		return {

    	}
	},

	methods: {

	}
};



let Vnavbar = {

	props: {
  		
 	},

	template: `<div class="navbar navbar-collapse float-left sticky-top mr-4 bg-dark" >
				<ul class="nav navbar-nav side-nav mt-2 text-warning">
					<li class="nav-item mt-2">
						<strong>
							Sort Products:
						</strong>
					</li>
					<li class="nav-item mt-2" @click="clearSort()">
						<strong>
							All
						</strong>	
					</li>
					<li class="nav-item mt-1" @click="sortLaptops()">
						<strong>
							Laptops
						</strong>
					</li>
					<li class="nav-item mt-1" @click="sortTablets()">
						<strong>
							Tablets
						</strong>
					</li>
					<li class="nav-item mt-1" @click="sortCamera()">
						<strong>
							Camera
						</strong>
					</li>
					<li class="nav-item mt-2">
						<div class="range-slider" 
						style="width: 200px; position: relative;">
							<input 
								type="range" 
								min="0" 
								:max = "maxProductPrice+100" 
								step="10"
								v-model = "minPrice"
								@change="setRangeSlider()"/>
							<br>	
							<input 
								type="range" 
								min="0" 
								:max = "maxProductPrice+100" 
								step="10"
								v-model = "maxPrice"
								@change="setRangeSlider()"/>
						</div>
						<div class="slider-value">
							<p>Min: {{minPrice}}</p>
							<p>Max: {{maxPrice}}</p>
						</div>		
					</li>
				</ul>
			</div>`,	

	data: function () {
    	return {
    		minPrice: 0,
    		maxPrice: 100000

    	}
  	},

  	computed: {
	    maxProductPrice: function() {
    		return store.getters.maxProductPrice;
    	}
	},

	methods: {

		clearSort() {
			store.commit('clearSort');
		},

		sortLaptops() {
			store.commit('sortProductsByName', 'laptop');
		},

		sortTablets() {
			store.commit('sortProductsByName', 'tablet');
		},

		sortCamera() {
			store.commit('sortProductsByName', 'camera');
		},

		setRangeSlider() {
	        if (this.minPrice > this.maxPrice) {
	        	let tmp = this.maxPrice;
	        	this.maxPrice = this.minPrice;
	        	this.minPrice = tmp;
	        }
	        this.sortByPrice(this.minPrice, this.maxPrice);
	        console.log(this.minPrice + " " + this.maxPrice);
	        
    	},

    	sortByPrice(minPrice, maxPrice) {
        	store.commit('sortByPrice', {'minPrice' : minPrice, 'maxPrice': maxPrice});
        }
 	}
};

let Vfooter = {

	props: {
  	
 	},

	template: `<footer class="pt-3">
					<div class="container-fluid bg-primary text-warning w-100">
						<div class="row">
							<div class="col-md-2">
							</div>
							<div class="col-md-3 col-sm-6">
								<div class="footer-pad mt-2">
									<h4>Contacts</h4>
									<ul class="list-unstyled">
										<li>
											<a href="#footer" class="text-warning">
												<strong>Payment Center</strong>
											</a>
										</li>
										<li>
											<a href="#footer" class="text-warning">
												<strong>Contact Support</strong>
											</a>
										</li>
										<li>
											<a href="#footer" class="text-warning">
												<strong>News and Updates</strong>
											</a>
										</li>
										<li>
											<a href="#footer" class="text-warning">
												<strong>Forum</strong>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div class="col-md-3 col-sm-6">
								<div class="footer-pad mt-2">
									<h4>FAQs</h4>
									<ul class="list-unstyled">
										<li>
											<a href="#footer" class="text-warning">
												<strong>Website Tutorial</strong>
											</a>
										</li>
										<li>
											<a href="#footer" class="text-warning">
												<strong>Accessibility</strong>
											</a>
										</li>
										<li>
											<a href="#footer" class="text-warning">
												<strong>Privacy Policy</strong>
											</a>
										</li>
										<li>
											<a href="#footer" class="text-warning">
												<strong>FAQ</strong>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div class="col-md-3 mt-2">
								<h4>Follow Us</h4>
								<ul class="social-network social-circle" style="list-style: none; display: inline;  margin-left: 0;">
									<li>
										<a href="#footer" class="icoFacebook text-warning" title="Facebook">
											<i class="fa fa-facebook"></i>
											<strong>Facebook</strong>
										</a>
									</li>
									<li>
										<a href="#footer" class="icoLinkedin text-warning" title="Linkedin">
											<i class="fa fa-linkedin"></i>
											<strong>Linkedin</strong>
										</a>
									</li>
									<li>
										<a href="#footer" class="icoTelegram text-warning" title="Telegram">
											<i class="fa fa-telegram"></i>
											<strong>Telegram</strong>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12 copy">
								<p class="text-center">&copy; Copyright 2020 - Created by Andriy Lianh</p>
							</div>
						</div>
					</div>
			</footer>`,

	data: function () {
    	return {

    	}
  	},
	methods: {

 	}
};

let Vproduct = {

	props: {
  		productdata: {
  			type: Object,
  			default() {
  				return{}
  			}
  		},
 	},

	template: ` <div class="card text-white bg-danger" style="padding: 10px; margin-bottom: 16px;">
					<img class="card-img" :src="'images/' + productdata.images[0]" alt="" style="width: 375px; height: 260px;">
					<div class="card-body">
						<h5 class="card-title"><b>{{productdata.name}}</b> <br> <br></h5>
						<p class="card-text">{{'Article: ' + productdata.article}}</p>
					</div>
					<div class="card-footer">
						<p class="text-warning price" style="font-size: 25px;"><b>{{productdata.price + ' UAH'}}</b></p>
						<router-link :to="{name: 'productpage', params: {productdata: productdata}}">
							<a class="btn btn-primary btn-lg btn-block text-white"><b>Details</b></a>
						</router-link>
					</div>
				</div>`,

	data: function () {
    	return {

    	}
  	},
	methods: {

 	}
};

let VcartItem = {

	props: {
  		itemdata: {
  			type: Object,
  			default() {
  				return{}
  			}
  		}
 	},

	template: ` 
			<div class="row bg-danger mt-3 mb-3" style="box-shadow: 0 0 8px 0 #e0e0e0;">
				<div class="col-3 mt-3 mb-3">
					<img :src="'images/' + itemdata.images[0]" alt="" class="w-100">
				</div>
				<div class="col-3 text-warning"
					 style="
					    display: flex; 
					    flex-wrap: wrap; 
					    flex-direction: column;
					    justify-content:space-around;
					    align-items: center;">

					<p class="text-white" style="font-size: 20px;">
						<b>{{itemdata.name}}</b>
					</p>
					<strong>
						{{'Article: ' + itemdata.article}}
					</strong>
					<strong style="font-size: 25px;">
						{{itemdata.price + ' UAH'}}
					</strong>
				</div>
				<div class="col-3"
					 style="
					    display: flex; 
					    flex-wrap: wrap; 
					    flex-direction: row;
					    justify-content:space-around;
					    align-items: center;">
					<button class="button btn-primary" @click="substractCount()">
						-
					</button>
					<strong class="text-white">
						{{itemdata.cartCount}}
					</strong>
					<button class="button btn-primary" @click="addCount()">
						+
					</button>
				</div>
				<div class="col-3" 
					 style="
					    display: flex; 
					    flex-wrap: wrap; 
					    justify-content:space-around;
					    align-items: center;">
					<button class="button btn-primary btn-lg" @click="deleteItem(itemdata.article)">
						remove
					</button>
				</div>
			</div>`,

	data: function () {
    	return {

    	}
  	},
	methods: {
		addCount() {
			this.$emit('additemcount');
		},

		substractCount() {
			this.$emit('subtractitemcount');
		},

		deleteItem() {
			this.$emit('deletecartitem');
		}

 	}

};

let VproductPage = {

	props: {
		productdata: {
  			type: Object,
  			default() {
  				return{}
  			}
  		}
 	},

	template: ` <div class="catalog">
					<v-header :cartitemscount="cartItemsCount"></v-header>
					<div class="container-fluid" style="bottom: 0;">
	        			<div class="row">
	            			<div class="col-4 mt-3">
	                    		<div id="carousel" class="carousel slide" data-ride="carousel">
				                    <div class="carousel-inner" role="listbox">
				                        <div class="carousel-item active">
				                            <img class="d-block img-fluid" 
				                            :src="'images/' + productdata.images[1]" alt="Slide">
				                        </div> 
				                        <div class="carousel-item"
				                        v-for = "image in productdata.images">
				                            <img class="d-block img-fluid" alt="Slide" :src="'images/' + image">    
				                        </div>
				                    </div>
	        
				                    <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
				                        <span class="carousel-control-prev-icon bg-danger" aria-hidden="true"></span>
				                        <span class="sr-only">prev</span>
				                    </a>
				                    
				                    <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
				                        <span class="carousel-control-next-icon bg-danger" aria-hidden="true"></span>
				                        <span class="sr-only">next</span>
				                    </a>
	        
	                			</div>
	            			</div>
	            			<div class="col-8 mt-3">
								<div class="text-primary" style="font-size: 30px;">
									<strong>
										{{'Name: ' + productdata.name}}
									</strong>
									<br>
									<strong>
										{{'Article: ' + productdata.article}}
									</strong>
									<br>
									<strong class="text-warning">
										{{'Price: ' + productdata.price + ' UAH'}}
									</strong>
									<br>
									<button @click="addCartItem(productdata)" class="button btn-primary">
										Add to cart
									</button>
								</div>
	            			</div>
	        			</div>
	        			<div class="text-primary mt-3">
	        				<h1>Description</h1>
	        				<br>
							<strong>
								{{productdata.description}}
							</strong>
	        			</div>
    				</div>
					<v-footer style="position: absolute;
	    				bottom: 0;
	    				right: 0;
	    			    left: 0;"></v-footer>
				</div>	`,

	data: function () {
    	return {

    	}
  	},

	components: {
		'v-header':  Vheader,             
    	'v-footer':  Vfooter,
	    'v-product': Vproduct
	  },

	computed: {
	    products: function() {
	    	return store.getters.products;
	    },
	    
	    cartItemsCount: function() {
    		return store.getters.cartItemsCount;
    	}
	},

	methods: {
		addCartItem (cartItem) {
    		store.commit('addCartItem', cartItem);
    	},
 	}
};

let Vcatalog = {

	props: {

 	},

	template: ` <div class="catalog">
					<v-header :cartitemscount="cartItemsCount"></v-header>
					<v-navbar></v-navbar>
					<div class="container-fluid">
						<div class="row mt-3">
							{{startWork()}}
							<div class="product-catalog"
								style="display: flex;
									flex-wrap: wrap;
									justify-content:space-around;
								    align-items: center;">
								<v-product
								v-for="product in products"
								:productdata="product"
								:key="product.article" >
								</v-product>
							</div>
						</div>
					</div>
					<v-footer></v-footer>
				</div>	`,

	data: function () {
    	return {
    		firstLoad: false
    	}
  	},

	components: {
		'v-header':  Vheader,             
    	'v-footer':  Vfooter,
	    'v-product': Vproduct,
	    'v-navbar': Vnavbar
	  },

	computed: {
	    products: function() {
	    	return store.getters.products;
	    },
	    
	    cartItemsCount: function() {
    		return store.getters.cartItemsCount;
    	}
	},

	methods: {
		startWork() {
			if(!this.firstLoad) {
				this.firstLoad = true;
				store.commit('clearSort');
			}
		}
 	}
};

let Vcart = {

	props: {
  		
 	},

 	components: {   
 	'v-header':  Vheader,             
    'v-footer':  Vfooter,        
    'v-cart-item': VcartItem,
  },

	template: ` <div class="cart">
					<v-header :cartitemscount="cartItemsCount"></v-header>
					<div class="container-fluid">
						<div v-if="!cartItemsCount" class="text-danger">
							<strong>There are no products in cart</strong>
						</div>
						<v-cart-item v-for = "(item, index) in cartItems"
									:itemdata = "item"
									:key = "item.article"
									@additemcount = "addItemCount(index)"
									@subtractitemcount = "subtractItemCount(index)"
									@deletecartitem = "deleteCartItem(index)">
						</v-cart-item>
					</div>
						<div v-show="cartItemsCount" class="container-fluid">
							<div class="row bg-danger text-white">
								<div class="col-4 mt-3 mb-3">
								<strong>
									Price of all your products: 
								</strong> 
							</div>
							<div class="col-4 mt-3 mb-3">
								<strong>
									{{fullPrice + ' UAH'}}
								</strong>
							</div>
							<div class="col-2 mt-1" @click="buy(fullPrice)">
								<button class="button btn-primary btn-lg btn-block">
									Buy
								</button>
							</div>	
						</div>
					</div>
					<v-footer :style="styleObject"></v-footer>
				</div>`,

	data: function () {
    	return {

    	}
  	},

  	computed: {
	    cartItems: function() {
	      return store.getters.cartItems;
	    },

	    cartItemsCount: function() {
    		return store.getters.cartItemsCount;
    	},

	    fullPrice: function() {
	      return store.getters.cartItemsPrice;
	    },

	    styleObject: function() {
	    	if(!this.cartItemsCount)	{	
    			return {
	    			'position': 'absolute',
	    			'bottom': '0',
	    			'right': '0',
	    			'left': '0'
    			}
	    	}
	    }

	    
	},

	methods: {

		addItemCount (itemIndex) {
    		store.commit('addItemCount', itemIndex);
    	},

    	subtractItemCount (itemIndex) {
    		store.commit('subtractItemCount', itemIndex);
    	},

    	deleteCartItem (itemArticle) {
    		store.commit('deleteCartItem', itemArticle);
    	},

    	buy(fullPrice) {
    		if (fullPrice !=0) {
    			alert('You succesfully bought products on sum ' + fullPrice + ' UAH');
    			store.commit('clearCart');
    		} else {
        		alert('You must add something in your cart!');
    		}
    	}
 	}
};
