using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

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

        public ICollection<Operation> Operation { get; set; } = new List<Operation>();
    }
}
