let Vheader = {
  props: ['items-length'],
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
									{{items-length}}
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
  methods: {


  }
};
