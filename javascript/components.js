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
						<a href="#" class="nav-link active text-warning bg-info rounded-pill border border-info">
							<b>Shop</b>
						</a>
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
					<a href="#" class="nav-link ">
						<i class="fa fa-shopping-cart">
							<sup>
								<span class="badge bg-danger text-white z-depth-1 mr-1">
									{{cartitemscount}}
								</span>
							</sup>
						</i>
						<span class="d-sm-inline-block text-warning">
							<strong>Cart</strong>
						</span>
					</a>
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

let Vnavbar = {

	props: {
  		
 	},

	template: `<div class="navbar navbar-collapse float-left sticky-top mr-4 bg-dark" >
				<ul class="nav navbar-nav side-nav mt-2 text-warning">
					<li class="nav-item">
						
						<strong>click</strong>
						
					</li>
					<li class="nav-item">
							<strong>Contact Support</strong>
					</li>
					<li class="nav-item">
							<strong>News and Updates</strong>
					</li>
					<li class="nav-item">
							<strong>Forum</strong>
					</li>
				</ul>
			</div>`,

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
						<a class="btn btn-primary btn-lg btn-block" href="#" @click="setCurrentProduct(productdata.article)"><b>Details</b></a>
					</div>
				</div>`,

	data: function () {
    	return {

    	}
  	},
	methods: {
		setCurrentProduct(productArticle) {
	      store.commit('setCurrentProduct', productArticle);
	      console.log(productArticle);
	    },
 	}
};

let VcartItem = {

	props: {
  		itemdata: {
  			type: Object,
  			default() {
  				return{}
  			}
  		},
 	},

	template: ` 
			<div class="row bg-danger mt-3 mb-3" style="box-shadow: 0 0 8px 0 #e0e0e0;">
				<div class="col-3 mt-3 mb-3">
					<img :src="'images/' + itemdata.images[0]" alt="" class="w-100">
					{{setItemCount()}}
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
					<button class="button btn-primary">
						-
					</button>
					<strong class="text-white">
						{{itemdata.count}}
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
		setItemCount() {
			this.$set(this.itemdata, 'count', 1);
		},

		addCount() {
			this.$set(this.itemdata, 'count', this.itemdata.count++);
		},

		deleteItem() {
			this.$emit('deletecartitem');
		}

 	}

};
