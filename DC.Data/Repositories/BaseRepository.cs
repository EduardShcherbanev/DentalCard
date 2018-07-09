using System;
using System.Collections.Generic;
using System.Text;

namespace DC.Data.Repositories
{
    public abstract class BaseRepository
    {
        protected readonly DbContext DbContext;

        protected BaseRepository(DbContext dbContext)
        {
            DbContext = dbContext;
        }
    }
}
