jQuery(document).ready(function( $ ) {
            $("#menu").mmenu({
               "extensions": [
                  "pagedim-black",
                  "theme-dark"
               ],
               "offCanvas": {
                  "position": "right"
               },
               "counters": true,
               "navbars": [
                  {
                     "position": "top",
                     "content": [
                        "searchfield"
                     ]
                  },
                  {
                     "position": "top"
                  },
                  {
                     "position": "bottom",
                     "content": [
                     "<a class='fa fa-phone' href='tel:79248390131'></a>",
                     "<a class='fa fa-envelope' href='mailto:asarbitr@mail.ru'></a>",
                        "<a class='fa fa-whatsapp' href='https://wa.me/79248390131'></a>",
                    
                     ]
                  }
               ]
            });
         });