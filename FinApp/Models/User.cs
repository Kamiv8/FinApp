using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace FinApp.Models
{
    public class User
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public bool isLoggedIn { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public decimal AllMoney { get; set; }
    }
}
