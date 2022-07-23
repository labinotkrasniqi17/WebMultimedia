using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JobifyApp.Models;
using JobifyApp.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace JobifyApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ContactController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Contact>>> GetContacts()
        {

            var contacts = await _context.Contacts.ToListAsync();

            return Ok(new { message = "success", problemsFounded = contacts.Count(), contacts });
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Contact>> GetContact(Guid id)
        {

            return await _context.Contacts.FindAsync(id);

        }

        [HttpPost]
        public async Task<ActionResult<Contact>> CreateContact(Contact contact)
        {

            _context.Contacts.Add(contact);

            var result = await _context.SaveChangesAsync() > 0;

            if (result) return Ok(new { message = "Contact created successful!", contact });

            return BadRequest(new ProblemDetails { Title = "Problem with creating new problem!" });
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Contact>> EditContact(Guid id, Contact contact)
        {
            var contactEdited = await _context.Contacts.FindAsync(id);

            if (contactEdited != null)
            {
                contactEdited.ContactId = id;
                contactEdited.Name = contact.Name;
                contactEdited.Email = contact.Email;
                contactEdited.Subject = contact.Subject;
                contactEdited.Message = contact.Message;


                _context.Contacts.Update(contactEdited);

                var result = await _context.SaveChangesAsync() > 0;

                if (result) return Ok(new { message = "Contact Edited Successfully!", contact });


            }
            else
            {
                return BadRequest(new ProblemDetails { Title = "Problem with editing this contact!" });
            }
            return Ok();
        }
        [HttpDelete]
        public async Task<ActionResult<Contact>> DeleteAll()
        {
            var contacts = await _context.Contacts.ToListAsync();

            _context.Contacts.RemoveRange(contacts);

            var result = await _context.SaveChangesAsync() > 0;

            if (result) return Ok(new { message = "Deleted Successfully" });

            return BadRequest(new ProblemDetails { Title = "Problem with deleting these contacts!" });
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Contact>> DeleteContact(Guid id)
        {
            var contact = await _context.Contacts.FindAsync(id);

            if (contact == null) return NotFound();

            _context.Contacts.Remove(contact);

            var result = await _context.SaveChangesAsync() > 0;

            if (result) return Ok(new { message = "Deleted Successfully" });

            return BadRequest(new ProblemDetails { Title = "Problem with deleting this Contact!" });
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> Contact(Guid id)
        {
            var contact = await _context.Contacts.FindAsync(id);

            if (contact!=null)
            {
                return Ok(new { message = "success", contact });

            }
            else
            {
                return BadRequest(new ProblemDetails { Title="Not Found" });
            }


        }
    }
}