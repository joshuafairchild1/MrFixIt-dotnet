﻿using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace MrFixIt.Models
{
    public class Job
    {
        [Key]
        public int JobId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public bool Completed { get; set; }
        public bool Pending { get; set; }
        public virtual Worker Worker { get; set; }

        public Worker FindWorker(string UserName)
        {
            Worker thisWorker = new MrFixItContext().Workers.FirstOrDefault(worker => worker.UserName == UserName);
            return thisWorker;
        }

        public Job()
        {
            Pending = true;
        }
    }
}
