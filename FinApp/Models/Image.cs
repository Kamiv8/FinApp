using System.ComponentModel.DataAnnotations.Schema;

namespace FinApp.Models
{
    public class Image
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ImageId { get; set; }
        public int UserId { get; set; }
        public string ContentType { get; set; }
        public byte[] ImageData { get; set; }
    }
}
