let Vheader = {

  props: {
  	cartitemscount: Number,
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

  data: {
  	
  },

  methods: {

  }
};

let Vfooter = {

  props: {
  	
  },

  template: `<footer class="row pt-3 position-fixed" style="bottom: 0; right: 0; left:0;">
				<div class="col">
					<div class="container-fluid bg-primary text-warning">
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
				</div>
			</footer>`,

  data: {
  	
  },

  methods: {

  }
};