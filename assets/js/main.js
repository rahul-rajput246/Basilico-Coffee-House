/**
    * headerFixed
    *  btnmenu
    *  topSearch
    *  video
    *  counter
    *  flatAccordion
    *  tabs
    *  rangeslider
    *  styleshop
    *  btnQuantity
    *  gotop
    *  cursor
    *  retinaLogos
    *  preloader
*/

; (function ($) {

    "use strict";

    var headerFixed = function () {
      if ($("header").hasClass("header-fixed")) {
        var nav = $("#header_main");
  
        if (nav.length) {
          var offsetTop = nav.offset().top,
            headerHeight = nav.height(),
            injectSpace = $("<div>", {
              height: headerHeight,
            });
          injectSpace.hide();
  
          if ($("header").hasClass("style-absolute")) {
            injectSpace.hide();
          } else {
            injectSpace.insertAfter(nav);
          }
  
          $(window).on("load scroll", function () {
            if ($(window).scrollTop() > offsetTop + headerHeight) {
              nav.addClass("is-fixed");
              injectSpace.show();
              $(".header-2 .top").hide();
            } else {
              nav.removeClass("is-fixed");
              injectSpace.hide();
              $(".header-2 .top").show();
            }
  
            if ($(window).scrollTop() > 500) {
              nav.addClass("is-small");
            } else {
              nav.removeClass("is-small");
            }
          });
        }
      }
    };

    var btnmenu = function() {
        if ($('header').hasClass('header')) {

          $('.canvas-button').on('click',function(){
            $('.wg-welcom').toggleClass('active');
          });
          $('.button-close').on('click',function(event){
            $('.wg-welcom').toggleClass('active');
              event.preventDefault();
          });

          $('.mobile-button').on('click', function () {
            $(this).closest('#header_main').find('.mobile-nav-wrap').toggleClass('active');
          });
          $('.mobile-nav-close').on('click', function () {
              $(this).closest('#header_main').find('.mobile-nav-wrap').toggleClass('active');
          });
          $('.mobile-nav-wrap .overlay-mobile-nav').on('click', function () {
              $(this).closest('#header_main').find('.mobile-nav-wrap').toggleClass('active');
          });
  
          $(document).on("click", ".menu-item-has-children-mobile", function () {
              var args = { duration: 600 };
              if ($(this).hasClass("active")) {
                $(this).children(".sub-menu-mobile").slideUp(args);
                $(this).removeClass("active");
              } else {
                $(".sub-menu-mobile").slideUp(args);
                $(this).children(".sub-menu-mobile").slideDown(args);
                $(".menu-item-has-children-mobile").removeClass("active");
                $(this).addClass("active");
              }
          });
          // Keyboard accessibility for interactive toggles
          $('.canvas-button, .button-close, .mobile-button, .mobile-nav-close').attr({
            'role': 'button',
            'tabindex': '0'
          }).on('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              $(this).trigger('click');
            }
          });

          // Prevent jump to top for empty hashes
          $(document).on('click', 'a[href="#"]', function(e) {
            e.preventDefault();
          });
            
        }
    }

    var topSearch=function(){
        
      $(document).on('click',function(e){
          var clickID=e.target.id;if((clickID!=='s')){
              $('.top-search').removeClass('active');
          }});
      $(document).on('click',function(e){
          var clickID=e.target.class;if((clickID!=='a111')){
              $('.show-search').removeClass('active');
      }});
          
      $('.show-search').on('click',function(event){
          event.stopPropagation();});
      $('.search-form').on('click',function(event){
          event.stopPropagation();});
      $('.show-search').on('click',function(event){
          if(!$('.top-search').hasClass("active")){
              $('.top-search').addClass('active');
                  event.preventDefault();
              }
          else
              $('.top-search').removeClass('active');
              event.preventDefault();
              if(!$('.show-search').hasClass("active"))
                  $('.show-search').addClass('active');
              else
                  $('.show-search').removeClass('active'); 
      })
    ;}

    var video = function(){
        if ($('div').hasClass('video-wrap')) {
          $('.popup-youtube').magnificPopup({
            type: 'iframe'
          });
        }
    };

    var counter = function () {
      if ($(document.body).hasClass("counter-scroll")) {
        var a = 0;
        $(window).scroll(function () {
          var oTop = $(".counter").offset().top - window.innerHeight;
          if (a == 0 && $(window).scrollTop() > oTop) {
            if ($().countTo) {
              $(".counter")
                .find(".number")
                .each(function () {
                  var to = $(this).data("to"),
                    speed = $(this).data("speed");
                  $(this).countTo({
                    to: to,
                    speed: speed,
                  });
                });
            }
            a = 1;
          }
        });
      }
    };

    var flatAccordion = function (class1,class2) {
      var args = { duration: 600 };

      $(class2 + ' .toggle-title.active').siblings('.toggle-content').show();
      $(class1 +' .toggle-title').on('click', function () {
          $(class1 + ' ' + class2).removeClass('active');
          $(this).closest(class2).toggleClass('active');

          if( !$(this).is('.active') ) {
              $(this).closest(class1).find('.toggle-title.active').toggleClass('active').next().slideToggle(args);
              $(this).toggleClass('active');
              $(this).next().slideToggle(args);
          } else {
              $(class1 + ' ' + class2).removeClass('active');
              $(this).toggleClass('active');
              $(this).next().slideToggle(args);
          }     
      });
    };

    var tabs = function(){
      $('.widget-tabs').each(function(){
          $(this).find('.widget-content-tab').children().hide();
          $(this).find('.widget-content-tab').children(".active").show();
          $(this).find('.widget-menu-tab').children('li').on('click',function(){
              var liActive = $(this).index();
              var contentActive=$(this).siblings().removeClass('active').parents('.widget-tabs').find('.widget-content-tab').children().eq(liActive);
              contentActive.addClass('active').fadeIn("slow");
              contentActive.siblings().removeClass('active');
              $(this).addClass('active').parents('.widget-tabs').find('.widget-content-tab').children().eq(liActive).siblings().hide();
          });
      });
    };

    var rangeslider = function () {
      if ($("#range-two-val").length > 0) {
        var skipSlider = document.getElementById("range-two-val");
        var skipValues = [
          document.getElementById("skip-value-lower"),
          document.getElementById("skip-value-upper")
        ];

        noUiSlider.create(skipSlider, {
          start: [20, 99],
          connect: true,
          behaviour: "drag",
          step: 1,
          range: {
            min: 20,
            max: 120
          },
        });

        skipSlider.noUiSlider.on("update", function (values, handle) {
          skipValues[handle].innerHTML = "$" + values[handle];
        });
      }
    };

    var styleshop = function() {
      if ($('div').hasClass('wg-shop')) {
        $('.button-list').on('click',function() {
            $('.wg-shop-content').find('.col-md-6').removeClass('col-md-6').addClass('col-xl-12');
            $('.wg-shop-content').find('.product-item').addClass('style-list');
          })
        $('.button-grid').on('click',function() {
            $('.wg-shop-content').find('.col-xl-12').removeClass('col-xl-12').addClass('col-md-6');
            $('.wg-shop-content').find('.product-item').removeClass('style-list');
        })
      }
    };

    var btnQuantity = function () {
      $(".minus-btn").on("click", function (e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest("div").find("input");
        var value = parseInt($input.val());
  
        if (value > 1) {
          value = value - 1;
        }
  
        $input.val(value);
      });
  
      $(".plus-btn").on("click", function (e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest("div").find("input");
        var value = parseInt($input.val());
  
        if (value > 0) {
          value = value + 1;
        }
  
        $input.val(value);
      });
    };


    var gotop = function() {
      if ($('div').hasClass('progress-wrap')) {
      var progressPath = document.querySelector('.progress-wrap path');
      var pathLength = progressPath.getTotalLength();
      progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
      progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
      progressPath.style.strokeDashoffset = pathLength;
      progressPath.getBoundingClientRect();
      progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
      var updateprogress = function() {
          var scroll = $(window).scrollTop();
          var height = $(document).height() - $(window).height();
          var progress = pathLength - (scroll * pathLength / height);
          progressPath.style.strokeDashoffset = progress;
      }
      updateprogress();
      $(window).scroll(updateprogress);
      var offset = 150;
      var duration = 550;
      jQuery(window).on('scroll', function() {
          if (jQuery(this).scrollTop() > offset) {
              jQuery('.progress-wrap').addClass('active-progress');
          } else {
              jQuery('.progress-wrap').removeClass('active-progress');
          }
      });
      jQuery('.progress-wrap').on('click', function(event) {
          event.preventDefault();
          jQuery('html, body').animate({ scrollTop: 0 }, duration);
          return false;
      })
    }}
  
    const cursor = function () {
      var myCursor = jQuery(".tf-mouse");
      if (myCursor.length) {
        if ($("body")) {
          const e = document.querySelector(".tf-mouse-inner"),
            t = document.querySelector(".tf-mouse-outer");
          let n,
            i = 0,
            o = !1;
          (window.onmousemove = function (s) {
            o ||
              (t.style.transform =
                "translate(" + s.clientX + "px, " + s.clientY + "px)"),
              (e.style.transform =
                "translate(" + s.clientX + "px, " + s.clientY + "px)"),
              (n = s.clientY),
              (i = s.clientX);
          }),
            $("body").on(
              "mouseenter",
              "a, .canvas, .progress-wrap",
              function () {
                e.classList.add("mouse-hover"), t.classList.add("mouse-hover");
              }
            ),
            $("body").on(
              "mouseleave",
              "a, .canvas, .progress-wrap",
              function () {
                ($(this).is("a") && $(this).closest(".canvas").length) ||
                  (e.classList.remove("mouse-hover"),
                  t.classList.remove("mouse-hover"));
              }
            ),
            (e.style.visibility = "visible"),
            (t.style.visibility = "visible");
        }
      }
    };
  
    var retinaLogos = function() {
      var retina = window.devicePixelRatio > 1 ? true : false;
        if(retina) {
          var tfheader =$('#logo_header').data('retina');
          if (tfheader) {
            $('#site-logo-inner').find('img').attr({src:tfheader,width:'108px',height:'108px'});
          }
  
          var tfmobile =$('#mobile-logo_header').data('retina');
          if (tfmobile) {
            $('.mobile-nav-wrap').find('img').attr({src:tfmobile,width:'110px',height:'110px'});
          }
  
          var tffooter =$('#logo_footer').data('retina');
          if (tffooter) {
            $('#logo-footer').find('img').attr({src:tffooter,width:'124px',height:'124px'});
          }
        }
    };  

    // var blog = function () {
    //   if ($('div').hasClass('wg-blog')) {
    //     var blog = $('.wg-blog').find('.title')
    //     blog.on( "mouseenter", function (e) {
    //       e.preventDefault();
    //         $(this).parents(".wg-blog").addClass("active");
    //       }
    //     )
    //     blog.on( "mouseleave", function () {
    //         $(this).parents(".wg-blog").removeClass("active");
    //       }
    //     )
    //   }
    // };
  
    var preloader = function () {
      setTimeout(function () {
        $(".preload-container").fadeOut("slow", function () {
            $(this).remove();
        });
      }, 1000);
    };

    /* -------------------------------------------------------------
     * Basilico Coffee House - Interactive Experience & Demo Handlers
     * ----------------------------------------------------------- */

    // Toast Notification System
    const showToast = function (message, icon) {
      icon = icon || '✓';
      var $container = $('.basilico-toast-container');
      if (!$container.length) {
        $container = $('<div class="basilico-toast-container"></div>').appendTo('body');
      }

      var $toast = $(
        '<div class="basilico-toast">' +
          '<span class="basilico-toast-icon">' + icon + '</span>' +
          '<span>' + message + '</span>' +
        '</div>'
      ).appendTo($container);

      setTimeout(function () {
        $toast.addClass('hiding');
        setTimeout(function () {
          $toast.remove();
        }, 300);
      }, 3500);
    };

    // Modal System
    const showModal = function (options) {
      $('.basilico-modal-overlay').remove();

      var detailsHtml = '';
      if (options.details && options.details.length) {
        detailsHtml = '<ul class="basilico-modal-details">';
        options.details.forEach(function (d) {
          detailsHtml += '<li><span>' + d.label + ':</span> <strong>' + d.value + '</strong></li>';
        });
        detailsHtml += '</ul>';
      }

      var badgeHtml = options.badge ? '<span class="basilico-modal-badge">' + options.badge + '</span>' : '';
      var secondaryBtnHtml = options.secondaryBtnText ? '<button class="basilico-btn basilico-btn-secondary" id="basilico-modal-sec">' + options.secondaryBtnText + '</button>' : '';
      var primaryBtnText = options.primaryBtnText || 'Close';

      var modalHtml = $(
        '<div class="basilico-modal-overlay" role="dialog" aria-modal="true">' +
          '<div class="basilico-modal">' +
            '<button class="basilico-modal-close" aria-label="Close dialog">&times;</button>' +
            badgeHtml +
            '<h3>' + (options.title || 'Notification') + '</h3>' +
            '<div class="basilico-modal-body">' +
              (options.content || '') +
              detailsHtml +
            '</div>' +
            '<div class="basilico-modal-actions">' +
              secondaryBtnHtml +
              '<button class="basilico-btn basilico-btn-primary" id="basilico-modal-pri">' + primaryBtnText + '</button>' +
            '</div>' +
          '</div>' +
        '</div>'
      ).appendTo('body');

      var closeModal = function () {
        modalHtml.fadeOut(200, function () { $(this).remove(); });
      };

      modalHtml.find('.basilico-modal-close, #basilico-modal-pri').on('click', function (e) {
        e.preventDefault();
        closeModal();
        if (typeof options.onPrimary === 'function') {
          options.onPrimary();
        }
      });

      if (options.secondaryBtnText) {
        modalHtml.find('#basilico-modal-sec').on('click', function (e) {
          e.preventDefault();
          if (typeof options.onSecondary === 'function') {
            options.onSecondary();
          }
          closeModal();
        });
      }

      modalHtml.on('click', function (e) {
        if ($(e.target).hasClass('basilico-modal-overlay')) {
          closeModal();
        }
      });

      $(document).on('keydown.basilicoModal', function (e) {
        if (e.key === 'Escape') {
          closeModal();
          $(document).off('keydown.basilicoModal');
        }
      });
    };

    // Client-Side Cart System
    var initCart = function () {
      var CART_KEY = 'basilico_cart_v1';
      var getCart = function () {
        try {
          var data = localStorage.getItem(CART_KEY);
          if (data) return JSON.parse(data);
        } catch (e) {}
        // Default initial items
        return [
          { id: 'prod-1', name: 'Instant Coffee', price: 20.00, qty: 1, image: 'assets/images/box-item/avt-product-1.png' },
          { id: 'prod-2', name: 'Milk Ice Coffee', price: 14.00, qty: 1, image: 'assets/images/box-item/avt-product-2.png' },
          { id: 'prod-3', name: 'Sugar Black Coffee', price: 31.00, qty: 1, image: 'assets/images/box-item/avt-product-3.png' }
        ];
      };

      var saveCart = function (cart) {
        try {
          localStorage.setItem(CART_KEY, JSON.stringify(cart));
        } catch (e) {}
      };

      var renderCart = function () {
        var cart = getCart();
        var totalQty = cart.reduce(function (sum, item) { return sum + item.qty; }, 0);
        var subtotal = cart.reduce(function (sum, item) { return sum + (item.price * item.qty); }, 0);

        // Update badge
        $('.wg-bag .number').text(totalQty);

        var $bagBox = $('.wg-bag .bag-box');
        if (!$bagBox.length) return;

        $bagBox.empty();

        if (cart.length === 0) {
          $bagBox.html('<div class="cart-empty-message">Your shopping bag is empty.<br><a href="shop.html" style="color: #C3A27C; text-decoration: underline; margin-top: 8px; display: inline-block;">Browse Coffee & Gear</a></div>');
          return;
        }

        cart.forEach(function (item, index) {
          var isLast = (index === cart.length - 1) ? 'last' : '';
          var itemHtml =
            '<div class="cart-item ' + isLast + '" data-id="' + item.id + '">' +
              '<div class="image">' +
                '<img src="' + item.image + '" alt="' + item.name + '">' +
              '</div>' +
              '<div class="content">' +
                '<div class="price">$' + item.price.toFixed(2) + ' <span style="font-size: 11px; color: #888;">&times; ' + item.qty + '</span></div>' +
                '<div class="name"><a href="shop-single.html">' + item.name + '</a></div>' +
              '</div>' +
              '<button class="cart-item-remove" data-id="' + item.id + '" title="Remove item" aria-label="Remove item">&times;</button>' +
            '</div>';
          $bagBox.append(itemHtml);
        });

        var footerHtml =
          '<div class="cart-drawer-footer">' +
            '<div class="cart-subtotal-row">' +
              '<span>Subtotal:</span>' +
              '<span>$' + subtotal.toFixed(2) + '</span>' +
            '</div>' +
            '<button class="cart-drawer-btn" id="btn-checkout-demo">Checkout (Demo)</button>' +
          '</div>';
        $bagBox.append(footerHtml);
      };

      // Remove item event
      $(document).on('click', '.cart-item-remove', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var id = $(this).data('id');
        var cart = getCart().filter(function (i) { return i.id !== id; });
        saveCart(cart);
        renderCart();
        showToast('Item removed from bag');
      });

      // Checkout demo button
      $(document).on('click', '#btn-checkout-demo', function (e) {
        e.preventDefault();
        var cart = getCart();
        var subtotal = cart.reduce(function (sum, item) { return sum + (item.price * item.qty); }, 0);
        showModal({
          badge: 'Portfolio Showcase',
          title: 'Checkout Preview',
          content: '<p>Thank you for exploring the <strong>Basilico Coffee House</strong> e-commerce experience!</p>' +
                   '<p>In a full production deployment, this button connects to a payment provider (Stripe, Razorpay, Square) with real-time inventory management and automated order tracking.</p>',
          details: [
            { label: 'Total Items', value: cart.reduce(function (s, i) { return s + i.qty; }, 0) + ' items' },
            { label: 'Order Total', value: '$' + subtotal.toFixed(2) }
          ],
          primaryBtnText: 'Keep Shopping',
          secondaryBtnText: 'Clear Cart',
          onSecondary: function () {
            saveCart([]);
            renderCart();
            showToast('Shopping bag cleared');
          }
        });
      });

      // Add to Cart from shop grid
      $(document).on('click', '.product-item .add a', function (e) {
        e.preventDefault();
        var $product = $(this).closest('.product-item');
        var name = $product.find('.name a').text().trim() || 'Signature Coffee';
        var priceText = $product.find('.price').clone().children().remove().end().text().replace('$', '').trim();
        var price = parseFloat(priceText) || 20.00;
        var image = $product.find('.image img').attr('src') || 'assets/images/box-item/avt-product-1.png';
        var id = 'prod-' + name.toLowerCase().replace(/[^a-z0-9]/g, '-');

        var cart = getCart();
        var existing = cart.find(function (i) { return i.id === id; });
        if (existing) {
          existing.qty += 1;
        } else {
          cart.push({ id: id, name: name, price: price, qty: 1, image: image });
        }
        saveCart(cart);
        renderCart();
        showToast('Added to bag: ' + name);
      });

      // Add to cart from shop single
      $(document).on('click', '.wg-quantity .button-style-1', function (e) {
        e.preventDefault();
        var qty = parseInt($('.wg-quantity input[name="number"]').val()) || 1;
        var name = $('.content-inner .name a').text().trim() || 'Instant Coffee';
        var priceText = $('.content-inner .price').text().replace('$', '').trim();
        var price = parseFloat(priceText) || 20.00;
        var image = $('.wg-shop-detail .image img').attr('src') || 'assets/images/box-item/avt-product-1.png';
        var id = 'prod-' + name.toLowerCase().replace(/[^a-z0-9]/g, '-');

        var cart = getCart();
        var existing = cart.find(function (i) { return i.id === id; });
        if (existing) {
          existing.qty += qty;
        } else {
          cart.push({ id: id, name: name, price: price, qty: qty, image: image });
        }
        saveCart(cart);
        renderCart();
        showToast('Added ' + qty + ' &times; ' + name + ' to bag');
      });

      // Wishlist toggle
      $(document).on('click', '.add-wishlist a, .product-item .like a', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        showToast('Saved to your Favorites & Wishlist', '♥');
      });

      renderCart();
    };

    // Reservation & Booking Form Handler
    var initReservations = function () {
      // Set date inputs to tomorrow by default if in the past
      var today = new Date();
      var tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      var minDateStr = today.toISOString().split('T')[0];
      var tomorrowStr = tomorrow.toISOString().split('T')[0];

      $('input[type="date"]').each(function () {
        $(this).attr('min', minDateStr);
        var currentVal = $(this).val();
        if (!currentVal || currentVal < minDateStr) {
          $(this).val(tomorrowStr);
        }
      });

      // Intercept reservation forms
      $('.wg-reservation .comment-form, .reservation-page-form').on('submit', function (e) {
        e.preventDefault();
        var $form = $(this);
        var name = $form.find('input[name="name"]').val() || 'Guest';
        var phone = $form.find('input[type="text"]').not('[name="name"]').val() || '+91 98765 43210';
        var time = $form.find('.event-time select option:selected').text();
        if (time === 'Arrival time') time = '7:00 PM';
        var guests = $form.find('.event-number select option:selected').text();
        if (guests === 'People') guests = '2 Guests';
        var date = $form.find('input[type="date"]').val() || tomorrowStr;

        showModal({
          badge: 'Portfolio Demonstration',
          title: 'Table Reservation Confirmed',
          content: '<p>Thank you, <strong>' + name + '</strong>! Your table reservation request has been received.</p>' +
                   '<p>In a production system, this sends an immediate SMS/Email confirmation to the guest, logs the booking in the cafe host system, and manages table seating.</p>',
          details: [
            { label: 'Guest Name', value: name },
            { label: 'Contact Phone', value: phone },
            { label: 'Reserved Date', value: date },
            { label: 'Time Slot', value: time },
            { label: 'Party Size', value: guests }
          ],
          primaryBtnText: 'Awesome!'
        });

        $form[0].reset();
        $form.find('input[type="date"]').val(tomorrowStr);
      });
    };

    // Contact Form Handler
    var initContact = function () {
      $('.wg-contact-us .comment-form').on('submit', function (e) {
        e.preventDefault();
        var $form = $(this);
        var name = $form.find('input[name="name"]').val() || 'Guest';
        var email = $form.find('input[type="email"]').val() || 'guest@example.com';

        showModal({
          badge: 'Portfolio Demonstration',
          title: 'Message Sent Successfully',
          content: '<p>Thank you, <strong>' + name + '</strong>! Your message has been safely received.</p>' +
                   '<p>In production, this submission dispatches directly to <strong>hello@basilicocoffee.com</strong> via a mail server or webhook integration.</p>',
          details: [
            { label: 'Sender', value: name },
            { label: 'Reply Email', value: email },
            { label: 'Status', value: 'Delivered (Demo Mode)' }
          ],
          primaryBtnText: 'Close'
        });

        $form[0].reset();
      });
    };

    // Newsletter Subscriptions
    var initNewsletter = function () {
      $('#footer .comment-form, .wg-welcom .comment-form').on('submit', function (e) {
        e.preventDefault();
        var $form = $(this);
        var email = $form.find('input[type="email"]').val();
        if (email) {
          showToast('Thank you for subscribing with ' + email + '!');
          $form[0].reset();
        }
      });
    };

    // Search Form Handler
    var initSearch = function () {
      $('.search-form').on('submit', function (e) {
        e.preventDefault();
        var query = $(this).find('input[type="search"]').val();
        if (query && query.trim().length > 0) {
          window.location.href = 'shop.html?search=' + encodeURIComponent(query.trim());
        }
      });
    };

    // Shop Page Product Filter Handler
    var initShopFilters = function () {
      if (!$('.wg-shop').length) return;

      var urlParams = new URLSearchParams(window.location.search);
      var searchParam = urlParams.get('search');

      var filterProducts = function (searchTerm, category) {
        var $items = $('.wg-shop-content .product-item');
        var visibleCount = 0;

        $items.each(function () {
          var text = $(this).text().toLowerCase();
          var matchSearch = !searchTerm || text.indexOf(searchTerm.toLowerCase()) !== -1;
          var matchCat = !category || category === 'all' || category === 'subject' || text.indexOf(category.toLowerCase()) !== -1;

          if (matchSearch && matchCat) {
            $(this).closest('[class*="col-"]').show();
            visibleCount++;
          } else {
            $(this).closest('[class*="col-"]').hide();
          }
        });

        var countText = 'Showing 1–' + visibleCount + ' of 16 results';
        if (searchTerm) {
          countText = 'Showing ' + visibleCount + ' results for "' + searchTerm + '" <a href="shop.html" style="color:#C3A27C; margin-left: 10px; text-decoration: underline;">(Clear Filter)</a>';
        }
        $('.wg-shop .top > p').html(countText);
      };

      if (searchParam) {
        filterProducts(searchParam, null);
      }

      $('.wg-shop .option select').on('change', function () {
        var selected = $(this).val().toLowerCase();
        filterProducts(searchParam, selected);
      });
    };

    // Dom Ready
    $(function () {
      headerFixed();
      btnmenu();
      topSearch();
      video();
      counter();
      flatAccordion('.flat-accordion','.flat-toggle');
      tabs(); 
      rangeslider();
      styleshop();
      btnQuantity();
      gotop();
      cursor();
      retinaLogos();
      preloader();

      // Interactive Features
      initCart();
      initReservations();
      initContact();
      initNewsletter();
      initSearch();
      initShopFilters();
    });

})(jQuery);

