using DC.Model.Interfaces;

namespace DC.Model.Data
{
    public class CardData : ICardData
    {
        public int Id { get; set; }
        public string ToPageUrl { get; set; }
        public int Order { get; set; }
        public string Header { get; set; }
        public string Description { get; set; }
        public string ImagePath { get; set; }
        public bool IsImageOnTop { get; set; }
    }
}
