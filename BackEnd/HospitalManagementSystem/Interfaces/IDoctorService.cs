using HospitalManagementSystem.Models;
using HospitalManagementSystem.Models.DTOs;

namespace HospitalManagementSystem.Interfaces
{
    public interface IDoctorService
    {
        public Task<UserResponseDTO?> AddDcotor(DoctorDTO doctor);
        public Task<Doctor?> DeleteDcotor(int id);
        public Task<Doctor?> GetDcotor(int id);
        public Task<ICollection<Doctor>?> GetAllDcotors();
        public Task<Doctor?> UpdateDoctor(Doctor doctor);
    }
}
