$(function () {
  $("#contact-form").validate({
    rules: {
      お名前: { required: true },
      //ふりがな: { required: true },
      Email: { required: true, email: true },
      会社名: { required: true },
      お問い合わせ内容: { required: true },
    },
    messages: {
      お名前: {
        required: "※ お名前は必須項目です。",
      },
      //ふりがな: {
      //required: "※ ふりがなは必須項目です。",
      // },
      Email: {
        required: "※ メールアドレスは必須項目です。",
        email: "Eメールの形式で入力して下さい。",
      },
      会社名: {
        required: "※ 会社名は必須項目です。",
      },
      お問い合わせ内容: {
        required: "※ お問い合わせ内容は必須項目です。",
      },
    },
    errorElement: "span",
    errorPlacement: function (error, elements) {
      error.appendTo(elements.data("error_message"));
    },
  });
});
