using AAFES_MYECP_POC.Models;
using myecp_backend.App_Start;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace AAFES_MYECP_POC.Controllers
{
    [Authorize]
    [InitializeSimpleMembership]
    public class CardsController : Controller
    {
        // GET: Cards
        public ActionResult Index()
        {
            if (Request.IsAuthenticated)
            {

            }

            var cards = GetCards();
            return Json(cards, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Details(int id)
        {
            if (Request.IsAuthenticated)
            {

            }

            var cards = GetCards();
            return Json(cards.FirstOrDefault(c => c.Id == id), JsonRequestBehavior.AllowGet);
        }


        private List<Card> GetCards()
        {
            return new List<Card>()
            {
                new Card()
                {
                    Id = 1,
                    CardNumber = "1234-5678-9012-3456",
                    CCV = 123,
                    ExpiryDate = "0424" //MMYY
                },
                new Card()
                {
                    Id = 2,
                    CardNumber = "2505-2806-2905-0911",
                    CCV = 456,
                    ExpiryDate = "0825" //MMYY
                },
                new Card()
                {
                    Id = 3,
                    CardNumber = "4321-8765-2109-6543",
                    CCV = 789,
                    ExpiryDate = "1226" //MMYY
                }
            };
        }


    }
}