using HospitalManagementSystem.Models;
using HospitalManagementSystem.Models.DTOs;

namespace HospitalManagementSystem.Interfaces
{
    public interface IPatientService
    {
        public Task<UserResponseDTO?> AddPatient(PatientDTO patient);
        public Task<Patient?> DeletePatient(int id);
        public Task<Patient?> GetPatient(int id);
        public Task<ICollection<Patient>?> GetAllPatients();
        public Task<Patient?> UpdatePatient(Patient patient);
    }
}
