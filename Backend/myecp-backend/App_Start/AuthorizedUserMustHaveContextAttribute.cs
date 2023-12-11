using System;
using System.Web.Mvc;
using System.Web.Routing;
using WebMatrix.WebData;
using System.Diagnostics.CodeAnalysis;
using myecp_backend.Controllers;
using myecp_backend.App_Start;

namespace MyECP.Web.Common
{
    public class DisableContextFilter : Attribute { }

    public class AuthorizedUserMustHaveContextAttribute : ActionFilterAttribute
    {
        public AuthorizedUserMustHaveContextAttribute()
        {

        }

        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            bool disabled = filterContext.ActionDescriptor.IsDefined(typeof(DisableContextFilter), true)
                || filterContext.ActionDescriptor.ControllerDescriptor.IsDefined(typeof(DisableContextFilter), true);

            if (!disabled)
            {
                var authenticated = filterContext.HttpContext.User.Identity.IsAuthenticated;
                var userContext = filterContext.HttpContext.Session["usercontext"] as CurrentUserContext;

                if (userContext == null && authenticated)
                {
                    filterContext.HttpContext.Session.Abandon();
                    /*filterContext.Result = new RedirectToRouteResult(
                        new RouteValueDictionary(
                            new { action = "Index", controller = "Home" }
                            )
                        );*/
                }
                else if (authenticated && !disabled)
                {
                    string userName = userContext.UserName.ToLower();

                    if (!WebSecurity.Initialized)
                    {
                        //clear the session
                        filterContext.HttpContext.Session.Abandon();
                        //redirect to the login page if not already going there
                        if (!(filterContext.Controller is AccountController && filterContext.ActionDescriptor.ActionName.ToLower() == "login"))
                        {
                            filterContext.Result = new RedirectToRouteResult(new RouteValueDictionary(
                            new { action = "Login", controller = "Account" }));
                        }
                    }
                    //If the user is authenticated, compare the usernames in the session and forms auth cookie
                    //WebSecurity.Initialized is true
                    else if (WebSecurity.IsAuthenticated)
                    {
                        //Do the usernames match?
                        if (string.IsNullOrWhiteSpace(userName) || userName != WebSecurity.CurrentUserName.ToLower())
                        {
                            //If not, log the user out and clear their session
                            WebSecurity.Logout();
                            filterContext.HttpContext.Session.Abandon();
                            //redirect to the login page
                            filterContext.Result = new RedirectToRouteResult(new RouteValueDictionary(
                            new { action = "Login", controller = "Account" }));
                        }
                    }
                    //If the user is not authenticated, but the session contains a username                    
                    else if (userName != null)
                    {
                        //log the user out (just in case) and clear the session
                        WebSecurity.Logout();
                        filterContext.HttpContext.Session.Abandon();
                        //redirect to the login page
                        filterContext.Result = new RedirectToRouteResult(new RouteValueDictionary { { "action", "Login" }, { "controller", "Account" } });
                    }

                }
            }

            //var cookie = filterContext.HttpContext.Request.Cookies[CardApplication.RefreshFilter];
            //filterContext.RouteData.Values[CardApplication.IsRefreshed] = cookie != null && cookie.Value == filterContext.HttpContext.Request.Url.ToString();

            //var reqType = filterContext.HttpContext.Request.Cookies[CardApplication.RefreshFilterType];
            //filterContext.RouteData.Values[CardApplication.ReqType] = reqType != null ? reqType.Value : filterContext.HttpContext.Request.RequestType.ToString();

            //var appDecision = filterContext.HttpContext.Request.Cookies[CardApplication.AppDecision];
            //filterContext.RouteData.Values[CardApplication.CardApplied] = appDecision != null ? appDecision.Value.ToString().ToLower() == CardApplication.TrueValue : false;

            base.OnActionExecuting(filterContext);
        }
        public override void OnActionExecuted(ActionExecutedContext filterContext)
        {
            //if (filterContext.ActionDescriptor.ActionName.ToLower() == "index" && filterContext.ActionDescriptor.ControllerDescriptor.ControllerName.ToLower() == "cardapply")
            //{
            //    filterContext.HttpContext.Response.SetCookie(new HttpCookie(CardApplication.RefreshFilter, filterContext.HttpContext.Request.Url.ToString()));
            //    filterContext.HttpContext.Response.SetCookie(new HttpCookie(CardApplication.RefreshFilterType, filterContext.HttpContext.Request.RequestType.ToString()));
            //}
            ////if (filterContext.HttpContext.Request.Url.ToString().ToLower().Contains("CardApply/GetCardApplyPrivacyTerms".ToLower()) ||
            ////   filterContext.HttpContext.Request.Url.ToString().ToLower().Contains("CardApply/Application".ToLower()))
            ////{
            ////    filterContext.HttpContext.Response.SetCookie(new HttpCookie(CardApplication.RefreshFilter, filterContext.HttpContext.Request.Url.ToString()));
            ////    filterContext.HttpContext.Response.SetCookie(new HttpCookie(CardApplication.RefreshFilterType, filterContext.HttpContext.Request.RequestType.ToString()));
            ////    filterContext.HttpContext.Response.SetCookie(new HttpCookie(CardApplication.AppDecision, CardApplication.FalseValue));
            ////}
            //if (filterContext.HttpContext.Request.Url.ToString().ToLower().Contains("CardApply/ApplicationDecision".ToLower())
            //    || filterContext.HttpContext.Request.Url.ToString().ToLower().Contains("CardApply/ApplicationDecisionD".ToLower()))
            //{
            //    filterContext.HttpContext.Response.SetCookie(new HttpCookie(CardApplication.AppDecision, CardApplication.TrueValue));
            //}
        }
    }

    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = false, Inherited = true)]
    [ExcludeFromCodeCoverage]
    public class PreventDuplicateRequestAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            //if (HttpContext.Current.Request[CardApplication.RequestVerificationToken] == null)
            //    return;

            //var currentToken = HttpContext.Current.Request[CardApplication.RequestVerificationToken].ToString();

            //if (HttpContext.Current.Session[CardApplication.LastProcessedToken] == null)
            //{
            //    HttpContext.Current.Session[CardApplication.LastProcessedToken] = currentToken;
            //    return;
            //}

            //lock (HttpContext.Current.Session[CardApplication.LastProcessedToken])
            //{
            //    var lastToken = HttpContext.Current.Session[CardApplication.LastProcessedToken].ToString();

            //    if (lastToken == currentToken)
            //    {
            //        ////Origional implementation got from Google.
            //        //filterContext.Controller.ViewData.ModelState.AddModelError("", CardApplication.BrowserRefreshMsg);
            //        //return;

            //        //Modified based on the expected behavior on Card Apply step 2 (Card Selection)
            //        filterContext.RouteData.Values[CardApplication.ErrorMsg] = CardApplication.BrowserRefreshMsg;
            //        return;

            //    }

            //    HttpContext.Current.Session[CardApplication.LastProcessedToken] = currentToken;
            //}
        }
    }
}