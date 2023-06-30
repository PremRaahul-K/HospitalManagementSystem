using HospitalManagementSystem.Interfaces;
using HospitalManagementSystem.Models;
using HospitalManagementSystem.Models.DTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HospitalManagementSystem.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IDoctorService _doctorService;
        private readonly IManageUser _userService;

        public UserController(IDoctorService doctorService,IManageUser userService)
        {
            _doctorService = doctorService;
            _userService = userService;
        }
        [HttpGet]
        [ProducesResponseType(typeof(ActionResult<ICollection<User>>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<ICollection<User>>> GetAllDoctors()
        {
            var doctors = await _doctorService.GetAllDcotors();
            if (doctors == null)
            {
                return NotFound("No doctors are available at the moment");
            }
            return Ok(doctors);
        }
        [HttpPost]
        [ProducesResponseType(typeof(ActionResult<User>), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<ICollection<User>>> AddDoctor(User user)
        {
            var result = await _doctorService.AddDcotor(user);
            if (result == null)
            {
                return NotFound("unable to add the doctor details");
            }
            return Created("Home", result);
        }
        [HttpPut]
        [ProducesResponseType(typeof(ActionResult<User>), StatusCodes.Status202Accepted)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<User>> Update(User user)
        {
            var result = await _doctorService.UpdateDoctor(user);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest("Unable to update doctor details");
        }
        [HttpDelete]
        [ProducesResponseType(typeof(ActionResult<User>), StatusCodes.Status202Accepted)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<User>> Delete(int id)
        {
            var result = await _doctorService.DeleteDcotor(id);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest("Unable to Delete doctor details");
        }
        [HttpPost]
        [ProducesResponseType(typeof(UserDTO), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<UserDTO> Register([FromBody] UserDTO userDTO)
        {
            var user = _userService.Register(userDTO);
            if (user == null)
            {
                return BadRequest("Unable to register");
            }
            return Created("Home", user);
        }
        [HttpPost]
        [ProducesResponseType(typeof(UserDTO), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<UserDTO> Login([FromBody] UserResponseDTO userDTO)
        {
            var user = _userService.Login(userDTO);
            if (user == null)
            {
                return BadRequest("invalid username or password");
            }
            return Ok(user);
        }
    }
}
