using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DC.Model;
using DC.Model.Interfaces;

namespace DC.Data.Interfaces
{
    public interface IParagraphRepository
    {
        Task<List<IParagraphData>> GetParagraphsAsync(int pageId);
    }
}
