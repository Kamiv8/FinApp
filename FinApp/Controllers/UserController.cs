using FinApp.Data;
using FinApp.Models;
using FinApp.Services;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

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
            var obj = _finContext.Users.Single(u => u.Id == user.Id);
            obj.isLoggedIn = false;
            _finContext.Update(obj);
            _finContext.SaveChanges();
        }


    }
}



//[HttpGet]
//public ActionResult<List<User>> Get() =>
//            _userService.Get();

//[HttpGet("{id:length(24)}", Name = "GetUser")]
//public ActionResult<User> Get(string id)
//{
//    var user = _userService.Get(id);

//    if (user == null)
//    {
//        return NotFound();
//    }

//    return user;
//}
//[HttpPost]
//public ActionResult<User> FindUser([FromBody] User users)
//{
//    var user = _userService.Find(users.Username, users.Password);
//    if (user.Username == users.Username && user.Password == users.Password)
//    {

//        return user;

//    }

//    return NotFound();
//}

//[HttpPost]
//public ActionResult<User> Create([FromBody] User user)
//{

//    _userService.Create(user);

//    return CreatedAtRoute("GetUser", new { id = user.Id.ToString() }, user);
//}
//public void Logout()
//{

//}