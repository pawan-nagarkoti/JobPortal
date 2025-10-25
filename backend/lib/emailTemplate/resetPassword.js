export const resetPasswordTempate = async ({ RESET_LINK = "", name = "" }) => {
  return `
        <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Password Reset</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f6f8;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    .header {
      background-color: #4f46e5;
      color: #fff;
      text-align: center;
      padding: 30px 20px;
      font-size: 24px;
      font-weight: bold;
    }
    .content {
      padding: 30px 20px;
      color: #333;
      line-height: 1.6;
    }
    .content h2 {
      color: #111827;
    }
    .btn {
      display: inline-block;
      background-color: #4f46e5;
      color: #fff !important;
      text-decoration: none;
      padding: 12px 25px;
      border-radius: 6px;
      font-weight: bold;
      margin-top: 20px;
    }
    .footer {
      font-size: 12px;
      color: #999;
      text-align: center;
      padding: 20px;
    }
    @media screen and (max-width: 480px) {
      .container { margin: 20px; }
      .header { font-size: 20px; padding: 20px 10px; }
      .content { padding: 20px 10px; }
      .btn { padding: 10px 20px; font-size: 16px; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      Your Job Portal
    </div>
    <div class="content">
      <h2>Password Reset Request</h2>
      <p>Hello ${name}</p>
      <p>We received a request to reset your password. Click the button below to reset it. This link will expire in 1 hour.</p>
      <p style="text-align:center;">
        <a href=${RESET_LINK} class="btn">Reset Password</a>
      </p>
      <p>If you did not request this, please ignore this email or contact our support team immediately.</p>
      <p>Thank you,<br>The Your App Team</p>
    </div>
    <div class="footer">
      &copy; 2025 Your App. All rights reserved.
    </div>
  </div>
</body>
</html>

        `;
};
