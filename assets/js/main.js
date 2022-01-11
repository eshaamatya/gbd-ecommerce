var header = document.getElementById("myDIV");
if(header){
  var btns = header.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
  }
}

//sidebar
$(function() {
  var Accordion = function(el, multiple) {
  this.el = el || {};
  this.multiple = multiple || false;
  
  var links = this.el.find('.link');
  
  links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }
  
  Accordion.prototype.dropdown = function(e) {
  var $el = e.data.el;
  $this = $(this),
  $next = $this.next();
  
  $next.slideToggle();
  $this.parent().toggleClass('open');
  
  if (!e.data.multiple) {
  $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
  };
  }
  
  var accordion = new Accordion($('#accordion'), false);
  });
  

  //tabpills
  
  function openProductTab(tabName,elmnt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
    }
    document.getElementById(tabName).style.display = "block";
  
  }
  // Get the element with id="defaultOpen" and click on it
  if(document.getElementById("defaultOpen")){
    document.getElementById("defaultOpen").click();
  }
  jQuery('.payment-method input.form-check-input').click(function(){
    var isActive = jQuery(this).hasClass('active');
    if(isActive){ return; }
    
    jQuery('.payment-method input.form-check-input.active').removeClass('active');
    jQuery(this).addClass('active');

    var targetTab = jQuery(this).data('tab-id');
    jQuery('.tab.active').removeClass('active').addClass('hidden');
    jQuery('#'+targetTab).removeClass('hidden').addClass('active');
});