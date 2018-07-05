using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DC.Web.Models.MultipleContent
{
    public class MultipleContentCard
    {
        public int Id { get; set; }
        public string Header { get; set; }
        public string ImageSrc { get; set; }
        public string Description { get; set; }
        public int LinkToPageId { get; set; }
    }
}
