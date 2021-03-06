﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DC.Model.Interfaces;

namespace DC.BusinessLogic.Interfaces
{
    public interface IPageLogic
    {
        Task<IPageData> GetPageAsync(string path);
    }
}
