using FinApp.Data;
using FinApp.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace FinApp.Controllers
{
    [Route("[controller]/[action]")]
    public class GroupController : ControllerBase
    {
        private readonly FinancialContext _finContext;

        public GroupController(FinancialContext finContext)
        {
            _finContext = finContext;
        }

        [HttpPost]
        public ActionResult<Group> Create([FromBody] Group group)
        {
            if (_finContext.Groups.Count(x => x.Name == group.Name) == 0)
            {
                _finContext.Add(group);
                _finContext.SaveChanges();
                return group;
            }
            return NotFound();
        }

    }
}
