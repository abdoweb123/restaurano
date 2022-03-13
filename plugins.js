/*global $*/


$(document).ready(function(){
   "use strict"; 
    
    $(".above header .photo .sss").hover(function(){
        
       $(this).css
        ({
           opacity:"0.8",
           transition: "all 200ms"  
       }) 
    });
    
    $(".above header .right ul .last-li a").mouseleave(function(){
         
         $(this).css
         ({
             transition:"all 500ms"
         }) 
     })
    
    $(".above header .photo .sss").mouseleave(function(){
        
       $(this).css
        ({
           opacity:"1",
           transition: "all 200ms"  
       }) 
    });

    
    
  $(".above header .right ul .li-f .a-f").hover(function(){
  
      $(this).css
      ({
          color: "#d02529",
          borderBottom: "2px solid #d02529",
          transition: "color 600ms",
          transition: "borderBottom 300ms",
      });   
  });
    
    
  $(".above header .right ul .li-f .a-f").mouseleave(function(){
     
      $(this).css
      ({
          color: "#fff",
          borderBottom: "none",
          transition: "all 600ms" 
      })
      
  });
    
 $(".fa-bars").click(function(){
     
   $(".list-li").slideToggle(600); 
 });
  
    $(".list-li ul li a").hover(function(){
       $(this).css({
           color:"#d02529",
           transition:"400ms"
       })
   }) 
    
   $(".list-li ul li a").mouseleave(function(){
       $(this).css({
           color:"white",
           transition:"400ms"
       })
   }) 
    
   $(".opener1").click(function(){
      $(this).next().css("paddingTop","10px").slideToggle(400);
      $(this).css("display","none");
      $(this).prev().css("display","inline");
      $(".my-ul").not($(this).next()).slideUp(500);
      $(".opener1").not($(this)).show();
   }); 
    
   $(".closer1").click(function(){
      $(this).css("display","none");
      $(this).next().css("display","inline");
      $(this).next().next().css("paddingTop","10px").slideToggle(400); 
   }); 
    
    
    
    
  $(".above header .right ul .pages .a1").hover(function(){
      
     $(".above header .right ul .one").fadeToggle(0);
      
   });
    
    $(".above header .right ul li .one").hover(function(){
        
        $(this).fadeToggle(0);
        
        $(".above header .right ul .pages .a-f").css
        ({
          color: "#d02529",
          borderBottom: "2px solid #d02529",
          transition: "borderBottom 600ms"
        });
        
    });
    
    $(".above header .right ul li .one").mouseleave(function(){
        
        
       $(".above header .right ul .pages .a-f").css
        ({
          color: "#fff",
          borderBottom: "none",
          transition: "borderBottom 600ms"
        });
        
    });
    
    
    
   $(".above header .right ul .plog .a2").hover(function(){
      
     $(".above header .right ul .two").fadeToggle(0);
      
   });
    
    $(".above header .right ul li .two").hover(function(){
        
        $(this).fadeToggle(0);
        
        $(".above header .right ul .plog .a-f").css
        ({
          color: "#d02529",
          borderBottom: "2px solid #d02529",
          transition: "borderBottom 600ms"
        });
        
    });
    
    $(".above header .right ul li .two").mouseleave(function(){
        
        
       $(".above header .right ul .plog .a-f").css
        ({
          color: "#fff",
          borderBottom: "none",
            transition: "borderBottom 600ms"
        });
        
    });
    
     
    $(".above header").css
              ({
                  backgroundColor:"transparent",
              });
    
    
    
    $(window).on("scroll" , function(){
        
        var x = $(window).scrollTop();
        
         if ( x > 20){
             
             $(".above header").css({
                 
                 backgroundColor:"rgb(0 0 0 / .9)",
                 transition:"all 1s"  
             }) 
          } else {
              
              $(".above header").css
              ({
                  backgroundColor:"transparent"
              })
          }
      });
    
    
     if( scrollY > 20 ){
         $(".above header").css({
                 
                 backgroundColor:"rgb(0 0 0 / .9)"
        }) 
     }   
    
    
    
    
    
    
     $(".our-story .row .para a").mouseleave(function(){
         
         $(this).css
         ({
             transition:"all 500ms"
         })
     })
    
    
    $(".discription div>a").mouseleave(function(){
         
         $(this).css
         ({
             transition:"all 500ms"
         })
     })

    $(".discription .inner").mouseleave(function(){
         
         $(this).css
         ({
             transition:"all 400ms"
         })
     })

    $("button").mouseleave(function(){
         
         $(this).css
         ({
             transition:"all 500ms"
         }) 
     })
    
    $(".team .photo1 .row .inner .parag a").mouseleave(function(){
         
         $(this).css
         ({
             transition:"all 200ms"
         })
     })
    
    
    
    
    
     $(".team .photo1 .row .inner").mouseleave(function(){
         
         $(".team .photo1 .row .inner a img").css
         ({
             transition:"all 400ms ease"
         })
     })
    
    
    $("footer .my-submit>input").mouseleave(function(){
         
         $(this).css
         ({
             transition:"all 400ms ease"
         })
     })
    
    $("footer .logo-social a , footer .menu-ul a , .second-blog-detail a").mouseleave(function(){
         
         $(this).css
         ({
             transition:"all 400ms ease"
         })
     })
    
    $("footer .footer-mid img , .blog-recent img").mouseleave(function(){
         
         $(this).css
         ({
             transition:"all 400ms ease"
         })
     })
    
    $(".photo-a img , .second-blog-detail h3 a").mouseleave(function(){  
         $(this).css
         ({
             transition:"all 400ms ease"
         })
     })
    
   $(".opener").click(function(){
      $(this).next().css("paddingTop","10px").slideToggle(400);
      $(this).css("display","none");
      $(this).prev().css("display","inline");
      $(".menu-ul").not($(this).next()).slideUp(500);
      $(".opener").not($(this)).show();
   }); 
    
   $(".closer").click(function(){
      $(this).css("display","none");
      $(this).next().css("display","inline");
      $(this).next().next().css("paddingTop","10px").slideToggle(400); 
   });
    
     $(".contact-m a").hover(function(){
     $(this).css({
       textDecoration:"none",
       color:"#d02529",
       transition:"400ms"
     });
   });
    
   $(".contact-m a").mouseleave(function(){
     $(this).css({
       color:"#2a2b2c",
       transition:"400ms"
     });
   });
    
    $(".blog-tags a ").mouseleave(function(){
     $(this).css({
       transition:"300ms"
     });
   });
   
    $(".related-news .row .inner").mouseleave(function(){
     $(".related-news .row .inner a img").css({
       transition:"all 400ms ease"
     });
   });
    
    
    
    $(".owner .logo-social a , .customer-info a , .comment-here button , .related-news .row .inner .parag a").mouseleave(function(){
      $(this).css({
          transition:"all 400ms ease"
    });
  });
    
    $(".blog-categories a , .blog-gallery-photo img ,.grid-item .detail a , .carac .detail-tags a").mouseleave(function(){
      $(this).css({
          transition:"all 400ms ease"
    })
  })
    
 $(".click-contact").click(function(){
  $(".carousel,.disc1,.our-story,.quick1,.team,.gallery,.our-team,.my404,.aboutus,.menu1,.my-menu,.book-now,.blog-left,.blog-right,.blog-grid,.blog-detail").css("display","none");  
        $(".contact,header").css({display:"block"});
        $(".list-li").hide();
        $("footer").css("marginTop","100px")
    });
   
    
  $(".click-gallery").click(function(){
  $(".carousel,.disc1,.our-story,.menu1,.quick1,.team,.contact,.our-team,.my404,.aboutus,.book-now,.my-menu,.blog-left,.blog-right,.blog-grid,.blog-detail").css("display","none");  
        $(".gallery,header").css({display:"block"});
        $(".list-li").hide();
        $("footer").css("marginTop","30px")
    });
  
    
  $(".gallery-i img").mouseleave(function(){
      $(this).css({
          transition:"all 400ms ease"
    })
  })
    
  $(".click-team").click(function(){
  $(".carousel,.disc1,.our-story,.menu1,.quick1,.team,.contact,.gallery,.my404,.aboutus,.book-now,.my-menu,.blog-left,.blog-right,.blog-grid,.blog-detail").css("display","none");  
        $(".our-team,header").css({display:"block"});
        $(".list-li").hide();
        $("footer").css("marginTop","150px")
    });
    
  $(".chef a , .blog-left .recent-desc a , .grid-item .photo a img").mouseleave(function(){
      $(this).css({
          transition:"all 400ms ease"
    })
  })  
    
  $(".click-my404").click(function(){
  $(".carousel,.disc1,.our-story,.menu1,.quick1,.team,.contact,.gallery,.our-team,.aboutus,.book-now,.my-menu,.blog-left,.blog-right,.blog-grid,.blog-detail").css("display","none");  
        $(".my404,header").css({display:"block"});
        $(".list-li").hide();
        $("footer").css("marginTop","30px")
    }); 
   
    
  $(".my404 a").mouseleave(function(){
      $(this).css({
          transition:"all 500ms ease"
    })
  })      
 
    
  $(".click-aboutus").click(function(){
  $(".carousel,.disc1,.our-story,.menu1,.quick1,.team,.contact,.gallery,.our-team,.my404,.book-now,.my-menu,.blog-left,.blog-right,.blog-grid,.blog-detail").css("display","none"); 
        $(".aboutus,header").css({display:"block"});
        $(".list-li").hide();
        $("footer").css("marginTop","150px")
    });   
    
   
  $(".click-menu").click(function(){
  $(".carousel,.disc1,.our-story,.menu1,.quick1,.team,.contact,.gallery,.our-team,.my404,.book-now,.aboutus,.blog-left,.blog-right,.blog-grid,.blog-detail").css("display","none");
        $(".my-menu,header").css({display:"block"});
        $(".list-li").hide();
        $("footer").css("marginTop","150px")
    });      
    
   $(".click-book").click(function(){
   $(".carousel,.disc1,.our-story,.menu1,.quick1,.team,.contact,.gallery,.our-team,.my404,.aboutus,.my-menu,.blog-left,.blog-right,.blog-grid,.blog-detail").css("display","none"); 
        $(".book-now,header").css({display:"block"});
        $(".list-li").hide();
        $("footer").css("marginTop","150px")
    }); 
    
    
    $(".click-left").click(function(){
    $(".carousel,.disc1,.our-story,.menu1,.quick1,.team,.contact,.gallery,.our-team,.my404,.aboutus,.my-menu,.book-now,.blog-right,.blog-grid,.blog-detail").css("display","none"); 
        $(".blog-left,header").css({display:"block"});
        $(".list-li").hide();
        $("footer").css("marginTop","0px")
    });  
    
   
    $(".click-right").click(function(){
    $(".carousel,.disc1,.our-story,.menu1,.quick1,.team,.contact,.gallery,.our-team,.my404,.aboutus,.my-menu,.book-now,.blog-left,.blog-grid,.blog-detail").css("display","none");  
        $(".blog-right,header").css({display:"block"});
        $(".list-li").hide();
        $("footer").css("marginTop","0px")
    });  
    
    
    $(".click-grid").click(function(){
    $(".carousel,.disc1,.our-story,.menu1,.quick1,.team,.contact,.gallery,.our-team,.my404,.aboutus,.my-menu,.book-now,.blog-left,.blog-right,.blog-detail").css("display","none"); 
        $(".blog-grid,header").css({display:"block"});
        $(".list-li").hide();
        $("footer").css("marginTop","0px")
    });  
    
    
   $(".click-detail").click(function(){
    $(".carousel,.disc1,.our-story,.menu1,.quick1,.team,.contact,.gallery,.our-team,.my404,.aboutus,.my-menu,.book-now,.blog-left,.blog-right,.blog-grid").css("display","none"); 
        $(".blog-detail,header").css({display:"block"});
        $(".list-li").hide();
        $("footer").css("marginTop","0px")
    }); 
    
    
    
    
    
    
   // for loading 
   $(".loading-overlay .sk-cube-grid").fadeOut(2000);
   $(".loading-overlay").fadeOut(4000)
   
    
   
    
    
});




 
       










