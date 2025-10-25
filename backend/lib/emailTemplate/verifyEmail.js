export function emailVerifyTemplate({
  username = "",
  email = "",
  otp = "",
  expireAt = "",
}) {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>OTP Verification</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f6f8;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 500px;
      background: white;
      margin: 40px auto;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    h2 {
      color: #333;
    }
    .info {
      margin-bottom: 20px;
      line-height: 1.6;
    }
    .otp {
      font-size: 24px;
      font-weight: bold;
      color: #007bff;
      background: #f1f1f1;
      padding: 10px 15px;
      border-radius: 5px;
      display: inline-block;
      letter-spacing: 3px;
    }
    .footer {
      margin-top: 30px;
      font-size: 13px;
      color: #666;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Hello, ${username} 👋</h2>
    <div class="info">
      <p>We received a request to verify your email address:</p>
      <p><strong>${email}</strong></p>
      <p>Your One-Time Password (OTP) is:</p>
      <p class="otp">${otp}</p>
      <p>This OTP will expire at <strong>${expireAt}</strong>.</p>
    </div>
    <div class="footer">
      <p>If you did not request this, please ignore this email.</p>
      <p>— The Verification Team</p>
    </div>
  </div>
</body>
</html>
  `;
}
