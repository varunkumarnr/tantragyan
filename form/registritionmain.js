
$('input[type="radio"]').click(function() {
        if ($("#r1").is(":checked")) {
            $('.college-op').css("display","block");
            $('.school-op').hide();
            $('#sample').text('College Name');   
        }
        else if ($("#r2").is(":checked")){
            $('.school-op').show();
            $('.college-op').hide();
            $('#sample').text('School Name');
            $('#collegename').attr("placeholder","school name");

        }     
    });        
    $(document).ready(function(){
        $(".form-wrapper .button").click(function(){
          var button = $(this);
          var currentSection = button.parents(".section");
          var currentSectionIndex = currentSection.index();
          var headerSection = $('.steps li').eq(currentSectionIndex);
          currentSection.removeClass("is-active").next().addClass("is-active");
          headerSection.removeClass("is-active").next().addClass("is-active");
      
          $(".form-wrapper").submit(function(e) {
            e.preventDefault();
          });
      
          if(currentSectionIndex === 3){
            $(document).find(".form-wrapper .section").first().addClass("is-active");
            $(document).find(".steps li").first().addClass("is-active");
          }
        });
      });
      


