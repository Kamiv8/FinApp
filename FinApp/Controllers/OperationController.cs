using FinApp.Data;
using FinApp.Models;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Linq;

namespace FinApp.Controllers
{
    [Route("[controller]/[action]")]
    public class OperationController : Controller
    {
        private readonly FinancialContext _finContext;

        public OperationController(FinancialContext financialContext)
        {
            _finContext = financialContext;
        }
        [HttpPost]
        public ActionResult<User> Create([FromBody] Operation operation)
        {
            _finContext.Add(operation);
            _finContext.SaveChanges();

            User user = _finContext.Users.Single(x => x.Id == operation.UserId);
            decimal sum = _finContext.Operations.Where(x => x.UserId == operation.UserId).Sum(x => x.Price);
            user.AllMoney = sum;
            operation.CurrentMoney = sum;
            _finContext.Update(operation);
            _finContext.SaveChanges();


            var v = _finContext.Operations.Where(u => u.UserId == user.Id).ToArray();
            user.Operation = v;

            _finContext.Update(user);


            _finContext.SaveChanges();
            //IQueryable<User> users = _finContext.Users.FromSqlRaw("exec UpdateData @UserId", 1);
            return user;
        }
        [HttpPost]
        public ActionResult<object> GetData([FromBody] User user)
        {

            User userr = _finContext.Users.Single(x => x.Id == user.Id);

            var data = _finContext.Operations.Where(x => x.UserId == user.Id).Select(x => new
            {
                x.Title,
                x.Price,
                x.Date,
                x.CurrentMoney

            }).ToArray();

            return data;
        }

        [HttpPost]
        public ActionResult<object> SortByCategory([FromBody] Operation operation)
        {
            User user = _finContext.Users.Single(x => x.Id == operation.UserId);

            var data = _finContext.Operations.Where(x => x.UserId == user.Id).ToList();
            Operation[] sorted;
            if (operation.Title == "date")
            {

                sorted = data.OrderByDescending(o => o.OperationId).ToArray();
            }
            else if (operation.Title == "name")
            {
                sorted = data.OrderBy(o => o.Title).ToArray();

            }
            else
            {
                sorted = data.OrderByDescending(o => o.Price).ToArray();

            }


            return sorted;

        }
    }
}
