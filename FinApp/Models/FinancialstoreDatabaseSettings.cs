using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinApp.Models
{
    public class FinancialstoreDatabaseSettings : IFinancialstoreDatabaseSettings
    {
        public string UserCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
    public interface IFinancialstoreDatabaseSettings
    {
        public string UserCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}
