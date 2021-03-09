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
        public ActionResult<User> FindUser([FromBody] User user)
        {
            User obj = _finContext.Users.Single(u => u.Username.Equals(user.Username) && u.Password.Equals(user.Password));
            if (obj.isLoggedIn == false)
            {
                obj.isLoggedIn = true;
                _finContext.Update(obj);
                _finContext.SaveChanges();
                return obj;
            }
            else
            {
                return null;
            }

        }
        [HttpPost]
        public void Logout([FromBody] User user)
        {
            var obj = _finContext.Users.Single(u => u.Id.Equals(user.Id));
            obj.isLoggedIn = false;
            _finContext.Update(obj);
            _finContext.SaveChanges();
        }


    }
}
