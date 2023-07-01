using HospitalManagementSystem.Models;
using HospitalManagementSystem.Models.DTOs;

namespace HospitalManagementSystem.Interfaces
{
    public interface ITokenGenerate
    {
        public Task<string> GenerateToken(User user);

    }
}
