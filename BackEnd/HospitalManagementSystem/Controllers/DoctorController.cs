using HospitalManagementSystem.Interfaces;
using HospitalManagementSystem.Models;
using HospitalManagementSystem.Models.DTOs;
using HospitalManagementSystem.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HospitalManagementSystem.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {
        private readonly IDoctorService _doctorService;

        public DoctorController(IDoctorService doctorService)
        {
            _doctorService = doctorService;
        }
        [HttpPost]
        [ProducesResponseType(typeof(UserResponseDTO), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<UserResponseDTO>> DoctorRegister(DoctorDTO doctorDTO)
        {
            var userResponseDTO = await _doctorService.AddDcotor(doctorDTO);
            if (userResponseDTO == null)
            {
                return BadRequest("Unable to register");
            }
            return Created("Home", userResponseDTO);
        }
        [HttpPost]
        [ProducesResponseType(typeof(ActionResult<Doctor>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Doctor>> GetDoctor(int id)
        {
            var doctor = await _doctorService.GetDcotor(id);
            if (doctor == null)
            {
                return NotFound("No doctor are available at the moment");
            }
            return Ok(doctor);
        }
        [HttpGet]
        [ProducesResponseType(typeof(ActionResult<ICollection<Doctor>>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<ICollection<Doctor>>> GetAllDoctors()
        {
            var doctors = await _doctorService.GetAllDcotors();
            if (doctors == null)
            {
                return NotFound("No doctors are available at the moment");
            }
            return Ok(doctors);
        }
        [HttpPut]
        [ProducesResponseType(typeof(ActionResult<Doctor>), StatusCodes.Status202Accepted)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Doctor>> Update(Doctor doctor)
        {
            var result = await _doctorService.UpdateDoctor(doctor);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest("Unable to update doctor details");
        }
        [HttpDelete]
        [ProducesResponseType(typeof(ActionResult<Doctor>), StatusCodes.Status202Accepted)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Doctor>> Delete(int id)
        {
            var result = await _doctorService.DeleteDcotor(id);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest("Unable to Delete doctor details");
        }

    }
}
