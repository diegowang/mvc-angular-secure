using System.Web.Mvc;
using System.Web.Routing;

namespace mvc_angular_secure.Infrastructure
{
    public class CustomAuthorize : AuthorizeAttribute
    {
        protected override void HandleUnauthorizedRequest(AuthorizationContext filterContext)
        {
            //string controller = filterContext.RouteData.Values["controller"].ToString();
            string CurrentURL = filterContext.HttpContext.Request.RawUrl;
            string returnurl = "/Account/Login?returnurl=" + CurrentURL;
            //filterContext.Result = new RedirectToRouteResult(new
            //RouteValueDictionary(new { controller = "Account", action = "Login" }));
            filterContext.Result = new RedirectResult(returnurl);
        }
    }
}