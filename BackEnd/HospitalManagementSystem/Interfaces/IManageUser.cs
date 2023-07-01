using HospitalManagementSystem.Models.DTOs;
using HospitalManagementSystem.Models;

namespace HospitalManagementSystem.Interfaces
{
    public interface IManageUser
    {
        public Task<UserResponseDTO?> Login(UserRequestDTO user);
        public Task<User?> ChangeDoctorStatus(User user);
    }
}
