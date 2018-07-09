using System.Threading.Tasks;
using DC.Model;

namespace DC.Data.Interfaces
{
    public interface IPageRepository
    {
        Task<Page> GetPageAsync(string path);
    }
}
