"use strict";

// $(() => {
//   $("button").click(() => {
//     $("p")
//       .text("おはようー")
//       .addClass("red-text");
//   });
// });

// $(() => {
//   $("button").click(()=> {
//     $("li")
//       .eq(2)
//       .addClass("red-text");
//   });
// });

// $(() => {
//   $("button").click(() => {
//     $("li:nth-child(odd), li:last-child")
//       .addClass("red-text");
//   });
// });

// $(() => {
//   $("button").click(() => {
//     $("<li>")
//       .text("新しいliだよ")
//       .appendTo("ul");
//   });
// });

// $(() => {
//   $("button").click(() => {
//     $("<li>")
//       .text($("input").val())
//       .appendTo("ul");
//     $("input")
//       .val("")
//       .focus();
//   });
// });

// $(() => {
//   const $input = $("input");
//   $input.focus();

//   $("button").click(() => {
//     $("<li>")
//       .text($input.val())
//       .appendTo("ul");
//     $input
//       .val("")
//     .focus();
//   });
// });

// $(() => {
//   const $input = $("input");
//   $input.focus();

//   $("button").click(() => {
//     $("<li>")
//       .text($input.val())
//       .appendTo("ul");
//     $input
//       .val("")
//       .focus();
//   });

//   $("ul").click(e => {
//     if (e.target.nodeName !== "LI") {
//       return;
//     }
//     if (!confirm("本当に消しちゃうの??")) {
//       return;
//     }
//     e.target.remove();
//   });
// });

// $(() => {
//   $("button").click(() => {
//     $("<li>")
//       .text($("input").val())
//       .appendTo("ul")
//     $("input")
//       .val("")
//       .focus();
//   });
//   $("ul").click(e => {
//     if (e.target.nodeName !== "LI") {
//       return;
//     }
//     if (!confirm("本当に消しちゃうの??")) {
//       return;
//     }
//     $(e.target).fadeOut();
//   });
// });

// $(() => {
//   $("#back-to-top")
//     .hide();
//   $(window).scroll(() => {
//     if ($(this).scrollTop() > 60) {
//       $("#back-to-top").fadeIn();
//     } else {
//       $("#back-to-top").fadeOut();
//     }
//   });
// });

$(() => {
  $("#back-top-top")
    .hide();
  $(window).scroll(() => {
    if ($(window).scrollTop() > 60) {
      $("#back-to-top").fadeIn();
    } else {
      $("#back-to-top").fadeOut();
    }
  });
  $("#back-to-top a").click(() => {
    $('html, body').animate({
      scrollTop: 0,
    } , 500);
  });
});