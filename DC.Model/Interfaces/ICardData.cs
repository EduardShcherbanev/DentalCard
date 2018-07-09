namespace DC.Model.Interfaces
{
    public interface ICardData
    {
        int Id { get; set; }
        string ToPageUrl { get; set; }
        int Order { get; set; }
        string Header { get; set; }
        string Description { get; set; }
        string ImagePath { get; set; }
        bool IsImageOnTop { get; set; }
    }
}
