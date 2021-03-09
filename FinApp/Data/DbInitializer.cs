using FinApp.Models;
using System.Linq;

namespace FinApp.Data
{
    public class DbInitializer
    {
        public static void Initialize(FinancialContext finContext)
        {
            finContext.Database.EnsureCreated();
            if (finContext.Users.Any())
            {
                return;
            }
            var users = new User[] {
                new User {Username = "admin", Password="admin2"  },
                new User {Username = "Kamil", Password="12345"  },
                new User {Username = "Adam", Password="5643654"  },
                new User {Username = "Marek", Password="fds4243df"  },
                new User {Username = "Tomasz", Password="432fd"  },
            };
            foreach (User u in users)
            {
                finContext.Add(u);
            }
            finContext.SaveChanges();
            var operation = new Operation[] {
                new Operation  { Title = "Za marzec", Data="21-03-2021", Description="tako", Price=123,UserId=users[0].Id },
            };
            foreach (Operation o in operation)
            {
                finContext.Add(o);
            }
            finContext.SaveChanges();

        }
    }
}
