import os
import smtplib
from email.message import EmailMessage

# GMAIL_USER is in the .env folder. The value is the Gmail App Code provided by the client.
email_user=os.environ["GMAIL_USER"]
# GMAIL_PASSWORD is in the .env folder. The value is the Gmail account that the code is linked to.
email_pwd=os.environ["GMAIL_PASSWORD"]

# SSL: 465 is the port for SSL (see https://support.google.com/mail/answer/7126229?hl=en#zippy=%2Cstep-change-smtp-other-settings-in-your-email-client)
with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
    smtp.set_debuglevel(2)
    smtp.login(email_user, email_pwd)

    msg = EmailMessage()
    msg["Subject"] = "My email subject."
    msg["From"] = email_user
    # msg["To"] = "bob.hunt@mailinator.com"
    msg["To"] = "bhunt@prioritypress.com"
    msg.set_content("Test message through SSL!")

    smtp.send_message(msg)


print('completed successfully!')
