using HospitalManagementSystem.Interfaces;
using HospitalManagementSystem.Models.DTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HospitalManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IManageUser _userService;

        public UserController(IManageUser userService)
        {
            _userService = userService;
        }
        [HttpPost]
        [ProducesResponseType(typeof(UserResponseDTO), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<UserResponseDTO>> Login(UserRequestDTO userDTO)
        {
            var userResponseDTO = await _userService.Login(userDTO);
            if (userResponseDTO == null)
            {
                return BadRequest("invalid username or password");
            }
            return Ok(userResponseDTO);
        }
    }
}
