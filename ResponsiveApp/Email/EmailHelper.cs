using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;

namespace Identity.Email
{
    public class EmailHelper
    {
        public bool SendEmail(string userEmail, string confirmationLink)
        {
            MailMessage mailMessage = new MailMessage();
            mailMessage.From = new MailAddress("astritmuciqi@gmail.com");
            mailMessage.To.Add(new MailAddress(userEmail));

            mailMessage.Subject = "Confirm your email";
            mailMessage.IsBodyHtml = true;
            mailMessage.Body = confirmationLink;

            SmtpClient client = new SmtpClient();
            client.Credentials = new System.Net.NetworkCredential("astritmuciqi@gmail.com", "62D58CB12C6418114A228FA652D5B3357544");
            client.Host = "smtp.elasticemail.com";
            client.Port = 2525;

            try
            {
                client.Send(mailMessage);
                return true;
            }
            catch (Exception ex)
            {
                // log exception
            }
            return false;
        }

        public bool SendEmailPasswordReset(string email, string name, string subject, string message)
        {
            MailMessage mailMessage = new MailMessage();
            mailMessage.From = new MailAddress(email);
            mailMessage.To.Add(new MailAddress("am49608@ubt-uni.net"));
            mailMessage.Subject = subject;
            mailMessage.IsBodyHtml = true;
            mailMessage.Body =  " Name : <b>" + name+"</b> <br/>"+
                                "Email : <b>"+ email+"</b> <br/>"+
                                "<p>Message : " + message+"</p>";

            SmtpClient client = new SmtpClient();
                        client.Credentials = new System.Net.NetworkCredential("astritmuciqi@gmail.com", "62D58CB12C6418114A228FA652D5B3357544");
            client.Host = "smtp.elasticemail.com";
            client.Port = 2525;

            try
            {
                client.Send(mailMessage);
                return true;
            }
            catch (Exception ex)
            {
                // log exception
            }
            return false;
        }

        public bool SendEmailTwoFactorCode(string userEmail, string code)
        {
            MailMessage mailMessage = new MailMessage();
            mailMessage.From = new MailAddress("astritmuciqi@gmail.com");
            mailMessage.To.Add(new MailAddress(userEmail));

            mailMessage.Subject = "Two Factor Code";
            mailMessage.IsBodyHtml = true;
            mailMessage.Body = code;

            SmtpClient client = new SmtpClient();
                        client.Credentials = new System.Net.NetworkCredential("astritmuciqi@gmail.com", "62D58CB12C6418114A228FA652D5B3357544");
            client.Host = "smtp.elasticemail.com";
            client.Port = 2525;

            try
            {
                client.Send(mailMessage);
                return true;
            }
            catch (Exception ex)
            {
                // log exception
            }
            return false;
        }
    }
}
