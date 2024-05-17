import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './slider.css';
import './MultiItemAutoSlideCarousel'

const MultiItemAutoSlideCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
     
     
					{/* <div className='sliderA'>
          <div className="container">
					<div className="row">
						<div className="col ">

						<div class="card">

                        <div className="image">
							<img src='https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png' alt="tanveer"  /><span>4*</span>
						</div>

						<div className="name">
							<h4>NiveshBaba</h4>
						</div>

						<div className="types">
                         <h6>bitcoin</h6>
						</div>
                        
						<div className="percentage">
							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQZePII6u7R75DreI6vt814IUsr9ae2TTJg&usqp=CAU"/><span>12%</span>
						</div>

						

              
            </div>
			           
						<div class="card">

<div className="image">
	<img src='https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png' alt="tanveer"  /><span>4*</span>
</div>

<div className="name">
	<h4>NiveshBaba</h4>
</div>

<div className="types">
 <h6>bitcoin</h6>
</div>

<div className="percentage">
	<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQZePII6u7R75DreI6vt814IUsr9ae2TTJg&usqp=CAU"/><span>12%</span>
</div>




          </div>

						<div class="card">

                        <div className="image">
							<img src='https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png' alt="tanveer"  /><span>4*</span>
						</div>

						<div className="name">
							<h4>NiveshBaba</h4>
						</div>

						<div className="types">
                         <h6>bitcoin</h6>
						</div>
                        
						<div className="percentage">
							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQZePII6u7R75DreI6vt814IUsr9ae2TTJg&usqp=CAU"/><span>12%</span>
						</div>

						

              
            </div>
			
				</div>
					</div>
				    </div>
		   </div> */}
       
       <div class="card">

<div className="image">
<img src='https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png' alt="tanveer"  /><span>4*</span>
</div>

<div className="name">
<h4>NiveshBaba</h4>
</div>

<div className="types">
 <h6>bitcoin</h6>
</div>

<div className="percentage">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQZePII6u7R75DreI6vt814IUsr9ae2TTJg&usqp=CAU"/><span>12%</span>
</div>




</div>
<div class="card">

                        <div className="image">
							<img src='https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png' alt="tanveer"  /><span>4*</span>
						</div>

						<div className="name">
							<h4>NiveshBaba</h4>
						</div>

						<div className="types">
                         <h6>bitcoin</h6>
						</div>
                        
						<div className="percentage">
							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQZePII6u7R75DreI6vt814IUsr9ae2TTJg&usqp=CAU"/><span>12%</span>
						</div>

						

              
            </div>
            <div class="card">

                        <div className="image">
							<img src='https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png' alt="tanveer"  /><span>4*</span>
						</div>

						<div className="name">
							<h4>NiveshBaba</h4>
						</div>

						<div className="types">
                         <h6>bitcoin</h6>
						</div>
                        
						<div className="percentage">
							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQZePII6u7R75DreI6vt814IUsr9ae2TTJg&usqp=CAU"/><span>12%</span>
						</div>

						

              
            </div>
            <div class="card">

                        <div className="image">
							<img src='https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png' alt="tanveer"  /><span>4*</span>
						</div>

						<div className="name">
							<h4>NiveshBaba</h4>
						</div>

						<div className="types">
                         <h6>bitcoin</h6>
						</div>
                        
						<div className="percentage">
							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQZePII6u7R75DreI6vt814IUsr9ae2TTJg&usqp=CAU"/><span>12%</span>
						</div>

						

              
            </div>
            <div class="card">

                        <div className="image">
							<img src='https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png' alt="tanveer"  /><span>4*</span>
						</div>

						<div className="name">
							<h4>NiveshBaba</h4>
						</div>

						<div className="types">
                         <h6>bitcoin</h6>
						</div>
                        
						<div className="percentage">
							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQZePII6u7R75DreI6vt814IUsr9ae2TTJg&usqp=CAU"/><span>12%</span>
						</div>

						

              
            </div>
            <div class="card">

                        <div className="image">
							<img src='https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png' alt="tanveer"  /><span>4*</span>
						</div>

						<div className="name">
							<h4>NiveshBaba</h4>
						</div>

						<div className="types">
                         <h6>bitcoin</h6>
						</div>
                        
						<div className="percentage">
							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQZePII6u7R75DreI6vt814IUsr9ae2TTJg&usqp=CAU"/><span>12%</span>
						</div>

						

              
            </div>
            <div class="card">

                        <div className="image">
							<img src='https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png' alt="tanveer"  /><span>4*</span>
						</div>

						<div className="name">
							<h4>NiveshBaba</h4>
						</div>

						<div className="types">
                         <h6>bitcoin</h6>
						</div>
                        
						<div className="percentage">
							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQZePII6u7R75DreI6vt814IUsr9ae2TTJg&usqp=CAU"/><span>12%</span>
						</div>

						

              
            </div>
            <div class="card">

                        <div className="image">
							<img src='https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png' alt="tanveer"  /><span>4*</span>
						</div>

						<div className="name">
							<h4>NiveshBaba</h4>
						</div>

						<div className="types">
                         <h6>bitcoin</h6>
						</div>
                        
						<div className="percentage">
							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQZePII6u7R75DreI6vt814IUsr9ae2TTJg&usqp=CAU"/><span>12%</span>
						</div>

						

              
            </div>
            <div class="card">

                        <div className="image">
							<img src='https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png' alt="tanveer"  /><span>4*</span>
						</div>

						<div className="name">
							<h4>NiveshBaba</h4>
						</div>

						<div className="types">
                         <h6>bitcoin</h6>
						</div>
                        
						<div className="percentage">
							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQZePII6u7R75DreI6vt814IUsr9ae2TTJg&usqp=CAU"/><span>12%</span>
						</div>

						

              
            </div>
            

     
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default MultiItemAutoSlideCarousel;
