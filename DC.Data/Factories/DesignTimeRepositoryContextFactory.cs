using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace DC.Data.Factories
{
    public class DesignTimeRepositoryContextFactory : IDesignTimeDbContextFactory<DentalCardDbContext>
    {
        public DentalCardDbContext CreateDbContext(string[] args)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json");

            var config = builder.Build();
            var connectionString = config.GetConnectionString("DefaultConnection");

            var optionsBuilder = new DbContextOptionsBuilder<DentalCardDbContext>();
            optionsBuilder.UseSqlServer(connectionString);

            return new DentalCardDbContext(optionsBuilder.Options);
        }
    }
}
