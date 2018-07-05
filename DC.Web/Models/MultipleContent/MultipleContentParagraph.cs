using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DC.Web.Models.MultipleContent
{
    public class MultipleContentParagraph
    {
        public int Id { get; set; }
        public string Header { get; set; }
        public string ImageSrc { get; set; }
        public string Text { get; set; }
        public bool IsTextOnRight { get; set; }
    }
}
