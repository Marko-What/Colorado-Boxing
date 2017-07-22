
		function rotate(){
			boxing = $this;				
			boxing.css({ transition: "transform 2.6s", transform: "rotate(" + 3940 + "deg)" });		
		}
    
		function rotate_Right(){
			boxing = $this;	
			boxing.css({ transition: "transform 2.6s", transform: "rotate(" + -3940 + "deg)" });			
		}

	function boxMigration(){
			boxing.appendTo("div#wrap1");

			function boxSlideIn(){
			boxing.animate({"margin-left" : "0px"}, 500);
			}
			setTimeout(boxSlideIn,500);	
				
			var wrap = $("div#wrap div#box").length;
			if(wrap < 1) { 
			
			function wrapCon(){$("div#wrap1 div#box").slideUp(500);}

			setTimeout(wrapCon, 1300);
			
			function wait(){	
				$('div#wrap1').children('div#box').unbind();
				$("div#wrap1 div#box").prependTo("div#wrap").slideDown(500);		
				$('div#wrap').children('div#box').bind('click',AnimationLeftRight);	
			}
			setTimeout(wait, 1600);
			}		
			
		}	


	function boxMigration_Right(){
			boxing.appendTo("div#wrap");

			function boxSlideIn(){
			boxing.animate({"margin-left" : "0px"}, 500);
			}
			setTimeout(boxSlideIn,500);	
				
			var wrap = $("div#wrap1 div#box").length;
			if(wrap < 1) { 
			
			function wrapCon(){$("div#wrap1 div#box").slideUp(500);}

			setTimeout(wrapCon, 1300);
			
			function wait(){	
				$('div#wrap').children('div#box').unbind();
				$("div#wrap div#box").prependTo("div#wrap1").slideDown(500);	
				AnimationClickBind1();		
			}
			setTimeout(wait, 1600);
			}		
			
}




			function AnimationLeftRight(){	
					$this = $(this);
					$this.appendTo("div#wrap");
					
					$('div#wrap').children('div#box').unbind();
					setTimeout(rotate, 10);
					setTimeout(throw1, 340);
					setTimeout(boxMigration, 2340);	
					setTimeout(AnimationClickBind, 3340);		
			}	



			function AnimationLRightLeft(){
					$this = $(this);
					$('div#wrap1').children('div#box').unbind();
					setTimeout(rotate_Right(), 10);
					setTimeout(throw_Right, 340);
					setTimeout(boxMigration_Right, 2340);	
					setTimeout(AnimationClickBind1, 3340);		
			}	



		
		
		
		$('div#wrap').children('div#box').bind('click',AnimationLeftRight);
		$('div#wrap1').children('div#box').bind('click',AnimationRightLeft);		

		
		function AnimationClickBind(){
				$('div#wrap').children('div#box').bind('click',AnimationLeftRight);
				$this.bind('click',AnimationLRightLeft);
		}	
			
		function AnimationClickBind1(){
				$('div#wrap1').children('div#box').bind('click',AnimationLRightLeft);
				$this.bind('click',AnimationLeftRight);
		}
		
	
		
	
		function throw1(){
		winWidth = $(window).width();
			

	
			boxing.css("margin-left" , "350px");
		boxing.animate({"margin-left" : winWidth}, { duration: 1800, queue: false})
						.animate({"margin-top" : "155px"},1100, function(){
										$(this).animate({"margin-top" : "0px"}, 1100, function(){
										$(this).css({ transition: "transform 0s", transform: "rotate(" + 0 + "deg)" });
			});
		});
				
	}





		
		function throw_Right(){
		winWidth = -($(window).width());
			 
			/*boxing.css("margin-left" , "350px");*/
		boxing.animate({"margin-left" : winWidth}, { duration: 1800, queue: false})
						.animate({"margin-top" : "155px"},1100, function(){
										$(this).animate({"margin-top" : "0px"}, 1100, function(){
										$(this).css({ transition: "transform 0s", transform: "rotate(" + 0 + "deg)" });
			});
		});
				
	}
