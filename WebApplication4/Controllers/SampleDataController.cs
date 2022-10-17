using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication4.Controllers
{
    [Route("api/[controller]")]
    public class StopListController : Controller
    {
        public List<Stop> data = new List<Stop>
            {
                new Stop { Id = "1", Name="Изменение коэффициента продуктивности" },
                new Stop { Id = "2", Name="Изменение коэффициента продуктивности2"},
            };
        
        [HttpGet("[action]")]
        public IEnumerable<Stop> Stops()
        {
            return data;
        }
        public class Stop
        {
            public string Id { get; set; }
            public string Name { get; set; }
        }

    }

    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
      
        [HttpGet("[action]")]
        public IEnumerable<alldata> Datatable()
        {
            var rng = new Random();
            
            return Enumerable.Range(1,1).Select(index => new alldata
            {
                mesto =  "Ичединское",
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                Qvalue = rng.Next(-20, 55),
                Vvalue = rng.Next(-20, 55),
                Qnvalue = rng.Next(-20, 55)
            });
        }

        public class alldata
        {
            public string mesto { get; set; }
            public string DateFormatted { get; set; }
            public Double Qvalue { get; set; }
            public Double Vvalue { get; set; }
            public Double Qnvalue { get; set; }
        }
    }
}
