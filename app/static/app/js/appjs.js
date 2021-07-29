$(function () {

    /* Functions */
  
    var loadForm = function () {
      var btn = $(this);
      $.ajax({
        url: btn.attr("data-url"),
        type: 'get',
        dataType: 'json',
        beforeSend: function () {
          $("#modal-book .modal-content").html("");
          $("#modal-book").modal("show");
        },
        success: function (data) {
          $("#modal-book .modal-content").html(data.html_form);
        }
      });
    };
  
    var saveForm = function () {
      var form = $(this);
      $.ajax({
        url: form.attr("action"),
        data: form.serialize(),
        type: form.attr("method"),
        dataType: 'json',
        success: function (data) {
          if (data.form_is_valid) {
            $("#book-table tbody").html(data.html_book_list);
            $("#modal-book").modal("hide");
          }
          else {
            $("#modal-book .modal-content").html(data.html_form);
          }
        }
      });
      return false;
    };
  
    //////////////
    var calcForm_load = function () {
      var btn = $(this);
      $.ajax({
        url: btn.attr("data-url"),
        type: 'get',
        dataType: 'json',
        beforeSend: function () {
          $("#modal-calc .modal-content").html("");
          $("#modal-calc").modal("show");
          
        },
        success: function (data) {
          $("#modal-calc .modal-content").html(data.html_form);
        }
      });
    };
////////////
    var calcForm_save = function () {
      var form = $(this);
      $.ajax({
        url: form.attr("action"),
        data: form.serialize(),
        type: form.attr("method"),
        dataType: 'json',
        success: function (data) {
          if (data.form_is_valid) {
            $("#book-table tbody").html(data.html_book_list);
            $("#modal-calc").modal("hide");
          }
          else {
            $("#modal-calc .modal-content").html(data.html_form);
            
          }
        }
      });
      return false;
    };
    /////////////
    var recalcForm = function () {
      //alert("The paragraph was clicked.");
      var form = $(this);
      $.ajax({
        url: form.attr("action"),
        data: form.serialize(),
        type: form.attr("method"),
        method: 'POST',
        dataType: 'json',
        success: function (data) {
          if (data.form_is_valid) {
            $("#book-table tbody").html(data.html_book_list);
            $("#modal-calc").modal("hide");
          }
          else {
            $("#modal-calc .modal-content").html(data.html_form);
            
          }
        }
      });
      return false;
  };
    //////////////////////
    /* Binding */
  
    // Create book
    $(".js-create-calc").click(calcForm_load);
    $("#modal-calc").on("submit", ".js-book-create-form_calc", calcForm_save);
    $("#modal-calc").on("submit", "#recalc", recalcForm);
    // Create book
    $(".js-create-book").click(loadForm);
    $("#modal-book").on("submit", ".js-book-create-form", saveForm);
  
    // Update book
    $("#book-table").on("click", ".js-update-book", loadForm);
    $("#modal-book").on("submit", ".js-book-update-form", saveForm);
  
    // Delete book
    $("#book-table").on("click", ".js-delete-book", loadForm);
    $("#modal-book").on("submit", ".js-book-delete-form", saveForm);
  
  });
  