using AAFES_MYECP_POC.Models;
using myecp_backend.App_Start;
using myecp_backend.Models;
using System.Web.Mvc;

namespace AAFES_MYECP_POC.Controllers
{
    [Authorize]
    [InitializeSimpleMembership]
    public class ProfileController : Controller
    {
        // GET: Profile
        [HttpPost]
        public ActionResult ChangePassword(ChangePasswordViewModel model)
        {
            return Json(new { success = true }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult ChangePhoneNumber(ChangePasswordViewModel model)
        {
            return Json(new { success = true }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult ChangeAddress(Address model)
        {
            return Json(new { success = true }, JsonRequestBehavior.AllowGet);
        }
    }
}