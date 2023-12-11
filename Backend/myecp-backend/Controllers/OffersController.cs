using AAFES_MYECP_POC.Models;
using myecp_backend.App_Start;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace AAFES_MYECP_POC.Controllers
{
    [Authorize]
    [InitializeSimpleMembership]
    public class OffersController : Controller
    {
        // GET: Offers
        public ActionResult Index()
        {
            if (Request.IsAuthenticated)
            {

            }

            var offers = GetOffers();
            return Json(offers, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Details(int id)
        {
            if (Request.IsAuthenticated)
            {

            }

            var offers = GetOffers();
            return Json(offers.FirstOrDefault(c => c.Id == id), JsonRequestBehavior.AllowGet);
        }


        private List<Offer> GetOffers()
        {
            return new List<Offer>()
            {
                new Offer()
                {
                    Id = 1,
                    Name = "Offer Name1",
                    Desc = "Offer Desc1"
                },
                new Offer()
                {
                    Id = 2,
                    Name = "Offer Name2",
                    Desc = "Offer Desc2"
                },
                new Offer()
                {
                    Id = 3,
                    Name = "Offer Name3",
                    Desc = "Offer Desc3"
                }
            };
        }
    }
}