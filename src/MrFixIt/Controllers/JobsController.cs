using System.Linq;
using Microsoft.AspNetCore.Mvc;
using MrFixIt.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;

namespace MrFixIt.Controllers
{
    public class JobsController : Controller
    {
        private MrFixItContext db = new MrFixItContext();

        [Authorize]
        public IActionResult Index()
        {
            Dictionary<string, object> model = new Dictionary<string, object> { };
            
            /* attempts to find the Worker belonging to the authenticated user.
                Worker is loaded into the model so that an if conditional may be used 
                within the view to only display content if the user is a "Worker" */

            Worker thisWorker = db.Workers.FirstOrDefault(worker => worker.UserName == User.Identity.Name);
            model.Add("worker", thisWorker);

            // then load the list of jobs into the model, eagerly-loading the Worker related to each job 

            List<Job> jobs = db.Jobs.Include(job => job.Worker).ToList();
            model.Add("jobs", jobs);
            return View(model);
        }

        [Authorize]
        public IActionResult Create()
        {
            return View();
        }

        [Authorize]
        [HttpPost]
        public IActionResult Create(Job job)
        {
            db.Jobs.Add(job);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        [Authorize]
        [HttpPost]
        public IActionResult Claim(string JobId)
        {
            Job thisJob = db.Jobs.FirstOrDefault(job => job.JobId == int.Parse(JobId));
            thisJob.Worker = db.Workers.FirstOrDefault(worker => worker.UserName == User.Identity.Name);
            db.Entry(thisJob).State = EntityState.Modified;
            db.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}
