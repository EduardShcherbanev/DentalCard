using System.Threading.Tasks;
using DC.Data.Interfaces;
using DC.Model;
using Microsoft.EntityFrameworkCore;

namespace DC.Data.Repositories
{
    public class PageRepository : BaseRepository, IPageRepository
    {
        public PageRepository(DentalCardDbContext dentalCardDbContext) : base(dentalCardDbContext)
        {
        }

        public async Task<Page> GetPageAsync(string path)
        {
            return await DentalCardDbContext.Pages.SingleOrDefaultAsync(p => p.Url == path);
        }
    }
}
