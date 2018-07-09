using System;
using System.Collections.Generic;
using DC.Model.Interfaces;

namespace DC.Model.Data
{
    public class PageData : IPageData
    {
        public int Id { get; set; }
        public string Path { get; set; }
        public string Header { get; set; }
        public List<ICardData> Cards { get; set; }
        public List<IParagraphData> Paragraphs { get; set; }
    }
}
