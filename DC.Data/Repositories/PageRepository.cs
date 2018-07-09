using System.Threading.Tasks;
using DC.Data.Interfaces;
using DC.Model;
using Microsoft.EntityFrameworkCore;

namespace DC.Data.Repositories
{
    public class PageRepository : BaseRepository, IPageRepository
    {
        public PageRepository(DbContext dbContext) : base(dbContext)
        {
        }

        public async Task<Page> GetPageAsync(string path)
        {
            return await DbContext.Pages.SingleOrDefaultAsync(p => p.Url == path);
        }
    }
}
