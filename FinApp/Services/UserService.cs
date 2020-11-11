using FinApp.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinApp.Services
{
    public class UserService
    {
        private readonly IMongoCollection<User> _User;
        public UserService(IFinancialstoreDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _User = database.GetCollection<User>(settings.UserCollectionName);
        }
        public List<User> Get() =>
            _User.Find(book => true).ToList();
        public User Get(string id) =>
            _User.Find<User>(book => book.Id == id).FirstOrDefault();
        public User Find(string username, string password)
        {
            User user = _User.Find<User>(user => (user.Username == username && user.Password == password)).FirstOrDefault();
            if (user != null)
            {
                return user;
            }
            return new User() { Id = "X", Username = "X", Password = "X" };


        }

        public User Create(User user)
        {
            User us = _User.Find<User>(users => (user.Username == users.Username)).FirstOrDefault();
            if (us == null)
            {
                _User.InsertOne(user);
                return user;

            }
            return null;
        }

    }
}
