using System;
using System.Collections.Generic;
using System.Text;

namespace DC.Model
{
    public class Card
    {
        public int Id { get; set; }
        public int PageId { get; set; }
        public int ToPageId { get; set; }
        public int Order { get; set; }
        public string Header { get; set; }
        public string Description { get; set; }
        public string ImagePath { get; set; }
        public bool IsImageOnTop { get; set; }
        public Page Page { get; set; }
        public Page ToPage { get; set; }
    }
}
