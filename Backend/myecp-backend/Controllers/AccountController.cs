using System.Threading.Tasks;
using System.Web.Mvc;
using myecp_backend.Models;
using WebMatrix.WebData;
using myecp_backend.App_Start;
using System.Web.Security;
using Microsoft.IdentityModel.Tokens;
using System.Configuration;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System;
using Microsoft.Ajax.Utilities;
using System.Collections.Generic;
using System.Web.Services.Description;

namespace myecp_backend.Controllers
{
    [Authorize]
    [InitializeSimpleMembership]
    public class AccountController : Controller
    {
        private ApplicationSignInManager _signInManager;
        private ApplicationUserManager _userManager;

        public AccountController()
        {
        }

        //
        // GET: /Account/Login
        [AllowAnonymous]
        public ActionResult Login(string returnUrl)
        {
            ViewBag.ReturnUrl = returnUrl;
            return View();
        }

        //
        // POST: /Account/Login
        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Login(LoginViewModel model, string returnUrl)
        {
            var isLoggedIn = WebSecurity.Login(model.Email, model.Password);

            if (isLoggedIn) { 
                CurrentUserContext userContext = new CurrentUserContext();
                userContext.UserName = model.Email;
                HttpContext.Session["usercontext"] = userContext;
                FormsAuthentication.SetAuthCookie(userContext.UserName, false); 
                return RedirectToAction("Index", "Home");
            }

            return RedirectToAction("Index", "Home");
        }

        [Route("Account/LoginApi")]
        [AllowAnonymous]
        [HttpPost]
        public async Task<ActionResult> LoginApi(LoginViewModel model)
        {
            var isLoggedIn = WebSecurity.Login(model.Email, model.Password);

            if (isLoggedIn)
            {
                CurrentUserContext userContext = new CurrentUserContext();
                userContext.UserName = model.Email;
                FormsAuthentication.SetAuthCookie(userContext.UserName, false);
                HttpContext.Session.Add("usercontext", userContext);                
                string token = GenerateJSONWebToken(model);
                return Json(new {
                    status = "200", success = true, message = "login success", token = token });
            }

            return Json(new { Success = "200" });
        }

        private string GenerateJSONWebToken(LoginViewModel userInfo)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(ConfigurationManager.AppSettings["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);            

            List<Claim> claims = new List<Claim>() {
                new Claim(JwtRegisteredClaimNames.Sub, userInfo.Email),
                new Claim(JwtRegisteredClaimNames.Email, userInfo.Email)
            };

            if (Roles.IsUserInRole(userInfo.Email, "Admin"))
            {
                claims.Add(new Claim("role", "Admin"));
            }
            else if (Roles.IsUserInRole(userInfo.Email, "Customer"))
            {
                claims.Add(new Claim("role", "Customer"));
            }
            else
            {
                claims.Add(new Claim("role", "Guest"));
            }

            var token = new JwtSecurityToken(
                ConfigurationManager.AppSettings["Jwt:Issuer"],
                ConfigurationManager.AppSettings["Jwt:Issuer"],
                claims,
                expires: DateTime.Now.AddMinutes(120),
                signingCredentials: credentials
                );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }


        //
        // GET: /Account/Register
        [AllowAnonymous]
        public ActionResult Register()
        {
            return View();
        }

        //
        // POST: /Account/Register
        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Register(RegisterViewModel model)
        {
            WebSecurity.CreateUserAndAccount(model.Email, model.Password);

            // If we got this far, something failed, redisplay form
            return View(model);
        }
        //
        // POST: /Account/LogOff
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult LogOff()
        {
            WebSecurity.Logout();
            //AuthenticationManager.SignOut(DefaultAuthenticationTypes.ApplicationCookie);
            return RedirectToAction("Index", "Home");
        }
    }
}