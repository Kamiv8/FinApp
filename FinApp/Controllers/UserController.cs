using FinApp.Data;
using FinApp.Models;

using Microsoft.AspNetCore.Mvc;
using System.IO;
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

            if (_finContext.Users.Count(x => x.Username == user.Username) == 0)
            {

                _finContext.Add(user);
                _finContext.SaveChanges();
                return user;
            }
            return NotFound();
        }
        public ActionResult<object> FindUser([FromBody] User user)
        {
            try
            {
                User us = _finContext.Users.Single(u => u.Username.Equals(user.Username) && u.Password.Equals(user.Password));
                Operation[] v = _finContext.Operations.Where(u => u.UserId == us.Id).ToArray();
                if (us.isLoggedIn == false)
                {
                    us.isLoggedIn = true;
                    us.Operation = v;
                    _finContext.Update(us);
                    _finContext.SaveChanges();
                    return us;
                }
                return null;

            }
            catch (System.Exception e)
            {

                return NotFound();
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

        [HttpPost]
        public ActionResult AddImage()
        {
            foreach (var file in Request.Form.Files)
            {
                var userId = int.Parse(Request.Form["json_data"].ToString());

                if (_finContext.Images.Count(x => x.UserId.Equals(userId)) == 0)
                {
                    Image img = new Image();
                    using (MemoryStream ms = new MemoryStream())
                    {
                        file.CopyTo(ms);
                        img.ImageData = ms.ToArray();
                        img.UserId = userId;
                        img.ContentType = file.ContentType;
                    }
                    _finContext.Images.Add(img);
                    _finContext.SaveChanges();
                    return File(img.ImageData, img.ContentType);

                }

                Image image = _finContext.Images.Single(u => u.UserId.Equals(userId));
                //  User us = _finContext.Users.Single(u => u.Id.Equals(userId));

                using (MemoryStream ms = new MemoryStream())
                {
                    file.CopyTo(ms);
                    image.ImageData = ms.ToArray();
                    image.ContentType = file.ContentType;
                }
                _finContext.Images.Update(image);
                _finContext.SaveChanges();

                return File(image.ImageData, image.ContentType);

            }
            return NotFound();
        }
        [HttpPut]
        public ActionResult<User> ChangeUsername([FromBody] User user)
        {
            User us = _finContext.Users.Single(x => x.Id.Equals(user.Id));
            us.Username = user.Username;
            _finContext.Update(us);
            _finContext.SaveChanges();
            return us;
        }
        [HttpPut]
        public ActionResult<User> ChangePassword([FromBody] User user)
        {
            User us = _finContext.Users.Single(x => x.Id.Equals(user.Id));

            us.Password = user.Password;
            _finContext.Update(us);
            _finContext.SaveChanges();

            return us;

        }
        [HttpPut]
        public void RemoveData([FromBody] User user)
        {
            Operation[] op = _finContext.Operations.Where(x => x.UserId.Equals(user.Id)).ToArray();
            foreach (var item in op)
            {
                _finContext.RemoveRange(item);

            }
            User us = _finContext.Users.Single(x => x.Id.Equals(user.Id));
            us.AllMoney = 0;
            _finContext.SaveChanges();
        }
        [HttpPut]
        public ActionResult<User> ChangeColor([FromBody] User user)
        {
            User us = _finContext.Users.Single(x => x.Id.Equals(user.Id));
            us.MainColor = user.MainColor;
            _finContext.SaveChanges();


            return us;

        }



    }
}
