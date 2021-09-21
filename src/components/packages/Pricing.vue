<template>
<!-- 'grey darken-4':'grey lighten-4' -->
  <div id="generic_price_table" :class="$vuetify.theme.dark == true? 'dark' : 'light'">
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="price-heading clearfix">
              <h1 :class="$vuetify.theme.dark == true?'text-white':'grey lighten-4'">Sponsor Packages</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-4 col-md-3" v-for="d in data" :key="d">
            <div class="generic_content clearfix" :class='[d.default ? "active" : "", $vuetify.theme.dark ? "dark-mode-card": ""]'>
              <div class="generic_head_price clearfix">
                <div class="generic_head_content clearfix">
                  <div class="head_bg" :class="$vuetify.theme.dark == true ? 'dark-mode-card-hd':'' "></div>
                  <div class="head">
                    <span :class="$vuetify.theme.dark == true?'text-white':''">{{ d.name }}</span>
                  </div>
                </div>
                <div class="generic_price_tag clearfix">
                  <span class="price">
                    <span class="sign">EGP</span>
                    <span class="currency">{{ d.price }}</span>
                  </span>
                </div>
              </div>
              <div class="generic_feature_list">
                <ul>
                  <!-- <li><span>2GB</span> Bandwidth</li>
                  <li><span>150GB</span> Storage</li>
                  <li><span>12</span> Accounts</li> -->
                  <!-- <li><span>7</span> Host Domain</li> -->
                  <li v-for='f in d.benefits' :key="f" :class="$vuetify.theme.dark ? 'dark-mode-li': ''"><span :class="$vuetify.theme.dark ? 'text-white': ''">{{ f.split(' ')[0] }}</span> {{f.substring(f.indexOf(' ') + 1)}}</li>
                </ul>
              </div>
              <div class="generic_price_btn clearfix">
                <a class="" :href="d.form" target="_blank">Choose</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    name: 'Pricing',
    props: ['data'],
}
</script>


<style>
@import url(https://fonts.googleapis.com/css?family=Lato:400,100,100italic,300,300italic,400italic,700italic,700,900italic,900);
@import url(https://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900);
@import url(https://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900);
.dark-mode-card {
  background-color: #292929 !important;
  border: 1px solid #212121;
  border-radius: 5px;
}
.dark-mode-card-hd {
  border-color: #292929 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #292929 !important;
}
.dark-mode-li:hover {
  background: #414141 !important;
}
#generic_price_table.dark::before {
  content: '';
  background: #212121;
  background: -moz-linear-gradient(top, #212121 0%, #1f1f1f 100%);
  background: -webkit-linear-gradient(top, #212121 0%,#1f1f1f 100%);
  background: linear-gradient(to bottom, #212121 0%,#1f1f1f 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#60a9ff', endColorstr='#4394f4',GradientType=0 );
  height: 350px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
#generic_price_table.light::before {
  content: '';
  background: #f5f5f5;
  background: -moz-linear-gradient(top, #f5f5f5 0%, #eeeeee 100%);
  background: -webkit-linear-gradient(top, #f5f5f5 0%,#eeeeee 100%);
  background: linear-gradient(to bottom, #f5f5f5 0%,#eeeeee 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#60a9ff', endColorstr='#4394f4',GradientType=0 );
  height: 350px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

/*PRICE COLOR CODE START*/
#generic_price_table .generic_content{
	background-color: #fff;
}

#generic_price_table .generic_content .generic_head_price{
	background-color: #f6f6f6;
}

#generic_price_table .generic_content .generic_head_price .generic_head_content .head_bg{
	border-color: #e4e4e4 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #e4e4e4;
}

#generic_price_table .generic_content .generic_head_price .generic_head_content .head span{
	color: #525252;
}

#generic_price_table .generic_content .generic_head_price .generic_price_tag .price .sign{
    color: #414141;
}

#generic_price_table .generic_content .generic_head_price .generic_price_tag .price .currency{
    color: #414141;
}

#generic_price_table .generic_content .generic_head_price .generic_price_tag .price .cent{
    color: #414141;
}

#generic_price_table .generic_content .generic_head_price .generic_price_tag .month{
    color: #414141;
}

#generic_price_table .generic_content .generic_feature_list ul li{	
	color: #a7a7a7;
}

#generic_price_table .generic_content .generic_feature_list ul li span{
	color: #414141;
}
#generic_price_table .generic_content .generic_feature_list ul li:hover{
	background-color: #E4E4E4;
	border-left: 5px solid #2196F3;
}

#generic_price_table .generic_content .generic_price_btn a{
	border: 1px solid #2196F3; 
    color: #2196F3;
} 

#generic_price_table .generic_content.active .generic_head_price .generic_head_content .head_bg,
#generic_price_table .generic_content:hover .generic_head_price .generic_head_content .head_bg{
	border-color: #2196F3 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #2196F3 !important;
	color: #fff;
}

#generic_price_table .generic_content:hover .generic_head_price .generic_head_content .head span,
#generic_price_table .generic_content.active .generic_head_price .generic_head_content .head span{
	color: #fff;
}

#generic_price_table .generic_content:hover .generic_price_btn a,
#generic_price_table .generic_content.active .generic_price_btn a{
	background-color: #2196F3;
	color: #fff;
} 
#generic_price_table{
	padding: 25px 0 100px 0;
    font-family: 'Raleway', sans-serif;
}
.row .table{
    padding: 28px 0;
}

/*PRICE BODY CODE START*/

#generic_price_table .generic_content{
	overflow: hidden;
	position: relative;
	text-align: center;
  height: 100%;
  margin-bottom: 75px;
}

#generic_price_table .generic_content .generic_head_price {
	margin: 0 0 20px 0;
}

#generic_price_table .generic_content .generic_head_price .generic_head_content{
	margin: 0 0 50px 0;
}

#generic_price_table .generic_content .generic_head_price .generic_head_content .head_bg{
    border-style: solid;
    border-width: 90px 1411px 23px 399px;
	position: absolute;
}

#generic_price_table .generic_content .generic_head_price .generic_head_content .head{
	padding-top: 40px;
	position: relative;
}

#generic_price_table .generic_content .generic_head_price .generic_head_content .head span{
    font-family: "Raleway",sans-serif;
    font-size: 28px;
    font-weight: 400;
    letter-spacing: 2px;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
}

#generic_price_table .generic_content .generic_head_price .generic_price_tag{
	padding: 0 0 20px;
}

#generic_price_table .generic_content .generic_head_price .generic_price_tag .price{
	display: block;
}

#generic_price_table .generic_content .generic_head_price .generic_price_tag .price .sign{
    display: inline-block;
    font-family: "Lato",sans-serif;
    font-size: 28px;
    font-weight: 400;
    vertical-align: middle;
}

#generic_price_table .generic_content .generic_head_price .generic_price_tag .price .currency{
    font-family: "Lato",sans-serif;
    font-size: 60px;
    font-weight: 300;
    letter-spacing: -2px;
    line-height: 60px;
    padding: 0;
    vertical-align: middle;
}

#generic_price_table .generic_content .generic_head_price .generic_price_tag .price .cent{
    display: inline-block;
    font-family: "Lato",sans-serif;
    font-size: 24px;
    font-weight: 400;
    vertical-align: bottom;
}

#generic_price_table .generic_content .generic_head_price .generic_price_tag .month{
    font-family: "Lato",sans-serif;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 3px;
    vertical-align: bottom;
}

#generic_price_table .generic_content .generic_feature_list ul{
	list-style: none;
	padding: 0;
	margin: 0;
}

#generic_price_table .generic_content .generic_feature_list ul li{
	font-family: "Lato",sans-serif;
	font-size: 18px;
	padding: 15px 10px;
	transition: all 0.3s ease-in-out 0s;
}
#generic_price_table .generic_content .generic_feature_list ul li:hover{
	transition: all 0.3s ease-in-out 0s;
	-moz-transition: all 0.3s ease-in-out 0s;
	-ms-transition: all 0.3s ease-in-out 0s;
	-o-transition: all 0.3s ease-in-out 0s;
	-webkit-transition: all 0.3s ease-in-out 0s;

}
#generic_price_table .generic_content .generic_feature_list ul li .fa{
	padding: 0 10px;
}
#generic_price_table .generic_content .generic_price_btn{
	margin: 20px 0 15px;
  position:absolute;
  bottom: 0;
  width: 100%;
}

#generic_price_table .generic_content .generic_price_btn a{
    border-radius: 50px;
	-moz-border-radius: 50px;
	-ms-border-radius: 50px;
	-o-border-radius: 50px;
	-webkit-border-radius: 50px;
    display: inline-block;
    font-family: "Lato",sans-serif;
    font-size: 18px;
    outline: medium none;
    padding: 12px 30px;
    text-decoration: none;
    text-transform: uppercase;
}

#generic_price_table .generic_content,
#generic_price_table .generic_content:hover,
#generic_price_table .generic_content .generic_head_price .generic_head_content .head_bg,
#generic_price_table .generic_content:hover .generic_head_price .generic_head_content .head_bg,
#generic_price_table .generic_content .generic_head_price .generic_head_content .head h2,
#generic_price_table .generic_content:hover .generic_head_price .generic_head_content .head h2,
#generic_price_table .generic_content .price,
#generic_price_table .generic_content:hover .price,
#generic_price_table .generic_content .generic_price_btn a,
#generic_price_table .generic_content:hover .generic_price_btn a{
	transition: all 0.3s ease-in-out 0s;
	-moz-transition: all 0.3s ease-in-out 0s;
	-ms-transition: all 0.3s ease-in-out 0s;
	-o-transition: all 0.3s ease-in-out 0s;
	-webkit-transition: all 0.3s ease-in-out 0s;
} 
@media (max-width: 320px) {	
}

@media (max-width: 767px) {
	#generic_price_table .generic_content{
		margin-bottom:75px;
	}
}
@media (min-width: 768px) and (max-width: 991px) {
	#generic_price_table .col-md-3{
		float:left;
		width:50%;
	}
	
	#generic_price_table .col-md-4{
		float:left;
		width:50%;
	}
	
	#generic_price_table .generic_content{
		margin-bottom:75px;
	}
}
@media (min-width: 992px) and (max-width: 1199px) {
}
@media (min-width: 1200px) {
}
#generic_price_table_home{
	 font-family: 'Raleway', sans-serif;
}
.text-center h1,
.text-center h1 a{
	color: #7885CB;
	font-size: 30px;
	font-weight: 300;
	text-decoration: none;
}
.demo-pic{
	margin: 0 auto;
}
.demo-pic:hover{
	opacity: 0.7;
}
#generic_price_table_home ul{
	margin: 0 auto;
	padding: 0;
	list-style: none;
	display: table;
}
#generic_price_table_home li{
	float: left;
}
#generic_price_table_home li + li{
	margin-left: 10px;
	padding-bottom: 10px;
}
#generic_price_table_home li a{
	display: block;
	width: 50px;
	height: 50px;
	font-size: 0px;
}
#generic_price_table_home .blue{
	background: #3498DB;
	transition: all 0.3s ease-in-out 0s;
}
#generic_price_table_home .emerald{
	background: #2196F3;
	transition: all 0.3s ease-in-out 0s;
}
#generic_price_table_home .grey{
	background: #7F8C8D;
	transition: all 0.3s ease-in-out 0s;
}
#generic_price_table_home .midnight{
	background: #34495E;
	transition: all 0.3s ease-in-out 0s;
}
#generic_price_table_home .orange{
	background: #E67E22;
	transition: all 0.3s ease-in-out 0s;
}
#generic_price_table_home .purple{
	background: #9B59B6;
	transition: all 0.3s ease-in-out 0s;
}
#generic_price_table_home .red{
	background: #E74C3C;
	transition:all 0.3s ease-in-out 0s;
}
#generic_price_table_home .turquoise{
	background: #1ABC9C;
	transition: all 0.3s ease-in-out 0s;
}

#generic_price_table_home .blue:hover,
#generic_price_table_home .emerald:hover,
#generic_price_table_home .grey:hover,
#generic_price_table_home .midnight:hover,
#generic_price_table_home .orange:hover,
#generic_price_table_home .purple:hover,
#generic_price_table_home .red:hover,
#generic_price_table_home .turquoise:hover{
	border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
	transition: all 0.3s ease-in-out 0s;
}
#generic_price_table_home .divider{
	border-bottom: 1px solid #ddd;
	margin-bottom: 20px;
	padding: 20px;
}
#generic_price_table_home .divider span{
	width: 100%;
	display: table;
	height: 2px;
	background: #ddd;
	margin: 50px auto;
	line-height: 2px;
}
#generic_price_table_home .itemname{
	text-align: center;
	font-size: 50px ;
	padding: 50px 0 20px ;
	border-bottom: 1px solid #ddd;
	margin-bottom: 40px;
	text-decoration: none;
    font-weight: 300;
}
#generic_price_table_home .itemnametext{
    text-align: center;
    font-size: 20px;
    padding-top: 5px;
    text-transform: uppercase;
    display: inline-block;
}
#generic_price_table_home .footer{
	padding:40px 0;
}

.price-heading{
    text-align: center;
}
.price-heading h1{
	color: #666;
	margin: 0;
	/* padding: 0 0 50px 0; */
}
.demo-button {
    background-color: #333333;
    color: #ffffff;
    display: table;
    font-size: 20px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 50px;
    outline-color: -moz-use-text-color;
    outline-style: none;
    outline-width: medium ;
    padding: 10px;
    text-align: center;
    text-transform: uppercase;
}

.demo-button:hover{
	background-color: #666;
	color: #FFF;
	text-decoration:none;
	
}
</style>