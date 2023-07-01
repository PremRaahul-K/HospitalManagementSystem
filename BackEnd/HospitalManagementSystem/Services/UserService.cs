using HospitalManagementSystem.Interfaces;
using HospitalManagementSystem.Models;
using HospitalManagementSystem.Models.DTOs;
using System.Numerics;
using System.Security.Cryptography;
using System.Text;
using UserAPI.Services;

namespace HospitalManagementSystem.Services
{
    public class UserService : IManageUser
    {
        private readonly IRepo<int, User> _userRepo;
        private readonly ITokenGenerate _tokenService;
        private readonly IDoctorService _doctorService;

        public UserService(IRepo<int, User> userRepo, ITokenGenerate tokenService,IDoctorService doctorService)
        {
            _userRepo = userRepo;
            _tokenService = tokenService;
            _doctorService = doctorService;
        }

        public async Task<UserResponseDTO?> AdminRegistration(UserDTO user)
        {
            UserResponseDTO? userResponseDTO = null;
            var hmac = new HMACSHA512();
            if (user.PasswordClear!=null)
            {
                user.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(user.PasswordClear));
                user.PasswordKey = hmac.Key;
                user.Role = "Admin";
                var addedUser = await _userRepo.Add(user);
                if (addedUser != null)
                {
                    userResponseDTO = new UserResponseDTO
                    {
                        Id = addedUser.Id,
                        Role = addedUser.Role,
                        Token = await _tokenService.GenerateToken(addedUser)
                    };
                    return userResponseDTO;
                }
            }
            return null;
        }

        public async Task<UserResponseDTO?> Login(UserRequestDTO requestUser)
        {
            UserResponseDTO? responseUser = null;
            var users = await _userRepo.GetAll();
            if (users != null)
            {
                var user = users.FirstOrDefault(u => u.Email == requestUser.Email);
                if (user != null)
                {
                    var hmac = new HMACSHA512(user.PasswordKey);
                    var userpass = hmac.ComputeHash(Encoding.UTF8.GetBytes(requestUser.Password));
                    for (int i = 0; i < userpass.Length; i++)
                    {
                        if (userpass[i] != user.PasswordHash[i])
                        {
                            return null;
                        }
                    }
                    responseUser = new UserResponseDTO();
                    responseUser.Id = user.Id;
                    responseUser.Role = user.Role;
                    if (user.Role != "Doctor")
                    {
                        responseUser.Token = await _tokenService.GenerateToken(user);
                        return responseUser;
                    }
                    var doctor = await _doctorService.GetDcotor(user.Id);
                    if (doctor != null && doctor.Status == "Not Approved")
                    {
                        return responseUser;
                    }
                    responseUser.Token = await _tokenService.GenerateToken(user);
                    return responseUser;

                }
                return null;
            }
            return null;
        }
    }
}