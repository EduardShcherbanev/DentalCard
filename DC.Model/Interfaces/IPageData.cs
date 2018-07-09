using System.Collections.Generic;

namespace DC.Model.Interfaces
{
    public interface IPageData
    {
        int Id { get; set; }
        string Path { get; set; }
        string Header { get; set; }
        List<ICardData> Cards { get; set; }
        List<IParagraphData> Paragraphs { get; set; }
    }
}
