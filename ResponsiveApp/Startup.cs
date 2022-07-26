
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace JobifyApp
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {


            services.AddControllers().AddNewtonsoftJson(x =>
                x.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);
            //DbContext configuration
            // services.AddDbContext<AppDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString
            //     ("DefaultConnectionString")));
            //Scoped Elements
            //services.AddScoped<IUserRepository, UserRepository>();

            //services.AddScoped<JwtService>();

            //add cors to load data for specific url
            services.AddCors();

            //services.AddIdentityCore<ApplicationUser>(opt => {
            //    opt.User.RequireUniqueEmail = true;
            //    opt.Password.RequireNonAlphanumeric = false;
            //})
            //    .AddRoles<IdentityRole>()
            //    .AddDefaultTokenProviders()
            //    .AddEntityFrameworkStores<AppDbContext>();

            //services.Configure<DataProtectionTokenProviderOptions>(opts => opts.TokenLifespan = TimeSpan.FromHours(10));

            //services.AddAuthentication();

            //services.AddAuthorization();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //cors initialize for different frameworks(react, vue, angular)
            app.UseCors(options => options
            .WithOrigins(new[] { "http://localhost:3000", "http://localhost:8080", "http://localhost:4200", "http://localhost:8000" })
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials());

            // app.UseHttpsRedirection();

            app.UseRouting();

            //app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
