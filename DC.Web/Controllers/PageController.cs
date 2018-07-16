using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DC.BusinessLogic.Interfaces;
using DC.Model.Interfaces;
using DC.Web.Models;
using DC.Web.Models.MultipleContent;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DC.Web.Controllers
{
    //[Route("api/[controller]")]
    //[ApiController]
    public class PageController : ControllerBase
    {
        private readonly IPageLogic _pageLogic;

        public PageController(IPageLogic pageLogic)
        {
            _pageLogic = pageLogic;
        }

        [HttpGet]
        public async Task<MultipleContentViewModel> GetPage(string url)
        {
            IPageData page = await _pageLogic.GetPageAsync(url);

            if (page == null)
            {
                return null;
            }

            var content = new MultipleContentViewModel
            {
                PageId = page.Id,
                Header = page.Header,
                Cards = page.Cards.OrderBy(c => c.Order).Select(c => new MultipleContentCard
                {
                    Id = c.Id,
                    Header = c.Header,
                    Description = c.Description,
                    ImageSrc = c.ImagePath,
                    LinkToPageUrl = c.ToPageUrl,
                    IsImageOnTop = c.IsImageOnTop
                }).ToList(),
                Paragraphs = page.Paragraphs.OrderBy(p => p.Order).Select(p => new MultipleContentParagraph
                {
                    Id = p.Id,
                    Header = p.Header,
                    Text = p.Text,
                    IsTextOnRight = p.IsTextOnRight,
                    ImageSrc = p.ImagePath
                }).ToList()
            };

            return content;
        }
    }
}