using HospitalManagementSystem.Models;

namespace HospitalManagementSystem.Interfaces
{
    public interface IPatientService
    {
        public Task<Patient?> AddPatient(Patient patient);
        public Task<Patient?> DeletePatient(int id);
        public Task<Patient?> GetPatient(int id);
        public Task<ICollection<Patient>?> GetAllPatients();
        public Task<Patient?> UpdatePatient(Patient patient);
    }
}
