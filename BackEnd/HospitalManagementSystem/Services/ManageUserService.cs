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
        private readonly IRepo<int, Doctor> _doctorRepo;
        private readonly IRepo<int, Patient> _patientRepo;
        private readonly IRepo<int, User> _userRepo;
        private readonly ITokenGenerate _tokenService;

        public ManageUserService(IRepo<int,Doctor> doctorRepo,IRepo<int,Patient> patientRepo,IRepo<int, User> userRepo,ITokenGenerate tokenService)
        {
            _doctorRepo = doctorRepo;
            _patientRepo = patientRepo;
            _userRepo = userRepo;
            _tokenService = tokenService;
        }
        public Task<User?> ChangeDoctorStatus(User user)
        {
            throw new NotImplementedException();
        }

        public async Task<UserResponseDTO?> DoctorRegister(DoctorDTO doctor)
        {
            UserResponseDTO user = null;
            var hmac = new HMACSHA512();
            doctor.User.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(doctor.PasswordClear));
            doctor.User.PasswordKey = hmac.Key;
            doctor.Status = "InActive";
            var resultUser = await _userRepo.Add(doctor.User);
            var resultDoctor = await _doctorRepo.Add(doctor);
            if (resultDoctor != null && resultUser != null)
            {
                user = new UserResponseDTO
                {
                    Email = resultUser.Email,
                    Role = resultUser.Role,
                    Token = _tokenService.GenerateToken(resultUser)
                };
                return user;
            }
            return null;
        }
        public Task<UserResponseDTO?> Login(UserRequestDTO user)
        {
            throw new NotImplementedException();
        }

        public async Task<UserResponseDTO?> PatientRegister(PatientDTO patient)
        {
            UserResponseDTO user = null;
            var hmac = new HMACSHA512();
            patient.User.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(patient.PasswordClear));
            patient.User.PasswordKey = hmac.Key;
            var resultUser = await _userRepo.Add(patient.User);
            var resultPatient = await _patientRepo.Add(patient);
            if (resultPatient != null && resultUser != null)
            {
                user = new UserResponseDTO
                {
                    Email = resultUser.Email,
                    Role = resultUser.Role,
                    Token = _tokenService.GenerateToken(resultUser)
                };
                return user;
            }
            return null;
        }
    }
}
