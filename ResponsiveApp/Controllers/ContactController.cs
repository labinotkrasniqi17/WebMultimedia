using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JobifyApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using Identity.Email;

namespace JobifyApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        // private readonly AppDbContext _context;

        // public ContactController(AppDbContext context)
        // {
        //     _context = context;
        // }

        [HttpPost("send")]
        public async Task<ActionResult> ForgotPassword(Contact contact)
        {
            if (!ModelState.IsValid)
                return BadRequest(new ProblemDetails { Title = "Please Fill Data" });

            EmailHelper emailHelper = new EmailHelper();
            bool emailResponse = emailHelper.SendEmailPasswordReset(contact.Email, contact.Name, contact.Subject, contact.Message);

            if (emailResponse)
                return Ok(new { message = "Email was sent successfully" });
            else
            {
                return BadRequest(new ProblemDetails { Title = "No Email was sent" });
            }
        }


    }
}