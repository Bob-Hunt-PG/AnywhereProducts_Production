import os
import smtplib
# import package to facilitate importing HTML form input values
import cgi

# assign variables for the form and the individual HTML form inputs
form = cgi.FieldStorage()
firstName = form["firstName"].value
lastName = form["lastName"].value
email = form["email"].value
phone = form["phone"].value
company = form["company"].value
message = form["message"].value

# additional variables:
fullName = firstName + ' ' + lastName

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
        # subject = "Product Inquiry (website)"
    # subject = "Product Inquiry (" + firstName + ' ' + lastName + ")"
    subject = "Product Inquiry (" + fullName + ")"

    line1 = "Subject: " + subject + "\n\n"
    # line2 = "Name: " + firstName + ' ' + lastName + "\n\n"
    line2 = "Name: " + fullName + "\n\n"
    line3 = "Company: " + company + "\n\n"
    line4 = "Phone: " + phone + "\n\n"
    line5 = "Email: " + email + "\n\n" 
    line6 = "Message: " + message
    content = line1 + line2 + line3 + line4 + line5 + line6
    # content = "Subject: " + subject + "\n\n" + "Name: " + firstName + ' ' + lastName + "\n\n" + "Company: " + company + "\n\n" + "Phone: " + phone + "\n\n" + "Email: " + email + "\n\n" +  "Message: " + message
    # body = "Blah Blah Blah"
    body = content

    smtp.sendmail(email_user, "bob.hunt@mailinator.com", body)

print('completed successfully!')
