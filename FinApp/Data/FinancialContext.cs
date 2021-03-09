using FinApp.Models;
using Microsoft.EntityFrameworkCore;

namespace FinApp.Data
{
    public class FinancialContext : DbContext
    {
        public FinancialContext(DbContextOptions<FinancialContext> options) : base(options)
        {

        }
        public DbSet<User> Users { get; set; }
        public DbSet<Operation> Operations { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("User");
            modelBuilder.Entity<Operation>().ToTable("Operation");
        }
    }

}
