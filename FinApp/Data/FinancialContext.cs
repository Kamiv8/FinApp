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
        public DbSet<Image> Images { get; set; }
        public DbSet<Group> Groups { get; set; }
        public DbSet<GroupOperation> GroupOperations { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("User");
            modelBuilder.Entity<Operation>().ToTable("Operation");
            modelBuilder.Entity<Image>().ToTable("ProfileImage");
            modelBuilder.Entity<Group>().ToTable("Group");
            modelBuilder.Entity<GroupOperation>().ToTable("GroupOperation");
        }
    }

}
