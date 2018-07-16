using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DC.Data.Factories;
using DC.Data.Interfaces;
using DC.Model.Data;
using DC.Model.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace DC.Data.Repositories
{
    public class ParagraphRepository : BaseRepository, IParagraphRepository
    {
        public ParagraphRepository(DentalCardDbContext dentalCardDbContext) : base(dentalCardDbContext)
        {
        }

        public async Task<List<IParagraphData>> GetParagraphsAsync(int pageId)
        {
            return await (from p in DentalCardDbContext.Paragraphs
                          where p.PageId == pageId
                          select new ParagraphData
                          {
                              Id = p.Id,
                              Order = p.Order,
                              Header = p.Header,
                              ImagePath = p.ImagePath,
                              IsTextOnRight = p.IsTextOnRight,
                              Text = p.Text
                          } as IParagraphData).ToListAsync();
        }
    }
}
