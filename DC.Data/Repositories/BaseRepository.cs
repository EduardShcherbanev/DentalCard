using System;
using System.Collections.Generic;
using System.Text;

namespace DC.Data.Repositories
{
    public abstract class BaseRepository
    {
        protected readonly DentalCardDbContext DentalCardDbContext;

        protected BaseRepository(DentalCardDbContext dentalCardDbContext)
        {
            DentalCardDbContext = dentalCardDbContext;
        }
    }
}
