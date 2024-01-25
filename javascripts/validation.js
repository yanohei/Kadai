document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('form');
  const emailField = form.querySelector('#email');
  const emailConfirmField = form.querySelector('#email_confirm');
  const alertMessage = document.getElementById('alert');
  const emailConfirmRow = emailConfirmField.closest('tr');

  // 初期状態ではエラーメッセージを非表示にする
  alertMessage.style.display = 'none';

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (emailField.value !== emailConfirmField.value) {
      alertMessage.textContent = 'Eメールが一致しません';
      alertMessage.style.display = 'block';
      emailConfirmField.classList.add('alert_bg');
    } else {
      alertMessage.textContent = '';
      alertMessage.style.display = 'none';
      emailConfirmField.classList.remove('alert_bg');
      form.submit();
    }
  });

  // フォームリセット時にエラーメッセージと背景色をクリア
  form.addEventListener('reset', function() {
    alertMessage.textContent = '';
    alertMessage.style.display = 'none';
    emailConfirmField.classList.remove('alert_bg');
  });

  // Eメール確認フォームが変更された際にもリアルタイムで確認
  emailConfirmField.addEventListener('input', function() {
    if (emailField.value === emailConfirmField.value) {
      alertMessage.textContent = '';
      alertMessage.style.display = 'none';
      emailConfirmField.classList.remove('alert_bg');
    } else {
      alertMessage.textContent = 'Eメールが一致しません';
      alertMessage.style.display = 'block';
      emailConfirmField.classList.add('alert_bg');
    }
  });

  // エラーメッセージを確認用Eメールフォームの下に表示
  emailConfirmRow.parentNode.insertBefore(alertMessage, emailConfirmRow.nextSibling);
});