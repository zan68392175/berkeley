
//首页请求产品数据
$(function(){
	
	//	快速通道点击存值以判断进入产品页面请求数据
	$('.fast_box ul li a').click(function(){
		var inx = $(this).attr('index');
		localStorage.setItem('product',inx);
	});
	
	//首页请求产品数据
	$.ajax({
		type:"get",
		url:"data/index.json",
		async:false,
		dataType: 'json',
		success: function (data){
            var results = '';
        	$.each(data.indexPic,function (index,item){
        		results += `<li><a href="#" code="${item.code}"><img src="${item.imgurl}"/><p>${item.int}</p><span>${item.na}</span></a></li>`;
            });
            $('.product_list').html(results);
        }
	});
	
//	新闻列表请求数据
	$.ajax({
	    type : "get",
	    url : "data/index.json",
	    dataType : "json",
	    cache : false,
	    success : function (data){
	        var str = "";
	        $.each(data.news,function(index,value){
	            str +=  '<li class="newsClass cf" code="'+value.code+'"><div class="newsImg"><a href="news_1.html"><img src="'+value.imgurl+'" alt="" style="left:'+value.left+'"></a></div><div class="news"><p class="newsTitle"><a href="news_1.html">'+value.title+'</a></p><p class="newsMessage"><span class="newsTime">'+value.time+'</span><span class="newsKeyword">'+value.keyword+'</span></p><p class="newsAbstract">'+value.abstract+'</p></div></li>'
	        });
	        $(".newsList").html(str);
	    }
	
	
	});
	
//	新闻列表小列表请求数据
	$.ajax({
	    type : "get",
	    url : "data/index.json",
	    dataType : "json",
	    cache : false,
	    success : function (data){
	        var str = "";
	        $.each(data.newsTitle,function(index,value){
	            str +=  '<li class="hotNewsTitle"><span>'+value.time+'</span><a href="">'+value.title+'</a></li>'
	        });
	        $(".hotNews").html(str);
	    }
	});
	
	// 产品展示加载数据
    $.ajax({
        url: 'data/index.json',
        type: 'get',
        cache: false,
        dataType: 'json',
        success: function (data){
            var results = '';
            $.each(data.yh1,function (index,item){
                results += '<li><a href="productdetail.html"><img src="'+item.imgurl+'" alt="">'+item.label+'</a><p>'+item.describe+'</p></li>';
            });                
            $('.serial-img').html(results);

            var results2 = '';
            $.each(data.yh2,function (index,item){
                results2 += '<li><a href="productdetail.html"><img src="'+item.imgurl+'" alt="">'+item.label+'</a><p>'+item.describe+'</p></li>';
            }); 
            $('.product-img').html(results2);
        }
    });

    $('.mynav ul').on('click','li',function (){
        var index = $(this).index();
        location.href = "productdiff.html?list="+index;
    });
	
	

    // 招商加盟
    $.ajax({
        url: 'data/index.json',
        type: 'get',
        cache: false,
        dataType: 'json',
        success: function (data) {
            var results = '';
            $.each(data.support, function (index, item) {
                results += `<li><p>${item.title}</p><div> <a><img src="${item.imgurl}" alt=""></a><p>${item.nav}</p></div></li>`
            });
            $('.yu_support_left').html(results); 
            var results1 = '';
            $.each(data.support2, function (index, item) {
                results1 += `<li><p>${item.title}</p><div> <a><img src="${item.imgurl}" alt=""></a><p>${item.nav}</p></div></li>`
            });
            $('.yu_support_right').html(results1);
        }
    });

	//	加载头部尾部
	$('.tou').load("head.html");
	$('.wei').load("footer.html");
		
	//	滚动返回顶部
	(function(){
		$(window).scroll(function(){
			var sc = $(document).scrollTop();
			if(sc >= 300){
				$('#top').fadeIn();
			}else{
				$('#top').fadeOut();
			}
		});
		
		$('html,body').on('click','#top',function(){
			$('html,body').animate({scrollTop:0},'swing');
		});
	})();
	
	
	//	快速通道选中状态
	$('.fast_box ul li').mouseover(function(){
		var i = $(this).index();
		$(this).children().children('img').attr('src','images/one'+i+'.png');
		$(this).children().children('span').css({'color':'#c3a96c'});
		
	});
	
	$('.fast_box ul li').mouseout(function(){
		var i = $(this).index();
		$(this).children().children('img').attr('src','images/ch'+i+'.png');
		$(this).children().children('span').css({'color':'#fff'});
		
	});
	
	$('.mynav ul:first li a').mouseover(function(){
	    //两种查找方式
	    $(this).children('img:nth-child(1)').css('display','none');
	    $(this).children('img:nth-child(2)').css('display','inline-block');
	
	    $('.mynav ul:first li a').mouseout(function(){
	        $(this).children('img:nth-child(1)').css('display','inline-block');
	        $(this).children('img:nth-child(2)').css('display','none');
	    });
	});
	
//	快速通道点击高亮状态
	var indexA=parseInt( location.search.split('=')[1]);
	$('.mynav ul:eq(0) li').eq(indexA).find('a img').eq(0).css('display','none').next().css('display','inline-block');
	$('.mynav ul:eq(0) li').eq(indexA).find('a span').css('color','rgb(195, 169, 108)');
	$('.mynav ul:eq(0) li').mouseenter(function(){
	    var ind=$(this).index();
	    $('.mynav ul:eq(0) li').mouseout(function(){
	        if(indexA==ind){
	            $('.mynav ul:eq(0) li').eq(indexA).find('a img').eq(0).css('display','none').next().css('display','inline-block');
	            $('.mynav ul:eq(0) li').eq(indexA).find('a span').css('color','rgb(195, 169, 108)');
	        };
	    });
	});
	
//	快速通道连接
	$('.mynav ul').on('click','li',function (){
	    var index = $(this).index();
	    localStorage.setItem('product',index);
	    location.href = "productdiff.html?list="+index;
	    $(this).children('img:nth-child(1)').css('display','none');
	    $(this).children('img:nth-child(2)').css('display','inline-block');
	    $(this).find('span').css('color','rgb(195, 169, 108)');
	});
	
	$('.fast_box ul li a').click(function(){
		var index = $(this).index();
		location.href = "productdiff.html?list="+index;
	});
	
//	产品详情加载数据
// 加载数据
    $.ajax({
        url: 'data/index.json',
        type: 'get',
        cache: false,
        dataType: 'json',
        success: function (data){
            var results = '';
            var result = '';
            var product = localStorage.getItem("product");
            if(product == 5){
            	product == 2;
            }else if(product == 6){
            	product == 4;
            }
            $.each(data['productTab'+product],function (index,item){
                results += '<li><a href="productdetail.html"><img src="'+item.imgUrl+'" alt=""></a><p>'+item.tit+'</p></li>';
            });                
            $('.serial-img').html(results);

            var arr=[];
            $.each(data.yh3,function (index,item){
                var a=parseInt(item.code.split('b')[1]);
                arr.push(a);
            });
            var indexB=arr.indexOf(indexA+1);
            //避免调换json数据顺序时，序号对应错误
            // console.log(indexB);
            result = `<img src="${data.yh3[indexB].imgurl}" alt="">`;
            $('.banner').html(result);
        }
    });
	
//	产品详情弹窗
	$('.product-container p').click(function(){
	    $('.mask').css('display','block');
	    $('.fm').css('display','block');
	});
	$('.fm .sub_btn').find('span:nth-child(2)').click(function(){
	    $('.mask').css('display','none');
	    $('.fm').css('display','none');
	});
	
//	设计师页面请求数据
	$.ajax({
        url: "data/index.json",
        type: "get",
        dataType: "json",
        anync: false,
        success: function (data) {
//      	设计师主管请求数据列表
            var res = "";
            var dataL = data.leader;
            $.each(dataL, function (index, val) {
                if (dataL[index].code == "a1") {
                    var a1V = `<img src=${dataL[index].src} alt=""><p class="other_text">${dataL[index].txt}</p>`;
                    $(".other_img").html(a1V);
                } else {
                    var a2V = `<img src=${dataL[index].src} alt="">
                    <p class="other_text">${dataL[index].txt}</p>`;
                    $(".other_img").html(a1V);
                    $(".other_img2").html(a2V);
                };
            });
            
//          设计师列表请求数据
            var resL = "";
            var dataM = data.master;
            $.each(dataM, function (index, item) {
                resL+= `<div class="D_top_box" code="${dataM[index].code}">
	                <div class="D_top_box_img">
	                    <img src="${dataM[index].src}" alt="" class="D_top_img">
	                </div>
	                <div class="D_master_intro">
	                    <p class="D_masterName">${dataM[index].name}</p>
	                    <p class="D_master_intro_1">${dataM[index].txt}
	                    </p>
	                    <a href="dText.html">
	                        <span>${dataM[index].motto}<img src="images/D_btn.png" alt=""></span>
	                        
	                    </a>
	                </div>
	            </div>`;   
            });
            $(".D_bBox").html(resL); 

        }
    })
	
//	设计师详情页面数据请求
//	设计师详情请求数据
    $.ajax({
        type: 'get',
        url: 'data/index.json',
        anync: false,
        dataType: 'json',
        success: function (data) {
            var results = '';
            var dData=data.D_title;
            results += `<p class="Fang">${dData.say}</p> 
            <p class="blowCowB_s">${dData.tit1}</p>
            <p class="D_question">${dData.question1}</p>
            <p class="D_content">${dData.dCtt1}</p>
            <p class="D_question">${dData.question2}</p>
            <p class="D_content">${dData.dCtt2}</p>
            <p class="D_question">${dData.question3}</p>
            <p class="D_content">${dData.dCtt3}</p>
            <p class="D_question">${dData.question4}</p>
            <p class="D_content">${dData.dCtt4}</p>
            <p class="blowCowB_s">${dData.tit2}</p>
            <p class="D_question">${dData.question5}</p>
            <p class="D_content">${dData.dCtt5}</p>
            <p class="D_question">${dData.question6}</p>
            <p class="D_content">${dData.dCtt6}</p>
            `;
            $(".D_ajax").html(results);
        }

    });
	
	//	视频播放
	$('.br_img').click(function(){
		$(this).hide();
		$('.brand_video').children('video').attr('autoplay','true');
	});
	
	//	轮播图切换
	$('.in_banner ul li').eq(0).css({'opacity':1})
	var index = 1;
	setInterval(function(){
		if(index > 2){
			index = 0;
		};
		$('.in_banner ul li').animate({'opacity':0});
		$('.in_banner ul li').eq(index).animate({'opacity':1},'swing');
		index++;
	},4000);


	
})












