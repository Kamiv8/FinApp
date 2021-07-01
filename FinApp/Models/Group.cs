using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace FinApp.Models
{
    public class Group
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int GroupId { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public decimal GroupMoney { get; set; }
        public User Members { get; set; }
        public ICollection<GroupOperation> GroupOperation { get; set; } = new List<GroupOperation>();





    }
}
