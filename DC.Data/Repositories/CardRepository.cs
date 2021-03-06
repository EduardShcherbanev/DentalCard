﻿using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DC.Data.Factories;
using DC.Data.Interfaces;
using DC.Model.Data;
using DC.Model.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace DC.Data.Repositories
{
    public class CardRepository : BaseRepository, ICardRepository
    {
        public CardRepository(DentalCardDbContext dentalCardDbContext) : base(dentalCardDbContext)
        {
        }

        public async Task<List<ICardData>> GetCardsAsync(int pageId)
        {
                return await (from c in DentalCardDbContext.Cards
                              join p in DentalCardDbContext.Pages on c.ToPageId equals p.Id
                              where c.PageId == pageId
                              select new CardData
                              {
                                  Id = c.Id,
                                  Order = c.Order,
                                  Header = c.Header,
                                  ImagePath = c.ImagePath,
                                  Description = c.Description,
                                  IsImageOnTop = c.IsImageOnTop,
                                  ToPageUrl = p.Url
                              } as ICardData).ToListAsync();
        }
    }
}
