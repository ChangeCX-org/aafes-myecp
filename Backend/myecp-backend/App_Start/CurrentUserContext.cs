using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace myecp_backend.App_Start
{
    [Serializable()]
    public class CurrentUserContext
    {
        public string UserName { get; set; }
    }
}