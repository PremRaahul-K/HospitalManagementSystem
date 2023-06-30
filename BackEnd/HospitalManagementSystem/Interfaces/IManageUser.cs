using HospitalManagementSystem.Models.DTOs;
using HospitalManagementSystem.Models;

namespace HospitalManagementSystem.Interfaces
{
    public interface IManageUser
    {
        public Task<UserResponseDTO?> Login(UserRequestDTO user);
        public Task<UserResponseDTO?> DoctorRegister(DoctorDTO doctor);
        public Task<UserResponseDTO?> PatientRegister(PatientDTO patient);
        public Task<User?> ChangeDoctorStatus(User user);
    }
}
