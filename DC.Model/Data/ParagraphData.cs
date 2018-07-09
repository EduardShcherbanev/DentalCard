using DC.Model.Interfaces;

namespace DC.Model.Data
{
    public class ParagraphData : IParagraphData
    {
        public int Id { get; set; }
        public int Order { get; set; }
        public string Header { get; set; }
        public string Text { get; set; }
        public string ImagePath { get; set; }
        public bool IsTextOnRight { get; set; }
    }
}
