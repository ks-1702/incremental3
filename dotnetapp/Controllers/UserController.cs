using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;
 
namespace dotnetapp.Controllers
{
   
 
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext context;
 
        public UserController(ApplicationDbContext _context)
        {
            context = _context;
        }
 
        [HttpGet]
 
        // [Route("ListTeam")]
        // public IActionResult Get()
        // {
        //     var data=from m in context.Teams select m;
        //     return Ok(data);
        // }
 

        [HttpPost]
        [Route("UserRegister")]
        public IActionResult Register(User u) {
            context.Users.Add(u);
            context.SaveChanges();
            return RedirectToAction("Login");
        }
 
        [HttpPost]
        [Route("UserLogin")]
 
        public IActionResult Login(User u) {
            if(ModelState.IsValid)
            {
                var user=context
            }

        }
 
        
 
 
       
    }
}
