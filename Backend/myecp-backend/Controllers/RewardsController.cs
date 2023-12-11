using AAFES_MYECP_POC.Models;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.IdentityModel.Tokens;
using myecp_backend.App_Start;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace AAFES_MYECP_POC.Controllers
{

    [Authorize]
    [InitializeSimpleMembership]
    public class RewardsController : Controller
    {
        [HttpGet]
        public async Task<ActionResult> Rewards()
        {
            return Json(new { Success = "200" }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Index()
        {
            var rewards = GetRewards();
            return Json(rewards, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Details(int id)
        {
            var rewards = GetRewards();
            return Json(rewards.FirstOrDefault(c => c.Id == id), JsonRequestBehavior.AllowGet);
        }

        private List<Reward> GetRewards()
        {
            return new List<Reward>()
            {
                new Reward()
                {
                    Id = 1,
                    Name = "Reward Name1",
                    Desc = "Reward Desc1"
                },
                new Reward()
                {
                    Id = 2,
                    Name = "Reward Name2",
                    Desc = "Reward Desc2"
                },
                new Reward()
                {
                    Id = 3,
                    Name = "Reward Name3",
                    Desc = "Reward Desc3"
                }
            };
        }
    }
}