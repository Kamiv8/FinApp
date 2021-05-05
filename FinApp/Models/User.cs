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
        public string MainColor { get; set; }
        public string GroupName { get; set; }
        // public byte[] Image { get; set; }
        public ICollection<Image> Image { get; set; } = new List<Image>();
        public ICollection<Operation> Operation { get; set; } = new List<Operation>();
        public ICollection<Group> Group { get; set; } = new List<Group>();

    }
}
