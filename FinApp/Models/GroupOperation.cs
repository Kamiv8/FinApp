using System.ComponentModel.DataAnnotations.Schema;

namespace FinApp.Models
{
    public class GroupOperation
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int GroupOperationId { get; set; }
        public int GroupId { get; set; }
        public int UserId { get; set; }
        public string Title { get; set; }
        public decimal Price { get; set; }
        public string Date { get; set; }
        public string Description { get; set; }
        public decimal CurrentMoney { get; set; }
    }
}
