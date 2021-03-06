using FinApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
            foreach (User u in users )
            {
                finContext.Add(u);
            }
            finContext.SaveChanges();

        }
    }
}
