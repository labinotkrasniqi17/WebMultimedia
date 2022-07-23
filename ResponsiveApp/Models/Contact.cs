using System;
using System.Collections.Generic;

namespace JobifyApp.Models
{
    public class Contact
    {
        public Guid ContactId { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }
        
        public string Subject{ get; set; }

        public string Message { get; set; }

    }
}