using HospitalManagementSystem.Models.DTOs;
using HospitalManagementSystem.Models;

namespace HospitalManagementSystem.Interfaces
{
    public interface IManageUser
    {
        public Task<UserResponseDTO?> Login(UserRequestDTO user);
        public Task<UserResponseDTO?> AdminRegistration(UserDTO user);
        public Task<UserCountDTO?> GetUsersCount();
        public Task<User?> GetUserDetails(int id);

    }
}
