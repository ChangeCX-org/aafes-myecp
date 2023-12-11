using MyECP.Web.Common;
using System.Web;
using System.Web.Mvc;

namespace myecp_backend
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
            filters.Add(new HandleExceptionAttribute());
            //filters.Add(new AuthorizedUserMustHaveContextAttribute());
        }
    }
}
