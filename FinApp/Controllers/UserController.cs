using FinApp.Models;
using FinApp.Services;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinApp.Controllers
{
    [Route("[controller]/[action]")]
    public class UserController : ControllerBase
    {
        private readonly UserService _userService;
        public UserController(UserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public ActionResult<List<User>> Get() =>
     _userService.Get();

        [HttpGet("{id:length(24)}", Name = "GetUser")]
        public ActionResult<User> Get(string id)
        {
            var user = _userService.Get(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }
        [HttpPost]
        public ActionResult<User> FindUser([FromBody]User users)
        {
            var user = _userService.Find(users.Username, users.Password);
            if (user.Username == users.Username && user.Password == users.Password)
            {
                return user;

            }

            return NotFound();
        }

        [HttpPost]
        public ActionResult<User> Create([FromBody]User user)
        {

            _userService.Create(user);

            return CreatedAtRoute("GetUser", new { id = user.Id.ToString() }, user);
        }

    }
}
