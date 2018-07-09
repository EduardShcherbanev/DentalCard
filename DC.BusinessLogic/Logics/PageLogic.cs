using System.Collections.Generic;
using System.Threading.Tasks;
using DC.BusinessLogic.Interfaces;
using DC.Data.Interfaces;
using DC.Model;
using DC.Model.Data;
using DC.Model.Interfaces;

namespace DC.BusinessLogic.Logics
{
    public class PageLogic : IPageLogic
    {
        private readonly IPageRepository _pageRepository;
        private readonly ICardRepository _cardRepository;
        private readonly IParagraphRepository _paragraphRepository;

        public PageLogic(IPageRepository pageRepository, ICardRepository cardRepository, IParagraphRepository paragraphRepository)
        {
            _pageRepository = pageRepository;
            _cardRepository = cardRepository;
            _paragraphRepository = paragraphRepository;
        }

        public async Task<IPageData> GetPageAsync(string path)
        {
            Page page = await _pageRepository.GetPageAsync(path);

            if (page == null)
            {
                return null;
            }

            List<ICardData> cards = await _cardRepository.GetCardsAsync(page.Id);
            List<IParagraphData> paragraphs = await _paragraphRepository.GetParagraphsAsync(page.Id);

            PageData pageData = new PageData
            {
                Id = page.Id,
                Header = page.Header,
                Path = page.Url,
                Cards = cards,
                Paragraphs = paragraphs
            };

            return pageData;
        }
    }
}
