using HospitalManagementSystem.Models;
using HospitalManagementSystem.Models.DTOs;

namespace HospitalManagementSystem.Interfaces
{
    public interface ITokenGenerate
    {
        public string GenerateToken(User user);

    }
}
