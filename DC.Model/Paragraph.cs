using System;
using System.Collections.Generic;
using System.Text;

namespace DC.Model
{
    public class Paragraph
    {
        public int Id { get; set; }
        public int PageId { get; set; }
        public int Order { get; set; }
        public string Header { get; set; }
        public string Text { get; set; }
        public string ImagePath { get; set; }
        public bool IsTextOnRight { get; set; }
        public Page Page { get; set; }
    }
}
