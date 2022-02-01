import os
import smtplib

# GMAIL_USER is in the .env folder. The value is the Gmail App Code provided by the client.
email_user=os.environ["GMAIL_USER"]
# GMAIL_PASSWORD is in the .env folder. The value is the Gmail account that the code is linked to.
email_pwd=os.environ["GMAIL_PASSWORD"]

# TLS/STARTTLS: 587 is the port for TLS/STARTTLS (see https://support.google.com/mail/answer/7126229?hl=en#zippy=%2Cstep-change-smtp-other-settings-in-your-email-client)
with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
    smtp.set_debuglevel(2)
    smtp.ehlo() 
    smtp.starttls()
    smtp.ehlo()
    smtp.login(email_user, email_pwd)
    subject = "Test email."
    body = "Blah Blah Blah"
    message = "Subject: " + subject + "\n\n" + body
    smtp.sendmail(email_user, "bob.hunt@mailinator.com", message)

print('completed successfully!')
