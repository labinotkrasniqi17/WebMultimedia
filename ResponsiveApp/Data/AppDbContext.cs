// using JobifyApp.Models;
// using Microsoft.AspNetCore.Identity;
// using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
// using Microsoft.EntityFrameworkCore;
// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;

// namespace JobifyApp.Data
// {
//     public class AppDbContext : DbContext
//     {

//         public AppDbContext(DbContextOptions options) : base(options)
//         {
//         }
//         public DbSet<Contact> Contacts { get; set; }
//         protected override void OnModelCreating(ModelBuilder builder)
//         {
//             base.OnModelCreating(builder);

//             builder
//                 .Entity<Contact>(builder =>
//                 {
//                     builder.HasNoKey();
//                     builder.ToTable("Contact");
//                 });
//         }
//     }
// }
