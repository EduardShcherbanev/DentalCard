using System;
using System.Collections.Generic;
using System.Text;
using DC.Model;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DC.Data
{
    public class DentalCardDbContext : IdentityDbContext<ApplicationUser>
    {
        public string UserId { get; set; }

        public DbSet<Page> Pages { get; set; }
        public DbSet<Card> Cards { get; set; }
        public DbSet<Paragraph> Paragraphs { get; set; }

        public DentalCardDbContext(DbContextOptions<DentalCardDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Page>().HasIndex(p => p.Url);
            builder.Entity<Card>().HasIndex(c => new { c.PageId, c.Order });
            builder.Entity<Paragraph>().HasIndex(p => new { p.PageId, p.Order });
        }
    }
}
