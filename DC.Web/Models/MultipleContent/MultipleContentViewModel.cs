using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DC.Web.Models.MultipleContent;

namespace DC.Web.Models
{
    public class MultipleContentViewModel
    {
        public string Header { get; set; }
        public List<MultipleContentCard> Cards { get; set; }
        public List<MultipleContentParagraph> Paragraphs { get; set; }
    }
}
