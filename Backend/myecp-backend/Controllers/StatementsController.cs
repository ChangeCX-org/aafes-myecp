using AAFES_MYECP_POC.Models;
using myecp_backend.App_Start;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace AAFES_MYECP_POC.Controllers
{
    [Authorize]
    [InitializeSimpleMembership]
    public class StatementsController : Controller
    {
        // GET: Statements
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Details(int id)
        {
            if (Request.IsAuthenticated)
            {

            }

            var statements = GetStatements();
            return Json(statements.FirstOrDefault(c => c.CardId == id), JsonRequestBehavior.AllowGet);
        }


        private List<Statement> GetStatements()
        {
            return new List<Statement>()
            {
                new Statement()
                {
                    Id = 1,
                    CardId = 1,
                    From = "01-01-2023",
                    To = "31-01-2023",
                    TransactionsList = new List<Transaction>()
                    {
                        new Transaction()
                        {
                            Id = 1,
                            ExpenseName = "Dress",
                            ExpenseAmount = 100.00
                        },
                        new Transaction()
                        {
                            Id = 2,
                            ExpenseName = "Books",
                            ExpenseAmount = 20.00
                        },
                        new Transaction()
                        {
                            Id = 3,
                            ExpenseName = "Mobile Phone",
                            ExpenseAmount = 1000.00
                        },
                    }                    
                },
                new Statement()
                {
                    Id = 2,
                    CardId = 1,
                    From = "01-02-2023",
                    To = "29-02-2023",
                    TransactionsList = new List<Transaction>()
                    {
                        new Transaction()
                        {
                            Id = 1,
                            ExpenseName = "Dress",
                            ExpenseAmount = 100.00
                        },
                        new Transaction()
                        {
                            Id = 2,
                            ExpenseName = "Books",
                            ExpenseAmount = 20.00
                        },
                        new Transaction()
                        {
                            Id = 3,
                            ExpenseName = "Mobile Phone",
                            ExpenseAmount = 1000.00
                        },
                    }
                },
                new Statement()
                {
                    Id = 3,
                    CardId = 1,
                    From = "01-03-2023",
                    To = "31-03-2023",
                    TransactionsList = new List<Transaction>()
                    {
                        new Transaction()
                        {
                            Id = 1,
                            ExpenseName = "Dress",
                            ExpenseAmount = 100.00
                        },
                        new Transaction()
                        {
                            Id = 2,
                            ExpenseName = "Books",
                            ExpenseAmount = 20.00
                        },
                        new Transaction()
                        {
                            Id = 3,
                            ExpenseName = "Mobile Phone",
                            ExpenseAmount = 1000.00
                        },
                    }
                }
            };
        }
    }
}