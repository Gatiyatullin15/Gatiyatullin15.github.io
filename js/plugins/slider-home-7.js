$( document ).ready(function() {"use strict";
              var tpj = jQuery;

                var revapi8;
                tpj(document).ready(function() {
                    if (tpj("#slider_7").revolution == undefined) {
                        revslider_showDoubleJqueryError("#slider_7");
                    } else {
                        revapi8 = tpj("#slider_7").show().revolution({
                            sliderType: "standard",
                            jsFileLocation: "../../revolution/js/",
                            sliderLayout: "auto",
                            delay: 9000,
                          
                           responsiveLevels:[1920,1024,768,481],
                            gridwidth:[1170,768,600,481],
                            gridheight:[700,768,600,540]                         
                            
                        });
                    }
                }); /*ready*/
});
