namespace DC.Model.Interfaces
{
    public interface IParagraphData
    {
        int Id { get; set; }
        int Order { get; set; }
        string Header { get; set; }
        string Text { get; set; }
        string ImagePath { get; set; }
        bool IsTextOnRight { get; set; }
    }
}
