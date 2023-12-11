using System.Diagnostics.CodeAnalysis;
using System.Web.Mvc;

namespace MyECP.Web.Common
{
    [ExcludeFromCodeCoverage]
    public class HandleExceptionAttribute : HandleErrorAttribute
    {
        public override void OnException(ExceptionContext filterContext)
        {
            if (filterContext.HttpContext.Request.IsAjaxRequest() && filterContext.Exception != null)
            {
                // can't inject dependency on IErrorMessage because HandleErrorAttribute 
                // can't have a non-empty defualt construtor 
                //IErrorMessage messageTranslator = DependencyResolver.Current.GetService<IErrorMessage>();

                //filterContext.HttpContext.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                //filterContext.Result = new JsonResult
                //{
                //    JsonRequestBehavior = JsonRequestBehavior.AllowGet,
                //    Data = new
                //    {
                //        ErrorMessage = messageTranslator.GetErrorMessageByPatternMatch(filterContext.Exception.GetBaseException().Message ?? "")
                //    }
                //};
                filterContext.ExceptionHandled = true;
            }
            else
            {
                base.OnException(filterContext);
            }
        }


    }
}
