using System.Linq;
using Microsoft.AspNetCore.Mvc;
using MrFixIt.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

namespace MrFixIt.Controllers
{
    public class WorkersController : Controller
    {
        private MrFixItContext db = new MrFixItContext();

        [Authorize]
        public IActionResult Index()
        {
            /* Attempts to find the worker account belonging to the authenticated user,
               if successful the worker is passed into the Index view as the model, 
               else user is directed to the Create view */

            Worker thisWorker = db.Workers.Include(worker => worker.Jobs)
                                          .FirstOrDefault(worker => worker.UserName == User.Identity.Name);
            if (thisWorker != null)
            {
                return View(thisWorker);
            }
            else
            {
                return RedirectToAction("Create");
            }
        }

        [Authorize]
        public IActionResult Create()
        {
            return View();
        }

        [Authorize]
        [HttpPost]
        public IActionResult Create(Worker worker)
        {
            /* "Saves" the username of the authenticated user to the newly generated Worker then saves to the db */

            worker.UserName = User.Identity.Name;
            db.Workers.Add(worker); 
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        [Authorize]
        [HttpPost]
        public IActionResult MarkJobComplete(int JobId)
        {
            Job completedJob = db.Jobs.FirstOrDefault(job => job.JobId == JobId);
            completedJob.Completed = true;
            db.Entry(completedJob).State = EntityState.Modified;
            db.SaveChanges();
            return Content("Already completed", "text/plain");
        }
    }
}
