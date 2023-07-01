using HospitalManagementSystem.Interfaces;
using HospitalManagementSystem.Models;
using HospitalManagementSystem.Models.DTOs;
using System.Numerics;
using System.Security.Cryptography;
using System.Text;
using UserAPI.Services;

namespace HospitalManagementSystem.Services
{
    public class ManageUserService : IManageUser
    {
        private readonly IRepo<int, User> _userRepo;
        private readonly ITokenGenerate _tokenService;

        public ManageUserService(IRepo<int, User> userRepo, ITokenGenerate tokenService)
        {
            _userRepo = userRepo;
            _tokenService = tokenService;
        }
        public Task<User?> ChangeDoctorStatus(User user)
        {
            throw new NotImplementedException();
        }
        public Task<UserResponseDTO?> Login(UserRequestDTO user)
        {
            throw new NotImplementedException();
        }
    }
}