using FinApp.Data;
using FinApp.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace FinApp.Controllers
{
    [Route("[controller]/[action]")]
    public class UserController : ControllerBase
    {
        private readonly FinancialContext _finContext;
        public UserController(FinancialContext finContext)
        {
            _finContext = finContext;
        }
        [HttpPost]
        public ActionResult<User> Create([FromBody] User user)
        {
            _finContext.Add(user);
            _finContext.SaveChanges();
            return user;
        }
        public ActionResult<object> FindUser([FromBody] User user)
        {
            User us = _finContext.Users.Single(u => u.Username.Equals(user.Username) && u.Password.Equals(user.Password));
            var v = _finContext.Operations.Where(u => u.UserId == us.Id).ToArray();
            if (us.isLoggedIn == false)
            {
                us.isLoggedIn = true;
                us.Operation = v;
                _finContext.Update(us);
                _finContext.SaveChanges();
                return us;
            }
            else
            {
                return null;
            }

        }
        [HttpPost]
        public void Logout([FromBody] User user)
        {
            User obj = _finContext.Users.Single(u => u.Id.Equals(user.Id));
            obj.isLoggedIn = false;
            _finContext.Update(obj);
            _finContext.SaveChanges();
        }


    }
}
